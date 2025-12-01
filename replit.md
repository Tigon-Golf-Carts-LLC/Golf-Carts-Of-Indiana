# Golf Carts Of Indiana - Website Project

## Overview
This project is for Golf Carts Of Indiana (https://golfcartsofindiana.com), Indiana's premier golf cart dealership. The platform provides a comprehensive online presence for DENAGO and EVOLUTION electric golf cart sales, rentals, and services across all 92 Indiana counties. Key capabilities include complete inventory management, a rental system with location-based services for all Indiana municipalities, customer inquiry handling, and detailed business information. The business vision is to serve as a central hub for golf cart sales and rentals, enhancing market presence and customer accessibility across the entire state of Indiana.

## User Preferences
I want iterative development. Ask before making major changes.

## System Architecture

### UI/UX Decisions
- **Color Scheme**: Primary theme color #0e2e55 (dark blue), Orange accent #ff6100 for buttons and highlights.
- **Design Approach**: Responsive design with a mobile-first approach, utilizing modern card-based layouts for pricing and information display.
- **Visuals**: Integration of professional showroom photographs as dynamic background images across all pages for consistent branding.
- **Navigation**: Clean client-side navigation with automatic scroll-to-top functionality.

### Technical Implementations
- **Frontend**: React with TypeScript, Vite build system, Wouter for routing, shadcn/ui with Radix UI for components, Tailwind CSS for styling, TanStack Query for state management, React Hook Form with Zod for forms.
- **Backend**: Node.js with Express.js.
- **Database**: PostgreSQL with Drizzle ORM for data persistence and PostgreSQL-backed user sessions.
- **API**: RESTful endpoints with JSON responses.
- **Code Structure**: Monorepo with clear separation of frontend, backend, and shared code (`shared/schema.ts` for consistent types).
- **SEO**: Comprehensive sitemap.xml (100+ pages), robots.txt, full Schema Markup integration (Location, Vehicle, Service, Website, Person, Product, LocalBusiness, Organization), and individual pages for Indiana municipalities for local SEO.
- **PWA Configuration**: Progressive Web App enabled with `manifest.json` for enhanced user experience and app shortcuts.

### Feature Specifications
- **Vehicle Inventory**: Detailed listings for DENAGO and EVOLUTION models with specifications and pricing.
- **Rental System**: Location-specific rental services and pricing for Indiana municipalities.
- **Contact Management**: Forms and systems for lead capture and customer inquiries.
- **Location-based Services**: Integration of Google Maps embeds with accurate Indiana location coordinates.

## External Dependencies
- **Google Tag Manager (GTM)**: Used for analytics and marketing tag deployment (GTM-NSN3ZJPP).
- **Google Analytics 4 (GA4)**: Integrated for website analytics (G-QJVWEK6RT8).
- **Google Maps**: Embedded for displaying dealership and service area locations.
- **TIGON Golf Carts**: External links for purchase and financing options.

## Recent Updates and Achievements

### ✅ Complete Rebrand to Golf Carts Of Indiana (December 2025)
- **Brand Identity**: Complete transition from "Notre Dame Golf Carts" to "Golf Carts Of Indiana"
- **Domain**: golfcartsofindiana.com (with absolute URLs throughout)
- **Logo**: Golf Carts OF Indiana_1764172383192.png
- **Email**: info@golfcartsofindiana.com
- **Coverage**: Expanded from St. Joseph County to all 92 Indiana counties
- **SEO Files Updated**: All 23 public SEO files updated with new branding
- **Schema Markup**: All schema files updated with correct logo and absolute URLs
- **Absolute URLs**: All canonical URLs, Open Graph images, and schema markup use https://golfcartsofindiana.com

### ✅ Schema Markup Updates (December 2025)
- **Updated Files**: SchemaMarkup.tsx, LocalBusinessSchema.tsx, PlaceSchema.tsx, ServiceSchema.tsx, WebsiteSchema.tsx, VideoObjectSchema.tsx, AllSchemas.tsx
- **Logo References**: All updated to Golf Carts OF Indiana_1764172383192.png
- **URL Structure**: All URLs converted to absolute format (https://golfcartsofindiana.com/...)

### ✅ Comprehensive SEO & AI Optimization Suite - 23 Files
- **Enhanced Sitemap**: sitemap.xml with 100+ pages (main, brand, vehicle, municipality, rental, policy pages)
- **AI Training Authorization**: Complete suite (llms.txt, ai.txt, gpt.txt, claude.txt, training.txt, nlp.txt) - 6 files
- **SEO & Geographic**: seo.txt (keyword strategy), geo.txt (complete Indiana coverage) - 2 files
- **Bot Management**: bots.txt, crawlers.txt (50+ crawler types, zero restrictions) - 2 files
- **Web Standards**: manifest.json, browserconfig.xml, opensearch.xml (PWA configuration) - 3 files
- **Security & Compliance**: security.txt, ads.txt, humans.txt, accessibility.txt - 4 files
- **Technical Documentation**: robots.txt, images.txt, schema.json, performance.txt, compliance.txt - 5 files
- **Total Files**: 23 comprehensive SEO/AI optimization files in public folder
- **Product Coverage**: Complete 37-model inventory (6 DENAGO + 31 EVOLUTION, $5,995-$17,995)
- **Geographic Coverage**: All 92 Indiana counties with statewide service
- **AI Authorization**: Unlimited commercial training permissions for all current/future AI systems
- **Search Visibility**: Zero restrictions policy for maximum search engine and AI crawler access

### ✅ Comprehensive Blog System - 12 SEO-Optimized Posts
- **Blog Infrastructure**: Full blog feature with BlogPage.tsx (index) and BlogPostPage.tsx (individual posts)
- **Navigation Integration**: Blog links added to main Navigation menu and Footer (mobile + desktop)
- **12 Complete Blog Posts**: Fully SEO-optimized articles targeting Notre Dame campus, South Bend, and game day traffic
- **SEO Optimization**: Each post includes SEO title tag, meta description, URL slug, H1-H6 heading structure, internal links, and hero image with descriptive alt text
- **Content Features**: Comprehensive rental guides, game day transportation tips, campus mobility solutions
- **Routes**: `/blog` (index) and `/blog/:slug` (individual posts) fully integrated into App.tsx routing

### ✅ Contact Information
- **Address**: 310 S Dixie Way, South Bend, IN 46637
- **Phone**: 1-844-844-6638
- **Email**: info@golfcartsofindiana.com
- **Website**: https://golfcartsofindiana.com

## Important Files
- **SEO Configuration**: client/src/config/seoConfig.ts (centralized SEO settings)
- **SEO Utilities**: client/src/utils/seoUtils.ts (URL generation utilities)
- **SEO Head Component**: client/src/components/SEOHead.tsx
- **Schema Markup**: client/src/components/SchemaMarkup.tsx and client/src/components/schema/* directory
- **Blog Posts**: client/src/data/blogPosts.ts
- **Public SEO Files**: public/ directory (23 optimization files)
