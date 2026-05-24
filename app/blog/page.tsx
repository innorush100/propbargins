"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts, PostCategory } from "@/data/posts";

const categories: (PostCategory | "All")[] = ["All", "Firm News", "Reviews", "Guides", "Deals"];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function CategoryTag({ category }: { category: PostCategory }) {
  const colors: Record<PostCategory, string> = {
    "Firm News": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Reviews: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Guides: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Deals: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  };

  return (
    <span
      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colors[category]}`}
    >
      {category}
    </span>
  );
}

function PostCard({
  post,
  featured = false,
}: {
  post: (typeof blogPosts)[0];
  featured?: boolean;
}) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className={`bg-surface-800 border border-surface-700 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all group cursor-pointer ${
          featured ? "md:col-span-2 lg:col-span-3" : ""
        }`}
      >
        {/* Image placeholder - amber gradient */}
        <div className={`bg-gradient-to-br from-amber-500/20 to-surface-900 ${featured ? "h-48 md:h-56" : "h-36"}`}>
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-amber-500/30 text-6xl font-bold">
              {post.category === "Firm News" && "📰"}
              {post.category === "Reviews" && "⭐"}
              {post.category === "Guides" && "📚"}
              {post.category === "Deals" && "🔥"}
            </div>
          </div>
        </div>

        <div className={`p-5 ${featured ? "md:p-6" : ""}`}>
          <div className="flex items-center gap-3 mb-3">
            <CategoryTag category={post.category} />
            <span className="text-xs text-gray-500">{post.readTime} read</span>
          </div>

          <h3
            className={`font-bold text-white group-hover:text-amber-400 transition-colors mb-2 ${
              featured ? "text-xl md:text-2xl" : "text-lg"
            }`}
          >
            {post.title}
          </h3>

          <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>{post.author}</span>
              <span>•</span>
              <span>{formatDate(post.date)}</span>
            </div>
            <span className="text-sm text-gray-400 group-hover:text-amber-400 transition-colors flex items-center gap-1">
              Read more
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function HeroArticle({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="relative bg-gradient-to-br from-surface-800 to-surface-900 border border-surface-700 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all group cursor-pointer">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-transparent" />
        
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-2/5 bg-gradient-to-br from-amber-500/20 to-surface-900 min-h-48 md:min-h-0 flex items-center justify-center">
            <div className="text-amber-500/30 text-8xl">
              {post.category === "Reviews" && "⭐"}
              {post.category === "Guides" && "📚"}
              {post.category === "Firm News" && "📰"}
              {post.category === "Deals" && "🔥"}
            </div>
          </div>

          {/* Content */}
          <div className="md:w-3/5 p-6 md:p-8 relative">
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <span className="inline-flex items-center gap-1.5 text-xs bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded-full border border-amber-500/30">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                Featured
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <CategoryTag category={post.category} />
              <span className="text-xs text-gray-500">{post.readTime} read</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3 pr-16 md:pr-0">
              {post.title}
            </h2>

            <p className="text-gray-400 mb-5 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="font-medium text-gray-300">{post.author}</span>
                <span>•</span>
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<PostCategory | "All">("All");

  const featuredPost = blogPosts.find((post) => post.featured);
  const filteredPosts =
    activeCategory === "All"
      ? blogPosts.filter((p) => !p.featured)
      : blogPosts.filter((p) => p.category === activeCategory && !p.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-10 px-4 overflow-hidden bg-gradient-to-b from-surface-900 to-[#0A0E1A]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl" />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-amber-500/20">
              📰 Prop Trading Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-gradient">FindYourProp</span> Blog
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Expert reviews, trading guides, and firm news to help you make smarter
              prop trading decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 max-w-6xl mx-auto mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? "bg-amber-500 text-surface-950 border-amber-500"
                  : "bg-surface-800 text-gray-400 border-surface-700 hover:border-amber-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "All" && featuredPost && (
        <section className="px-4 max-w-6xl mx-auto mb-10">
          <HeroArticle post={featuredPost} />
        </section>
      )}

      {/* Posts Grid */}
      <section className="px-4 pb-16 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">
            {activeCategory === "All" ? "Latest Articles" : activeCategory}
          </h2>
          <p className="text-gray-500 text-sm">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-surface-800/50 rounded-2xl border border-surface-700">
            <div className="text-4xl mb-4">📝</div>
            <p className="text-gray-400 text-lg mb-2">No articles in this category yet</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              View all articles
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-800 py-8 px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-surface-950" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-bold text-white">FindYourProp</span>
        </div>
        <p className="text-gray-500 text-sm">
          © 2026 FindYourProp — Your one stop shop for Prop Traders
        </p>
      </footer>
    </main>
  );
}