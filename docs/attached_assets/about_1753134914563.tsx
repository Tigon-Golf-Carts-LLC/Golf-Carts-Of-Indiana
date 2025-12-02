import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, MapPin, Clock, ArrowRight } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - NJ Golf Carts";
  }, []);

  const stats = [
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "100+", label: "Carts in Stock", icon: MapPin },
    { number: "5⭐", label: "Customer Rating", icon: Award },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We only sell and service golf carts that meet our high standards for quality and reliability.",
    },
    {
      title: "Customer Service",
      description: "Our customers are our priority. We provide exceptional service before, during, and after your purchase.",
    },
    {
      title: "Expert Knowledge",
      description: "Our team has extensive experience with all golf cart brands and models.",
    },
    {
      title: "Fair Pricing",
      description: "We offer competitive prices and transparent pricing with no hidden fees.",
    },
  ];

  return (
    <div>
      <SEOHead
        title="About NJ Golf Carts - New Jersey's Premier Golf Cart Dealership"
        description="Learn about NJ Golf Carts, New Jersey's trusted golf cart dealership with 15+ years of experience, 500+ happy customers, and exceptional service."
        keywords="about NJ Golf Carts, golf cart dealership, New Jersey, experience, quality service"
      />
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              About NJ Golf Carts
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              New Jersey's trusted golf cart dealership serving customers across the state
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/nj-golf-carts-showroom.jpg"
                alt="NJ Golf Carts Showroom - Professional staff member at dealership with golf carts"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, NJ Golf Carts has been serving New Jersey's golf cart needs for over 15 years.
                What started as a small family business has grown into the state's premier golf cart dealership,
                known for our exceptional service, quality products, and fair pricing.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in new and used golf cart sales, professional service and repairs, custom builds,
                and a complete selection of parts and accessories. Our factory-trained technicians ensure that
                every cart we sell meets the highest standards of quality and reliability.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Visit Our Showrooms
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary">{stat.number}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-medium">{stat.label}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-neutral-light rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Ready to Find Your Perfect Golf Cart?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Visit our showroom to see our inventory and speak with our knowledgeable staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Shop Inventory
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
