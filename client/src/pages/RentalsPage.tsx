
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import { Check, Phone, Users, Car } from "lucide-react";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function RentalsPage() {
  const rentalFeatures = [
    "Street legal with seat belts",
    "Flexible pickup and return",
    "Fully charged and ready to go",
    "Insurance coverage included",
    "24/7 customer support",
    "No hidden fees"
  ];

  const fourSeaterPlans = [
    {
      title: "Daily Rental",
      description: "When you just need one day.",
      price: 245,
      duration: "1 day",
      renewal: "Renews at $245/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: null
    },
    {
      title: "3 Day Rental", 
      description: "When you need a few days",
      price: 685,
      duration: "3 days",
      renewal: "Renews at $228.34/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 6.8%"
    },
    {
      title: "Weekly Rental",
      description: "When you need a week of fun.",
      price: 1050,
      duration: "7 days",
      renewal: "Renews at $150/daily term", 
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 38.7%"
    },
    {
      title: "Monthly Rental",
      description: "When you need a month to explore.",
      price: 2800,
      duration: "30 days",
      renewal: "Renews at $94/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 61.6%"
    }
  ];

  const sixSeaterPlans = [
    {
      title: "Daily Rental",
      description: "When you just need one day.",
      price: 295,
      duration: "1 day",
      renewal: "Renews at $295/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: null
    },
    {
      title: "3 Day Rental",
      description: "When you need a few days",
      price: 735,
      duration: "3 days",
      renewal: "Renews at $245/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 16.9%"
    },
    {
      title: "Weekly Rental",
      description: "When you need a week of fun.",
      price: 1400,
      duration: "7 days",
      renewal: "Renews at $200/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 32.2%"
    },
    {
      title: "Monthly Rental",
      description: "When you need a month to explore.",
      price: 3500,
      duration: "30 days",
      renewal: "Renews at $116.67/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 60.4%"
    }
  ];

  const utilityPlans = [
    {
      title: "Daily Rental",
      description: "When you just need one day.",
      price: 245,
      duration: "1 day",
      renewal: "Renews at $245/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: null
    },
    {
      title: "3 Day Rental",
      description: "When you need a few days",
      price: 685,
      duration: "3 days",
      renewal: "Renews at $228.34/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 6.8%"
    },
    {
      title: "Weekly Rental",
      description: "When you need a week of fun.",
      price: 1050,
      duration: "7 days",
      renewal: "Renews at $150/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 38.7%"
    },
    {
      title: "Monthly Rental",
      description: "When you need a month to explore.",
      price: 2800,
      duration: "30 days",
      renewal: "Renews at $94/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 61.6%"
    }
  ];

  const RentalSection = ({ title, icon, plans, subtitle }: { title: string; icon: any; plans: any[]; subtitle: string }) => (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            {icon}
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <Badge className="bg-theme-orange text-white text-xs px-3 py-1 mb-4">
                    {plan.badge}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                  {plan.savings && (
                    <div className="bg-green-100 border border-green-300 rounded-full px-3 py-1 text-green-700 text-sm font-medium mb-4">
                      {plan.savings}
                    </div>
                  )}

                  <div className="text-4xl font-bold text-theme-primary mb-2">
                    ${plan.price.toLocaleString()}
                  </div>
                  <div className="text-gray-600 text-sm mb-4">{plan.duration}*</div>

                  <div className="text-xs text-gray-500 mb-4">
                    <div>{plan.renewal}*</div>
                    <div>{plan.delivery}*</div>
                  </div>
                </div>

                <a href="tel:1-844-844-6638">
                  <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    RESERVE TODAY
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <SEOHead 
        title="Golf Cart Rentals - Monroe County Golf Carts PA"
        description="Rent premium golf carts in Monroe County, PA. Daily, weekly, and monthly rental options available with full insurance and delivery service."
        keywords="golf cart rental, Monroe County rentals, golf cart hire, Pennsylvania golf cart rental"
        canonicalUrl="https://monroegolfcarts.com/rentals"
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_OlTDU4v9StGOZo5AygNb9A_bbx-4nIbSSGW4LKOIV9o3w_1753383770677.png"
        ogType="website"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("rentals")}>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Golf Cart Rentals in Monroe County
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Rent premium electric golf carts throughout Monroe County, Pennsylvania. Perfect for events, vacations, and special occasions.
            </p>
            <a href="tel:1-844-844-6638">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                Call 1-844-844-6638
              </Button>
            </a>
          </div>
        </section>

        {/* Why Choose Our Rentals Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                Why Choose Lackawanna County Golf Cart Rentals?
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {rentalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Seater Plans */}
        <RentalSection 
          title="4 Seater Golf Cart Rental Plans"
          icon={<Users className="w-8 h-8 text-blue-600" />}
          plans={fourSeaterPlans}
          subtitle="Choose the perfect rental duration for your needs"
        />

        {/* 6 Seater Plans */}
        <RentalSection 
          title="6 Seater Golf Cart Rental Plans"
          icon={<Users className="w-8 h-8 text-blue-600" />}
          plans={sixSeaterPlans}
          subtitle="Choose the perfect rental duration for your needs"
        />

        {/* Utility Plans */}
        <RentalSection 
          title="Utility Golf Cart Rental Plans"
          icon={<Car className="w-8 h-8 text-blue-600" />}
          plans={utilityPlans}
          subtitle="Choose the perfect rental duration for your needs"
        />

        {/* Need Help Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our friendly team is here to help you select the perfect golf cart rental for your needs. Whether it's for a special event, vacation, or business use, we have the right cart at the right price.
            </p>
            <a href="tel:1-844-844-6638">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                Call Now 1-844-844-6638
              </Button>
            </a>
          </div>
        </section>

        {/* Footer Disclaimer */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-500">
              * All prices subject to availability and terms of service. Delivery fee applies for locations beyond 10 miles.<br />
              Rental periods are calculated in 24-hour increments. Early returns do not qualify for refunds.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
