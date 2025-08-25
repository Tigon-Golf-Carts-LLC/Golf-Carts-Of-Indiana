import { Helmet } from "react-helmet-async";
import EcoImpactCalculator from "@/components/EcoImpactCalculator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Zap, TreePine, Recycle, Globe, Wind } from "lucide-react";
import AllSchemas from "@/components/schema/AllSchemas";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function EcoImpactPage() {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Zero Emissions",
      description: "Electric golf carts produce no direct CO₂ emissions, helping reduce your carbon footprint immediately."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Energy Efficient",
      description: "Electric motors are 90% efficient compared to 25% efficiency of gas engines, using energy more effectively."
    },
    {
      icon: <TreePine className="w-8 h-8 text-emerald-600" />,
      title: "Forest Protection",
      description: "Every electric golf cart helps preserve forests by reducing demand for fossil fuels and carbon emissions."
    },
    {
      icon: <Recycle className="w-8 h-8 text-purple-600" />,
      title: "Sustainable Materials",
      description: "Modern electric golf carts use recyclable batteries and sustainable materials in construction."
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-600" />,
      title: "Climate Action",
      description: "Join the global movement toward sustainable transportation and help combat climate change."
    },
    {
      icon: <Wind className="w-8 h-8 text-indigo-600" />,
      title: "Clean Air",
      description: "No exhaust fumes means cleaner air for everyone, especially important in recreational areas."
    }
  ];

  const facts = [
    {
      number: "19.6 lbs",
      label: "CO₂ per gallon of gas",
      description: "EPA certified emission rate"
    },
    {
      number: "90%",
      label: "Electric motor efficiency",
      description: "vs 25% for gas engines"
    },
    {
      number: "$1,200+",
      label: "Average annual savings",
      description: "Fuel & maintenance costs"
    },
    {
      number: "16.5",
      label: "Trees needed per ton CO₂",
      description: "To offset annual emissions"
    }
  ];

  return (
    <>
      {/* SEO Head */}
      <Helmet>
        <title>Eco-Impact Calculator - Environmental Benefits | Monroe County Golf Carts</title>
        <meta 
          name="description" 
          content="Calculate your environmental impact and savings with electric golf carts. See CO₂ reduction, fuel savings, and carbon offset benefits. Free eco-impact calculator for Monroe County." 
        />
        <meta 
          name="keywords" 
          content="eco impact calculator, electric golf cart environmental benefits, carbon footprint reduction, CO2 savings, sustainable transportation Monroe County, green golf carts Pennsylvania" 
        />
        <link rel="canonical" href="https://monroegolfcarts.com/eco-impact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Eco-Impact Calculator - Calculate Your Environmental Savings" />
        <meta property="og:description" content="See how much CO₂, fuel, and money you save by choosing electric golf carts. Interactive calculator with real environmental data." />
        <meta property="og:url" content="https://monroegolfcarts.com/eco-impact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eco-Impact Calculator - Environmental Golf Cart Benefits" />
        <meta name="twitter:description" content="Calculate your environmental impact with our free eco-impact calculator for electric golf carts." />
      </Helmet>

      {/* Schema Markup */}
      <AllSchemas 
        pageType="services"
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
        {/* Hero Section */}
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 mb-6 px-4 py-2 text-sm">
              Environmental Impact Calculator
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Calculate Your 
              <span className="text-green-600"> Environmental Impact</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how much CO₂, fuel, and money you save by choosing electric golf carts. 
              Make an informed decision for your wallet and the environment.
            </p>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="pb-12 px-4">
          <EcoImpactCalculator className="mb-16" />
        </div>

        {/* Environmental Benefits */}
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Electric?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Electric golf carts offer significant environmental and economic advantages 
                over traditional gas-powered vehicles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Environmental Facts */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Environmental Facts
              </h2>
              <p className="text-lg text-gray-600">
                Real data behind our environmental impact calculations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facts.map((fact, index) => (
                <Card key={index} className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {fact.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {fact.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {fact.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("eco-cta")}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Browse our selection of eco-friendly electric golf carts and start 
              reducing your environmental impact today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/inventory"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Browse Electric Golf Carts
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block text-center"
              >
                Get Expert Advice
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}