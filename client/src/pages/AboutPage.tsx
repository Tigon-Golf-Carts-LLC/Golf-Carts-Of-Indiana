
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, MapPin, Clock, Heart, Target } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import OrganizationSchema from "@/components/OrganizationSchema";
import AllSchemas from "@/components/schema/AllSchemas";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { generateSEOMetadata } from "@/utils/seoUtils";

export default function AboutPage() {
  // Generate SEO metadata that matches the H1 on this page
  const seoData = generateSEOMetadata({
    pageTitle: "About Notre Dame Golf Carts",
    baseDescription: "Since 2008, Notre Dame Golf Carts has been Indiana's premier golf cart dealership. Authorized DENAGO and EVOLUTION dealer serving Notre Dame and surrounding Indiana communities with expert sales, service, and rentals.",
    pageType: "about",
    canonicalPath: "/about",
    keywords: ["golf cart company history", "Indiana dealership since 2008", "Notre Dame golf carts", "authorized dealer team"],
    heroBackgroundSeed: "about"
  });
  
  const teamMembers = [
    {
      name: "Mike Johnson",
      role: "General Manager",
      experience: "15+ years",
      description: "Leading our team with passion for customer service and golf cart expertise"
    },
    {
      name: "Sarah Davis",
      role: "Service Manager",
      experience: "12+ years",
      description: "Certified technician ensuring quality service and customer satisfaction"
    },
    {
      name: "Tom Wilson",
      role: "Sales Director",
      experience: "10+ years",
      description: "Helping customers find the perfect golf cart for their needs"
    }
  ];

  const milestones = [
    { year: "2008", event: "Notre Dame Golf Carts founded in Notre Dame, Indiana" },
    { year: "2010", event: "Became authorized EVOLUTION dealer" },
    { year: "2013", event: "Expanded to serve all St. Joseph County communities" },
    { year: "2016", event: "Added DENAGO to our brand portfolio" },
    { year: "2019", event: "Opened expanded service center in South Bend" },
    { year: "2024", event: "Reached 750+ satisfied customers across Indiana" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO and Schema Markup */}
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        ogImageWidth={seoData.ogImageWidth}
        ogImageHeight={seoData.ogImageHeight}
        ogType={seoData.ogType}
        heroBackgroundSeed={seoData.heroBackgroundSeed}
        pageType={seoData.pageType}
      />
      <AllSchemas 
        pageType="about" 
        pageData={{
          title: "About Notre Dame Golf Carts",
          description: "Learn about Notre Dame Golf Carts, Indiana's premier golf cart dealership since 2008. Expert team, authorized Denago and Evolution dealer with comprehensive service.",
          url: "https://notredamegolfcarts.com/about",
          breadcrumbs: [
            { name: "Home", url: "https://notredamegolfcarts.com/" },
            { name: "About", url: "https://notredamegolfcarts.com/about" }
          ],
          people: [
            {
              name: "Mike Johnson",
              jobTitle: "General Manager",
              description: "Leading our team with passion for customer service and golf cart expertise with 15+ years experience",
              image: "/attached_assets/Monroe County Golf Carts (1)_1756141613254.png"
            },
            {
              name: "Sarah Davis",
              jobTitle: "Service Manager", 
              description: "Certified technician ensuring quality service and customer satisfaction with 12+ years experience",
              image: "/attached_assets/Monroe County Golf Carts (1)_1756141613254.png"
            },
            {
              name: "Tom Wilson",
              jobTitle: "Sales Director",
              description: "Helping customers find the perfect golf cart for their needs with 10+ years experience",
              image: "/attached_assets/Monroe County Golf Carts (1)_1756141613254.png"
            }
          ]
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("about")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            About Notre Dame Golf Carts
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Since 2008, we've been St. Joseph County's premier destination for premium golf carts, 
            exceptional service, and unmatched customer care. Serving all 22 municipalities 
            across St. Joseph County, Indiana with pride and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              Contact Our Team
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              View Our Inventory
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008 in Notre Dame, Indiana, Notre Dame Golf Carts began with a simple mission: 
                to provide high-quality golf carts and exceptional service to customers throughout St. Joseph County and the greater South Bend area.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                St. Joseph County is home to the world-renowned University of Notre Dame, along with vibrant communities like 
                South Bend, Mishawaka, Osceola, and New Carlisle. Our location in the heart of St. Joseph County drives our commitment to excellence 
                and serves all 22 municipalities including 2 cities, 7 towns, and 13 townships throughout the county.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our region is known for its university heritage, thriving business community, and strong sense of community pride. 
                This tradition of excellence continues in our approach to golf cart sales and service, where we 
                combine cutting-edge technology with personalized customer care.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to serve all St. Joseph County municipalities, from South Bend 
                to Mishawaka, from Walkerton to Roseland, as authorized dealers for EVOLUTION and DENAGO electric golf carts.
              </p>
              <Button className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                Learn More About Our Services
              </Button>
            </div>
            <div className="relative">
              <div className="bg-blue-100 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-theme-orange mb-2">750+</div>
                    <div className="text-gray-700">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-theme-orange mb-2">16+</div>
                    <div className="text-gray-700">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-theme-orange mb-2">22</div>
                    <div className="text-gray-700">Municipalities Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-theme-orange mb-2">100+</div>
                    <div className="text-gray-700">Models Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make starts with our customers' needs and satisfaction in mind.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our products, services, and customer experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honest, transparent business practices build lasting relationships with our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <div className="text-blue-600 font-semibold">{member.role}</div>
                  <div className="text-sm text-gray-500">{member.experience}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-theme-orange mb-2">{milestone.year}</div>
                <p className="text-gray-700">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas with Map */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Serving St. Joseph County</h2>
              <p className="text-lg text-gray-600 mb-6">
                From our location in Notre Dame, we proudly serve customers throughout 
                all of St. Joseph County, Indiana. Our commitment to quality service extends across 
                all 22 municipalities with convenient access to every community.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-theme-orange" />
                  <span className="text-gray-700 font-medium">Notre Dame Golf Carts - Notre Dame</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-theme-orange" />
                  <span className="text-gray-700 font-medium">Serving South Bend & Mishawaka</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-theme-orange" />
                  <span className="text-gray-700 font-medium">All St. Joseph County Municipalities</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-6 h-6 text-theme-orange" />
                <span className="text-gray-700">Monday-Friday: 9AM-5PM, Saturday: 9AM-5PM</span>
              </div>
              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Contact Us Today
              </Button>
            </div>

            {/* Google Maps Embed - Mobile Responsive */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48447.7!2d-86.2389!3d41.7033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816cd5f56c8c0b1%3A0x1c7e1e8e8e8e8e8e!2sNotre%20Dame%2C%20IN%2C%20USA!5e0!3m2!1sen!2sus!4v1753817570000!5m2!1sen!2sus" 
                className="w-full h-64 sm:h-80 md:h-96"
                style={{border:0}}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Notre Dame, IN Map"
              />
            </div>
          </div>

          {/* Towns List Below Map */}
          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">All 22 St. Joseph County Municipalities We Serve</h3>
            <div className="mb-4 text-center text-sm text-gray-600">2 Cities • 7 Towns • 13 Townships</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-gray-700">
              {[
                "South Bend", "Mishawaka", "Indian Village", "Lakeville", "New Carlisle", "North Liberty",
                "Osceola", "Roseland", "Walkerton", "Centre Township", "Clay Township", "German Township",
                "Greene Township", "Harris Township", "Liberty Township", "Lincoln Township", "Madison Township",
                "Olive Township", "Penn Township", "Portage Township", "Union Township", "Warren Township"
              ].map((town, index) => (
                <div key={index} className="py-1">
                  {town}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl mb-8">
            Experience the Notre Dame Golf Carts difference throughout St. Joseph County, Indiana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              Visit Our Showroom
            </Button>
            <a href="tel:1-844-844-6638">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Call 1-844-844-6638
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
