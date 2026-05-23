import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, blogPosts } from "@/data/posts";
import { getFirmBySlug } from "@/data/propfirms";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found - PropBargains Blog",
    };
  }

  return {
    title: `${post.title} | PropBargains Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category, ...post.keywords],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function CategoryTag({ category }: { category: string }) {
  const colors: Record<string, string> = {
    "Firm News": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Reviews: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Guides: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Deals: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  };

  return (
    <span
      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colors[category] || colors["Guides"]}`}
    >
      {category}
    </span>
  );
}

function RelatedFirmCard({ slug, name, logo }: { slug: string; name: string; logo: string }) {
  return (
    <Link
      href={`/firm/${slug}`}
      className="flex items-center gap-3 bg-surface-800 border border-surface-700 rounded-xl p-3 hover:border-amber-500/40 transition-all group"
    >
      <img
        src={logo}
        alt={name}
        className="w-10 h-10 rounded-lg object-cover bg-surface-700"
      />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors truncate">
          {name}
        </p>
        <p className="text-xs text-gray-500">View details →</p>
      </div>
    </Link>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedFirms = post.relatedFirms
    ?.map((firmSlug) => getFirmBySlug(firmSlug))
    .filter(Boolean);

  // Get other posts in same category
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-surface-900 to-[#0A0E1A] pt-8 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-400 truncate">{post.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <CategoryTag category={post.category} />
            <span className="text-sm text-gray-500">{post.readTime} read</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-gray-400 mb-6">{post.excerpt}</p>

          <div className="flex items-center gap-4 pt-4 border-t border-surface-700">
            <div className="flex items-center gap-3">
              {/* Author avatar placeholder */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-surface-950 font-bold text-sm">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{post.author}</p>
                <p className="text-xs text-gray-500">{formatDate(post.date)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <article className="flex-1 min-w-0">
              {/* Featured image placeholder */}
              <div className="bg-gradient-to-br from-amber-500/20 to-surface-900 rounded-2xl h-64 mb-8 flex items-center justify-center border border-surface-700">
                <div className="text-amber-500/30 text-7xl">
                  {post.category === "Firm News" && "📰"}
                  {post.category === "Reviews" && "⭐"}
                  {post.category === "Guides" && "📚"}
                  {post.category === "Deals" && "🔥"}
                </div>
              </div>

              {/* Article body */}
              <div
                className="prose prose-invert prose-amber max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-surface-700">
                <p className="text-sm text-gray-500 mb-3">Keywords</p>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs bg-surface-800 text-gray-400 px-3 py-1.5 rounded-full border border-surface-700"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-10 pt-6 border-t border-surface-700">
                  <h3 className="text-lg font-bold text-white mb-5">More in {post.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.slug}`}
                        className="bg-surface-800 border border-surface-700 rounded-xl p-4 hover:border-amber-500/40 transition-all group"
                      >
                        <h4 className="font-semibold text-white text-sm group-hover:text-amber-400 transition-colors mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-gray-500">{formatDate(relatedPost.date)}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              {/* Related Firms */}
              {relatedFirms && relatedFirms.length > 0 && (
                <div className="bg-surface-800/50 border border-surface-700 rounded-2xl p-5 mb-6 sticky top-8">
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Related Firms
                  </h3>
                  <div className="space-y-3">
                    {relatedFirms.map((firm) =>
                      firm ? (
                        <RelatedFirmCard
                          key={firm.slug}
                          slug={firm.slug}
                          name={firm.name}
                          logo={firm.logo}
                        />
                      ) : null
                    )}
                  </div>
                </div>
              )}

              {/* Back to Blog */}
              <Link
                href="/blog"
                className="flex items-center gap-2 bg-surface-800 border border-surface-700 rounded-xl p-4 hover:border-amber-500/40 transition-all text-gray-400 hover:text-amber-400 group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium text-sm">Back to Blog</span>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-800 py-8 px-4 text-center mt-10">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-surface-950" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-bold text-white">PropBargains</span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2026 PropBargains — Your one stop shop for Prop Traders
        </p>
      </footer>
    </main>
  );
}