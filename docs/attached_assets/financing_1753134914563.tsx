import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FinancingSection from "@/components/financing-section";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, CreditCard, FileText } from "lucide-react";

export default function Financing() {
  useEffect(() => {
    document.title = "Golf Cart Financing - NJ Golf Carts";
  }, []);

  const benefits = [
    {
      icon: DollarSign,
      title: "0% APR Available",
      description: "Get 0% APR financing on qualified purchases with approved credit.",
    },
    {
      icon: CreditCard,
      title: "Flexible Terms",
      description: "Choose from terms up to 60 months to fit your budget.",
    },
    {
      icon: FileText,
      title: "Quick Approval",
      description: "Get pre-approved in minutes with our streamlined process.",
    },
  ];

  const requirements = [
    "Valid driver's license",
    "Proof of income",
    "Social security number",
    "Bank account information",
    "Proof of residence",
  ];

  return (
    <div>
      <SEOHead
        title="Golf Cart Financing - 0% APR Available | NJ Golf Carts"
        description="Flexible golf cart financing with 0% APR on qualified purchases. Quick approval process and terms up to 60 months. Get pre-approved today."
        keywords="golf cart financing, 0% APR, flexible terms, New Jersey, pre-approved"
      />
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Golf Cart Financing
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make your golf cart dreams a reality with our flexible financing options
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Financing Benefits</CardTitle>
                <CardDescription>Why choose our financing options</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    <span>No prepayment penalties</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    <span>Fixed interest rates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    <span>Competitive rates for all credit types</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    <span>Simple online application</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                    <span>Trade-in value applied to purchase</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">What You'll Need</CardTitle>
                <CardDescription>Required documents for financing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <FinancingSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
