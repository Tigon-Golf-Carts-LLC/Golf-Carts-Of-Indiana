# Notre Dame Golf Carts - SEO Configuration Guide

## Overview
This guide explains how to configure and use the comprehensive SEO meta tag system implemented for Notre Dame Golf Carts website.

## Configuration File Location
All SEO settings are centralized in: `client/src/config/seoConfig.ts`

## Quick Start: Adding Verification Codes

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `notredamegolfcarts.com`
3. Choose "HTML tag" verification method
4. Copy the verification code (e.g., `abc123xyz456`)
5. Add to `seoConfig.ts`:
```typescript
verification: {
  google: "abc123xyz456", // <-- Paste your code here
  ...
}
```

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Choose "Meta tag" verification
4. Copy the code from `content="..."`
5. Add to `seoConfig.ts`:
```typescript
verification: {
  bing: "YOUR_BING_CODE_HERE",
  ...
}
```

### Pinterest
1. Go to [Pinterest Business Settings](https://www.pinterest.com/settings/claim)
2. Claim your website
3. Choose "Add HTML tag" method
4. Copy the verification code
5. Add to `seoConfig.ts`

### Yandex
1. Go to [Yandex Webmaster](https://webmaster.yandex.com/)
2. Add your site
3. Choose meta tag verification
4. Add code to `seoConfig.ts`

## How to Use in Pages

### Basic Page Setup
```typescript
import SEOHead from "@/components/SEOHead";

function MyPage() {
  return (
    <>
      <SEOHead
        title="Page Title - Notre Dame Golf Carts"
        description="Page description for search engines and social media"
        canonicalUrl="https://notredamegolfcarts.com/my-page"
        pageType="general"
      />
      {/* Your page content */}
    </>
  );
}
```

### Blog Post Setup (with Article Tags)
```typescript
<SEOHead
  title="Blog Post Title - Notre Dame Golf Carts"
  description="Blog post description"
  canonicalUrl="https://notredamegolfcarts.com/blog/my-post"
  ogType="article"
  isArticle={true}  // Enables article:publisher and article:modified_time
  modifiedTime={new Date("2025-01-20")}  // Optional: Last update time
  ogImage="/path/to/featured-image.jpg"  // Featured image for social sharing
  pageType="general"
/>
```

### Vehicle Detail Page
```typescript
<SEOHead
  title="Evolution D5 Maverick - $12,995 | Notre Dame Golf Carts"
  description="Premium 4-passenger golf cart with advanced features"
  canonicalUrl="https://notredamegolfcarts.com/vehicle/evolution-d5-maverick"
  ogImage="/attached_assets/vehicle-image.jpg"
  ogImageWidth={1200}
  ogImageHeight={800}
  ogType="product"
  pageType="vehicle"
/>
```

## Meta Tags Automatically Generated

The SEOHead component now automatically adds these meta tags to every page:

### Open Graph Tags (Facebook/LinkedIn)
- ✅ `og:title` - Page title
- ✅ `og:description` - Page description
- ✅ `og:url` - Canonical URL
- ✅ `og:site_name` - "Notre Dame Golf Carts"
- ✅ `og:locale` - "en_US"
- ✅ `og:type` - "website" or "article"
- ✅ `og:image` - Featured image (auto-detected from hero backgrounds or specified)
- ✅ `og:image:width` - Image width (default: 1200)
- ✅ `og:image:height` - Image height (default: 630)
- ✅ `og:image:type` - Image MIME type (auto-detected: image/png, image/jpeg, etc.)

### Article-Specific Tags (for Blog Posts)
- ✅ `article:publisher` - Facebook page URL
- ✅ `article:modified_time` - ISO 8601 timestamp of last update

### Twitter Card Tags
- ✅ `twitter:card` - "summary_large_image"
- ✅ `twitter:title` - Page title
- ✅ `twitter:description` - Page description
- ✅ `twitter:image` - Featured image
- ✅ `twitter:site` - @NotreDameGolfIN (configurable in seoConfig.ts)

### Search Engine Verification
- ✅ `google-site-verification` - Google Search Console (when configured)
- ✅ `msvalidate.01` - Bing Webmaster Tools (when configured)
- ✅ `p:domain_verify` - Pinterest (when configured)
- ✅ `yandex-verification` - Yandex Webmaster (when configured)

### Social Profile Verification
- ✅ `<link rel="me">` - Links to Facebook, Twitter, LinkedIn, Instagram profiles
- These links help verify ownership of social media profiles

### Favicon
- ✅ Multiple sizes for different devices (16x16, 32x32, 180x180)
- ✅ Apple touch icon
- ✅ Configurable in `seoConfig.ts`

## Updating Social Media Handles

Edit `client/src/config/seoConfig.ts`:

```typescript
social: {
  facebookPage: "https://www.facebook.com/notredamegolfcarts",
  twitterHandle: "@NotreDameGolfIN",  // Must include @
  instagramProfile: "https://www.instagram.com/notredamegolfcarts",
  linkedInProfile: "https://www.linkedin.com/company/notredamegolfcarts"
}
```

## Testing Your SEO Setup

### 1. Facebook Sharing Debugger
- Visit: https://developers.facebook.com/tools/debug/
- Enter your page URL
- Check how your page will appear when shared on Facebook

### 2. Twitter Card Validator
- Visit: https://cards-dev.twitter.com/validator
- Enter your page URL
- See preview of Twitter card

### 3. LinkedIn Post Inspector
- Visit: https://www.linkedin.com/post-inspector/
- Enter your page URL

### 4. View Page Source
- Right-click on any page → "View Page Source"
- Search for `<meta property="og:` to see all Open Graph tags
- Search for `<meta name="twitter:` to see all Twitter tags
- Verify all tags are present and correct

## Image Best Practices

### Recommended Image Sizes
- **Open Graph / Twitter Cards**: 1200 x 630 pixels
- **Favicon**: 512 x 512 pixels minimum (PNG format)
- **Apple Touch Icon**: 180 x 180 pixels

### Supported Image Formats
- PNG (recommended for logos)
- JPEG (recommended for photos)
- WebP (modern browsers)
- GIF (animated images)

## Troubleshooting

### Meta Tags Not Showing
1. Clear your browser cache
2. Check browser console for JavaScript errors
3. Restart the development server

### Social Share Preview Not Updating
1. Use Facebook's Sharing Debugger to scrape fresh data
2. Allow 24-48 hours for cache to clear on social platforms
3. Ensure your site is publicly accessible (not localhost)

### Verification Code Not Working
1. Double-check you copied the complete code
2. Ensure no extra spaces before/after the code
3. Some platforms may take 24 hours to verify
4. Make sure the code is in `seoConfig.ts` and the page has reloaded

## Advanced: Dynamic Modification Times

For blog posts with actual modification tracking:

```typescript
// Store last modified date in your blog post data
const blogPost = {
  title: "My Blog Post",
  publishedDate: new Date("2025-01-15"),
  modifiedDate: new Date("2025-01-20"), // Last edited
  // ... other fields
};

// Use in SEOHead
<SEOHead
  title={blogPost.title}
  modifiedTime={blogPost.modifiedDate}
  isArticle={true}
  // ... other props
/>
```

## Support

For questions or issues:
- Email: info@notredamegolfcarts.com
- Phone: 1-844-844-6638

## Version History
- v1.0 (2025-01-20): Initial comprehensive SEO implementation
  - Added all Open Graph tags
  - Added Twitter Card tags
  - Added search engine verification support
  - Added article publisher and modified time tags
  - Added rel="me" social profile links
  - Centralized configuration system
