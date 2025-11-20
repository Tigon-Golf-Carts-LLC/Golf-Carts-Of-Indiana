import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { BLOG_POSTS, type BlogPost } from "@/data/blogPosts";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  
  const post = BLOG_POSTS.find((p: BlogPost) => p.slug === slug);
  const currentIndex = BLOG_POSTS.findIndex((p: BlogPost) => p.slug === slug);
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={post.seoTitle}
        description={post.metaDescription}
        keywords={`Notre Dame golf carts, South Bend Indiana, ${post.title}`}
        canonicalUrl={`https://notredamegolfcarts.com/blog/${post.slug}`}
        ogImage={post.heroImage}
        ogImageWidth={1200}
        ogImageHeight={600}
        ogType="article"
        pageType="general"
      />

      {/* Hero Image Section */}
      <div className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <img 
          src={post.heroImage} 
          alt={post.heroImageAlt}
          className="w-full h-full object-cover"
          data-testid="img-post-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" className="text-white hover:text-white/80 mb-4" data-testid="button-back-to-blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" data-testid="text-post-title">
              {post.h1}
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishDate} data-testid="text-post-date">
                  {new Date(post.publishDate).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </time>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-theme-orange prose-a:no-underline hover:prose-a:underline
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-strong:text-gray-900 prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
            data-testid="content-post-body"
          />
        </div>
      </article>

      {/* Navigation to Other Posts */}
      <div className="border-t border-gray-200 py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Previous Post */}
            {prevPost && (
              <Card className="p-6 hover:shadow-lg transition-shadow" data-testid="card-prev-post">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Article</span>
                </div>
                <Link href={`/blog/${prevPost.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-theme-orange transition-colors">
                    {prevPost.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm line-clamp-2">{prevPost.excerpt}</p>
                </Link>
              </Card>
            )}

            {/* Next Post */}
            {nextPost && (
              <Card className="p-6 hover:shadow-lg transition-shadow" data-testid="card-next-post">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3 justify-end">
                  <span>Next Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <Link href={`/blog/${nextPost.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-theme-orange transition-colors text-right">
                    {nextPost.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm line-clamp-2 text-right">{nextPost.excerpt}</p>
                </Link>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Notre Dame Golf Carts?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Professional golf cart sales, rentals, and service in South Bend, Indiana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rentals">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white" data-testid="button-rentals">
                View Rentals
              </Button>
            </Link>
            <Link href="/inventory">
              <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100" data-testid="button-inventory">
                Browse Inventory
              </Button>
            </Link>
            <a href="tel:1-844-844-6638">
              <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100" data-testid="button-call">
                Call 1-844-844-6638
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
