import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { BLOG_POSTS, type BlogPost } from "@/data/blogPosts";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { generateSEOMetadata } from "@/utils/seoUtils";

export default function BlogPage() {
  const featuredPosts = BLOG_POSTS.filter((post: BlogPost) => post.featured);
  const regularPosts = BLOG_POSTS.filter((post: BlogPost) => !post.featured);
  
  const seoData = generateSEOMetadata({
    pageTitle: "Blog - Golf Carts Of Indiana & South Bend Transportation Guides",
    baseDescription: "Expert guides for Indiana golf cart rentals, football game day transportation, campus mobility, and South Bend area travel. Tips for fans and visitors.",
    pageType: "general",
    canonicalPath: "/blog",
    keywords: ["Indiana golf carts", "South Bend transportation", "football game day guide", "campus rentals", "tailgating"],
    heroBackgroundSeed: "home"
  });

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_1Cnk505HSlGhjw-TPLFg9w_nDZV9Dn5QHiGR5OY8JPBgA_1753453234033.png"
        ogImageWidth={seoData.ogImageWidth}
        ogImageHeight={seoData.ogImageHeight}
        ogType="website"
        heroBackgroundSeed={seoData.heroBackgroundSeed}
        pageType={seoData.pageType}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-theme-primary via-blue-800 to-theme-primary text-white py-20 px-4 bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("blog")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Golf Carts Of Indiana Blog
          </h1>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Expert guides for Indiana football game days, campus transportation, golf cart rentals, and exploring South Bend & St. Joseph County, Indiana.
          </p>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post: BlogPost) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow" data-testid={`card-blog-featured-${post.id}`}>
                  <CardHeader>
                    <div className="aspect-video bg-gray-200 mb-4 rounded-md overflow-hidden">
                      <img 
                        src={post.heroImage} 
                        alt={post.heroImageAlt}
                        className="w-full h-full object-cover"
                        data-testid={`img-blog-hero-${post.id}`}
                      />
                    </div>
                    <Badge className="mb-2 w-fit">Featured</Badge>
                    <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="group" data-testid={`button-read-more-${post.id}`}>
                        Read More 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post: BlogPost) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow" data-testid={`card-blog-${post.id}`}>
                <CardHeader>
                  <div className="aspect-video bg-gray-200 mb-4 rounded-md overflow-hidden">
                    <img 
                      src={post.heroImage} 
                      alt={post.heroImageAlt}
                      className="w-full h-full object-cover"
                      data-testid={`img-blog-hero-${post.id}`}
                    />
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="group" data-testid={`button-read-more-${post.id}`}>
                      Read More 
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Rent a Golf Cart in Indiana?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Perfect for football game days, campus events, and exploring South Bend, Indiana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rentals">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white" data-testid="button-view-rentals">
                View Rental Options
              </Button>
            </Link>
            <a href="tel:1-844-844-6638">
              <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100" data-testid="button-call-now">
                Call 1-844-844-6638
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
