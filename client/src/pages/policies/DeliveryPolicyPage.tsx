import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function DeliveryPolicyPage() {
  return (
    <>
      <SEOHead 
        title="Delivery Policy | Notredame Golf Carts"
        description="Learn about delivery options, fees, and policies for golf cart purchases and rentals in Notre Dame, Indiana. Free delivery zones and scheduling information."
        keywords="delivery policy, golf cart delivery, Notre Dame delivery, Indiana golf cart shipping"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("policy-delivery")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Delivery Policy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comprehensive delivery services throughout Indiana and surrounding areas for golf cart sales and rentals.
          </p>
        </div>
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-theme-primary mb-4">Delivery Policy</h1>
              <p className="text-gray-600">Effective Date: January 23, 2025</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Delivery Overview</h2>
              <p className="mb-6">
                Notredame Golf Carts offers comprehensive delivery services throughout Indiana 
                and surrounding areas. Our delivery policy ensures safe, timely, and professional 
                transport of your golf cart purchase or rental.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Delivery Zones</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Free Delivery Zone</h3>
              <p className="mb-4">Complimentary delivery within:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>All Notre Dame municipalities (39 locations)</li>
                <li>20-mile radius from TIGON Golf Carts Pocono location</li>
                <li>15-mile radius from TIGON Golf Carts Scranton location</li>
                <li>Minimum purchase of $5,000 for golf cart sales</li>
                <li>All rental deliveries within city limits</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Extended Delivery Zone</h3>
              <p className="mb-4">Delivery available with fees to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Philadelphia and surrounding counties</li>
                <li>Lancaster County</li>
                <li>Lehigh Valley region</li>
                <li>Central Indiana locations</li>
                <li>Fee: $6 per mile beyond free delivery zone</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Golf Cart Sales Delivery</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Delivery Timeline</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>In-stock golf carts: 2-5 business days</li>
                <li>Custom orders: 2-4 weeks depending on specifications</li>
                <li>Special orders: Timeline provided with order confirmation</li>
                <li>Seasonal delays possible during peak spring/summer months</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Delivery Process</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Pre-delivery inspection and preparation</li>
                <li>Customer contacted to schedule delivery appointment</li>
                <li>2-hour delivery window provided</li>
                <li>Delivery team provides basic operation training</li>
                <li>Customer walkthrough and acceptance signature required</li>
                <li>All documentation and keys provided at delivery</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Rental Delivery</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Same-Day Delivery</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Available for orders placed before 2:00 PM</li>
                <li>Subject to vehicle availability</li>
                <li>Additional $50 rush delivery fee within free zone</li>
                <li>Limited to Notre Dame municipalities</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Standard Rental Delivery</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Next business day delivery standard</li>
                <li>Free delivery within municipal limits</li>
                <li>Golf cart delivered fully charged and inspected</li>
                <li>Safety briefing provided at delivery</li>
                <li>Pickup scheduled at end of rental period</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Delivery Requirements</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Customer Responsibilities</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Adult (18+) must be present to accept delivery</li>
                <li>Valid ID required for rental deliveries</li>
                <li>Clear, accessible delivery location required</li>
                <li>Level surface for safe unloading</li>
                <li>Payment completion before delivery (sales)</li>
                <li>Signed rental agreement (rentals)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Access Requirements</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Minimum 8-foot wide access path</li>
                <li>No steps or significant elevation changes</li>
                <li>Adequate space for delivery truck maneuvering</li>
                <li>Customer responsible for site preparation</li>
                <li>Additional fees may apply for difficult access locations</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Special Delivery Services</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">White Glove Delivery</h3>
              <p className="mb-4">Premium service includes:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Inside delivery and placement</li>
                <li>Complete setup and configuration</li>
                <li>Extended operation training</li>
                <li>Initial maintenance check</li>
                <li>Additional $150 fee</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Appointment Rescheduling</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Free rescheduling with 24-hour notice</li>
                <li>$75 fee for same-day cancellations</li>
                <li>$100 fee for missed appointments</li>
                <li>Three missed appointments may result in pickup requirement</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Delivery Limitations</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Weather conditions may cause delays</li>
                <li>No delivery to locations without vehicle access</li>
                <li>Height restrictions: maximum 10 feet clearance required</li>
                <li>Weight restrictions: stable ground surface required</li>
                <li>Delivery driver has final authority on safety conditions</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Damage and Insurance</h2>
              <p className="mb-6">
                All deliveries are fully insured during transport. Any damage occurring during delivery 
                will be documented and resolved at no cost to the customer. Customer should inspect 
                golf cart upon delivery and note any concerns before signing acceptance.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Delivery Department</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Delivery Scheduling</strong></p>
                <p className="mb-2">Notredame Golf Carts</p>
                <p className="mb-2">Email: info@notredamegolfcarts.com</p>
                <p className="mb-2">Phone: 1-844-844-6638</p>
                <p className="mb-2">Serving Notre Dame, Indiana</p>
                <p className="mb-2">Hours: Monday-Saturday 8:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}