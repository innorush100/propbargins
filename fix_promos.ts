import * as fs from 'fs';

const filePath = 'C:\\Users\\oz097\\.openclaw\\workspace\\propfirms\\data\\propfirms.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all promoCode values with "Visit [FirmName] for current promo codes"
// but keep any REAL codes you specify below
const realCodes: Record<string, {code: string; desc: string; expiry: string}> = {
  // ADD REAL CODES HERE as you get them
  // Example: 'take-profit-trader': { code: 'NOFEE50', desc: '50% off evaluation', expiry: '2026-05-24' }
};

const placeholder = (name: string) => `Visit ${name} for current promo codes`;

content = content.replace(
  /promoCode:\s*"[^"]*"/g,
  (match) => {
    // Check if this firm has a real code
    for (const [slug, realCode] of Object.entries(realCodes)) {
      if (content.includes(slug) && match.includes('promoCode')) {
        return match; // Skip, will handle separately
      }
    }
    return match.replace(/promoCode:\s*"[^"]*"/, 'promoCode: "Check site for current offer"');
  }
);

// Now handle specific firms with placeholders based on name
content = content.replace(
  /name:\s*"([^"]+)"/g,
  (match, name) => {
    const hasRealCode = Object.values(realCodes).some(rc => 
      content.includes(rc.code)
    );
    if (hasRealCode) return match;
    return match;
  }
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done - all promo codes reset to placeholder');