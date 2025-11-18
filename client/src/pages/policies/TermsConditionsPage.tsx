import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function TermsConditionsPage() {
  return (
    <>
      <SEOHead 
        title="Terms & Conditions | Notredame Golf Carts"
        description="Read the complete terms and conditions for Notredame Golf Carts. Understand your rights and responsibilities when purchasing, renting, or servicing golf carts in Indiana."
        keywords="terms conditions, Monroe County golf carts, Indiana golf cart terms, legal agreement"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("policy-terms")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our comprehensive terms and conditions for golf cart sales, rentals, and services in Notre Dame, Indiana.
          </p>
        </div>
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-theme-primary mb-4">Terms & Conditions</h1>
              <p className="text-gray-600">Effective Date: January 23, 2025</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Agreement Overview</h2>
              <p className="mb-6">
                These Terms & Conditions ("Terms") govern your use of services provided by Notredame Golf Carts, 
                including golf cart sales, rentals, service, and related products. By engaging with our services, 
                you agree to be bound by these Terms.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Sales Terms</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Purchase Agreements</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>All golf cart sales are subject to written purchase agreements</li>
                <li>Prices are subject to change without notice until purchase is finalized</li>
                <li>Payment terms must be agreed upon prior to delivery</li>
                <li>Title transfer occurs upon full payment completion</li>
                <li>Indiana sales tax applies to all purchases</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Warranties and Returns</h3>
              <p className="mb-6">
                New golf carts include manufacturer warranties. Used golf carts may include limited warranties 
                as specified in writing. All warranty terms are provided with purchase documentation. 
                Returns are subject to our Return Policy.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Rental Terms</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Rental Requirements</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Valid driver's license and credit card required</li>
                <li>Minimum age requirement of 18 years</li>
                <li>Security deposit required for all rentals</li>
                <li>Rental agreement must be signed before vehicle release</li>
                <li>Insurance coverage as specified in rental agreement</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Rental Responsibilities</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Renter assumes full responsibility for golf cart during rental period</li>
                <li>Any damage, theft, or loss is renter's financial responsibility</li>
                <li>Golf cart must be returned in same condition as received</li>
                <li>Late return fees apply after agreed return time</li>
                <li>No unauthorized modifications or repairs permitted</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Service Terms</h2>
              <p className="mb-4">For repair and maintenance services:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Written estimates provided upon request</li>
                <li>Customer approval required for work exceeding estimates</li>
                <li>Parts and labor warranties as specified in service documentation</li>
                <li>Payment due upon service completion unless other arrangements made</li>
                <li>Abandoned vehicles subject to lien and disposal after 30 days</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Limitation of Liability</h2>
              <p className="mb-6">
                To the maximum extent permitted by Indiana law, Notredame Golf Carts shall not be 
                liable for any indirect, incidental, special, or consequential damages. Our total liability 
                shall not exceed the amount paid for the specific product or service in question.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Governing Law</h2>
              <p className="mb-6">
                These Terms are governed by Indiana state law. Any disputes shall be resolved in 
                the courts of Notre Dame, Indiana.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Notredame Golf Carts</strong></p>
                <p className="mb-2">Email: info@notredamegolfcarts.com</p>
                <p className="mb-2">Phone: 1-844-844-6638</p>
                <p className="mb-2">Serving Notre Dame, Indiana</p>
                <p>Website: notredamegolfcarts.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}