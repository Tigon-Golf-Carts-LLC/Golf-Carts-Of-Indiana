import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Users, Truck, Calendar } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function Rentals() {
  const rentalPlans = {
    "4-seater": {
      title: "4 Seater Golf Cart",
      icon: Users,
      plans: [
        {
          title: "Daily Rental",
          description: "When you just need one day.",
          price: "$245",
          period: "1 day",
          renewPrice: "$245",
          savings: null,
          recommended: true
        },
        {
          title: "3 Day Rental",
          description: "When you need a few days",
          price: "$685",
          period: "3 days",
          renewPrice: "$228.34",
          savings: "6.8%",
          recommended: true
        },
        {
          title: "Weekly Rental",
          description: "When you need a week of fun.",
          price: "$1,050",
          period: "7 days",
          renewPrice: "$150",
          savings: "38.7%",
          recommended: true
        },
        {
          title: "Monthly Rental",
          description: "When you need a month to explore.",
          price: "$2,800",
          period: "30 days",
          renewPrice: "$94",
          savings: "61.9%",
          recommended: true
        }
      ]
    },
    "6-seater": {
      title: "6 Seater Golf Cart",
      icon: Users,
      plans: [
        {
          title: "Daily Rental",
          description: "When you just need one day.",
          price: "$295",
          period: "1 day",
          renewPrice: "$295",
          savings: null,
          recommended: true
        },
        {
          title: "3 Day Rental",
          description: "When you need a few days",
          price: "$735",
          period: "3 days",
          renewPrice: "$245",
          savings: "16.9%",
          recommended: true
        },
        {
          title: "Weekly Rental",
          description: "When you need a week of fun.",
          price: "$1,400",
          period: "7 days",
          renewPrice: "$200",
          savings: "32.2%",
          recommended: true
        },
        {
          title: "Monthly Rental",
          description: "When you need a month to explore.",
          price: "$3,500",
          period: "30 days",
          renewPrice: "$116.67",
          savings: "60.4%",
          recommended: true
        }
      ]
    },
    "utility": {
      title: "Utility Golf Cart",
      icon: Truck,
      plans: [
        {
          title: "Daily Rental",
          description: "When you just need one day.",
          price: "$245",
          period: "1 day",
          renewPrice: "$245",
          savings: null,
          recommended: true
        },
        {
          title: "3 Day Rental",
          description: "When you need a few days",
          price: "$685",
          period: "3 days",
          renewPrice: "$228.34",
          savings: "6.8%",
          recommended: true
        },
        {
          title: "Weekly Rental",
          description: "When you need a week of fun.",
          price: "$1,050",
          period: "7 days",
          renewPrice: "$150",
          savings: "38.7%",
          recommended: true
        },
        {
          title: "Monthly Rental",
          description: "When you need a month to explore.",
          price: "$2,800",
          period: "30 days",
          renewPrice: "$94",
          savings: "61.9%",
          recommended: true
        }
      ]
    }
  };

  const features = [
    "Street legal with seat belts",
    "Fully charged and ready to go",
    "24/7 customer support",
    "Flexible pickup and return",
    "Insurance coverage included",
    "No hidden fees"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Golf Cart Rentals - Daily, Weekly & Monthly | NJ Golf Carts"
        description="Rent golf carts in New Jersey with flexible daily, weekly, and monthly plans. 4-seater, 6-seater, and utility carts available. Street legal with seat belts included."
      />
      <Navigation />
      
      <section className="relative bg-gradient-to-br from-primary via-secondary to-blue-400 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Golf Cart Rentals
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Flexible rental plans for every occasion in New Jersey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => window.open("tel:1-844-844-6638")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call to Book Now
              </Button>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => document.getElementById('rental-plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-4 h-4 mr-2" />
                View Rental Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-neutral-dark mb-8">
            Why Choose Our Golf Cart Rentals?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rental Plans */}
        <div id="rental-plans" className="space-y-16">
          {Object.entries(rentalPlans).map(([key, category]) => (
            <div key={key} className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <category.icon className="w-8 h-8 text-primary mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">
                    {category.title} Rental Plans
                  </h2>
                </div>
                <p className="text-gray-600">Choose the perfect rental duration for your needs</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.plans.map((plan, index) => (
                  <Card key={index} className="relative border-2 hover:border-primary transition-colors">
                    {plan.recommended && (
                      <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-accent">
                        RECOMMENDED
                      </Badge>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-lg font-semibold text-neutral-dark">
                        {plan.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                      {plan.savings && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          SAVE {plan.savings}
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-primary mb-1">
                          {plan.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          {plan.period}*
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600 mb-6">
                        <div>Renews at {plan.renewPrice}/daily term*</div>
                        <div>Delivery Fee $6/mile term*</div>
                      </div>
                      <Button 
                        className="w-full bg-accent hover:bg-accent/90"
                        onClick={() => window.open("tel:1-844-844-6638")}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        RESERVE TODAY
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-neutral-light rounded-lg p-8">
          <h3 className="text-2xl font-bold text-neutral-dark mb-4 text-center">
            Need Help Choosing?
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Our friendly team is here to help you select the perfect golf cart rental for your needs. 
            Whether it's for a special event, vacation, or business use, we have the right cart at the right price.
          </p>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open("tel:1-844-844-6638")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Your Rental Today!
            </Button>
          </div>
        </div>

        {/* Terms */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>* All prices subject to availability and terms of service. Delivery fee applies for locations beyond 10 miles.</p>
          <p>Rental periods are calculated in 24-hour increments. Early returns do not qualify for refunds.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}