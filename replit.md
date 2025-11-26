# Notre Dame Golf Carts - Website Project

## Overview
This project is for Notre Dame Golf Carts (https://notredamegolfcarts.com), St. Joseph County, Indiana's premier golf cart dealership. The platform aims to provide a comprehensive online presence for DENAGO and EVOLUTION electric golf cart sales, rentals, and services across St. Joseph County. Key capabilities include complete inventory management, a rental system with location-based services for all 22 municipalities (2 cities, 7 towns, 13 townships), customer inquiry handling, and detailed business information. The business vision is to serve as a central hub for golf cart sales and rentals, enhancing market presence and customer accessibility across the entire county.

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
- **SEO**: Comprehensive sitemap.xml (100+ pages), robots.txt, full Schema Markup integration (Location, Vehicle, Service, Website, Person, Product, LocalBusiness, Organization), and individual pages for all 20 Notre Dame municipalities for local SEO.
- **PWA Configuration**: Progressive Web App enabled with `site.webmanifest` for enhanced user experience and app shortcuts.

### Feature Specifications
- **Vehicle Inventory**: Detailed listings for DENAGO and EVOLUTION models with specifications and pricing.
- **Rental System**: Location-specific rental services and pricing for all St. Joseph County municipalities (2 cities: South Bend, Mishawaka; 7 towns: Indian Village, Lakeville, New Carlisle, North Liberty, Osceola, Roseland, Walkerton; 13 townships: Centre, Clay, German, Greene, Harris, Liberty, Lincoln, Madison, Olive, Penn, Portage, Union, Warren).
- **Contact Management**: Forms and systems for lead capture and customer inquiries.
- **Location-based Services**: Integration of Google Maps embeds with accurate Notre Dame, IN coordinates (41.7033, -86.2389).

## External Dependencies
- **Google Tag Manager (GTM)**: Used for analytics and marketing tag deployment (GTM-NSN3ZJPP).
- **Google Analytics 4 (GA4)**: Integrated for website analytics (G-QJVWEK6RT8).
- **Google Maps**: Embedded for displaying dealership and service area locations.
- **TIGON Golf Carts**: External links for purchase and financing options.

## Recent Updates and Achievements

### ✅ Complete Branding Transformation (January 2025)
- **New Brand Identity**: Notre Dame Golf Carts professional logos, favicons, and showroom imagery
- **Domain Migration**: Complete transition to notredamegolfcarts.com with full URL structure optimization
- **Analytics Integration**: Google Tag Manager (GTM-NSN3ZJPP) and Google Analytics (G-QJVWEK6RT8)
- **Professional Photography**: 8 new Notre Dame showroom background images implemented
- **Location Rebrand**: Complete transition from Pennsylvania to St. Joseph County, Indiana with accurate geographic data

### ✅ Comprehensive SEO & AI Optimization Suite - 23 Files (January 2025)  
- **Enhanced Sitemap**: sitemap.xml with 100+ pages (main, brand, vehicle, municipality, rental, policy pages)
- **AI Training Authorization**: Complete suite (llms.txt, ai.txt, gpt.txt, claude.txt, training.txt, nlp.txt) - 6 files
- **SEO & Geographic**: seo.txt (keyword strategy), geo.txt (complete St. Joseph County data) - 2 files
- **Bot Management**: bots.txt, crawlers.txt (50+ crawler types, zero restrictions) - 2 files
- **Web Standards**: manifest.json, browserconfig.xml, opensearch.xml (PWA configuration) - 3 files
- **Security & Compliance**: security.txt, ads.txt, humans.txt, accessibility.txt - 4 files
- **Technical Documentation**: robots.txt, images.txt, schema.json, performance.txt, compliance.txt - 5 files
- **Total Files**: 23 comprehensive SEO/AI optimization files in public folder
- **Product Coverage**: Complete 37-model inventory (6 DENAGO + 31 EVOLUTION, $5,995-$17,995)
- **Geographic Coverage**: All 22 St. Joseph County municipalities with coordinates and details
- **AI Authorization**: Unlimited commercial training permissions for all current/future AI systems
- **Search Visibility**: Zero restrictions policy for maximum search engine and AI crawler access

### ✅ Technical Infrastructure Enhancements
- **Updated Robots.txt**: Complete business information, municipality coverage, and tracking code documentation
- **Professional Standards**: WCAG accessibility compliance, security policies, and transparency documentation
- **Geographic Optimization**: Detailed coverage of 2 cities + 7 towns + 13 townships = 22 total St. Joseph County municipalities
- **Municipality Data**: Accurate listing of all St. Joseph County communities (Cities: South Bend, Mishawaka; Towns: Indian Village, Lakeville, New Carlisle, North Liberty, Osceola, Roseland, Walkerton; Townships: Centre, Clay, German, Greene, Harris, Liberty, Lincoln, Madison, Olive, Penn, Portage, Union, Warren)
- **Maximum Search Visibility**: Zero restrictions policy for all legitimate search engines and AI training systems

### ✅ Comprehensive Blog System - 12 SEO-Optimized Posts (January 2025)
- **Blog Infrastructure**: Full blog feature with BlogPage.tsx (index) and BlogPostPage.tsx (individual posts)
- **Navigation Integration**: Blog links added to main Navigation menu and Footer (mobile + desktop)
- **12 Complete Blog Posts**: Fully SEO-optimized articles targeting Notre Dame campus, South Bend, and game day traffic
  1. Golf Cart Rental and Usage - Transportation Services
  2. Transportation Services - University of Notre Dame
  3. Notre Dame 6 Passenger Golf Cart Rental
  4. Notre Dame 4 Passenger Golf Cart Rental
  5. Notre Dame Street Legal Golf Cart Rental
  6. Game Days & Tailgating with Your Golf Cart Rental (Featured)
  7. Golf Cart Rental Request Form
  8. Notre Dame Golf Carts (About the Business)
  9. Football - Getting Around
  10. Can One Rent a Golf Cart for Football Weekends?
  11. Vehicle Rental - Transportation Services
  12. Notre Dame Golf Carts For Sale
- **SEO Optimization**: Each post includes SEO title tag, meta description, URL slug, H1-H6 heading structure, internal links, and hero image with descriptive alt text
- **Target Audience**: University of Notre Dame campus visitors, football fans, South Bend residents, Fighting Irish game day attendees
- **Geographic Targeting**: All posts optimized for Notre Dame, South Bend, St. Joseph County, and Indiana keywords
- **Content Features**: AI-ready hero image prompts, comprehensive rental guides, game day transportation tips, campus mobility solutions
- **Routes**: `/blog` (index) and `/blog/:slug` (individual posts) fully integrated into App.tsx routing

### ✅ Contact Information Update (January 2025)
- **New Address**: 310 S Dixie Way, South Bend, IN 46637 (updated from 52129 State Road 933)
- **New Local Phone**: 1-844-844-6638 (updated from 574-703-0456)
- **Toll-Free Phone**: 1-844-844-6638 (unchanged)
- **Email**: info@notredamegolfcarts.com (unchanged)
- **Update Scope**: All pages, blog posts, SEO files, schema markup, and public documentation files updated with new contact information
- **Files Updated**: seoConfig.ts, ContactPage.tsx, ShowroomPage.tsx, SchemaMarkup.tsx, blogPosts.ts, robots.txt, schema.json, llms.txt, geo.txt, humans.txt, ai.txt, gpt.txt, claude.txt, nlp.txt, training.txt, security.txt, compliance.txt, ads.txt, accessibility.txt, crawlers.txt, seo.txt
```