import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function ReturnPolicyPage() {
  return (
    <>
      <SEOHead 
        title="Return Policy | Golf Carts Of Indiana"
        description="Learn about Golf Carts Of Indiana return policy for golf cart purchases, accessories, and parts. Understand return conditions, timelines, and procedures."
        keywords="return policy, golf cart returns, Indiana golf carts, refund policy Indiana"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("policy-return")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Return Policy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Learn about our return policy for golf carts, parts, and accessories purchased from Golf Carts Of Indiana.
          </p>
        </div>
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-theme-primary mb-4">Return Policy</h1>
              <p className="text-gray-600">Effective Date: January 23, 2025</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">General Return Policy</h2>
              <p className="mb-6">
                At Golf Carts Of Indiana, we strive for complete customer satisfaction. This return policy 
                outlines the conditions and procedures for returns on golf carts, parts, and accessories 
                purchased from our Indiana locations.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Golf Cart Returns</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">New Golf Carts</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Returns accepted within 7 days of delivery</li>
                <li>Golf cart must be in original condition with less than 10 miles on odometer</li>
                <li>All original documentation, keys, and accessories must be included</li>
                <li>Restocking fee of 15% applies to all golf cart returns</li>
                <li>Customer responsible for return transportation costs</li>
                <li>Refund processed within 10 business days of approved return</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Used Golf Carts</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Returns accepted within 3 days of delivery</li>
                <li>Must be returned in same condition as sold</li>
                <li>Subject to inspection and approval</li>
                <li>Restocking fee of 20% applies</li>
                <li>No returns on "as-is" sales</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Parts and Accessories</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Standard Returns</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Returns accepted within 30 days of purchase</li>
                <li>Items must be unused and in original packaging</li>
                <li>Receipt or proof of purchase required</li>
                <li>Restocking fee of 10% applies to non-defective returns</li>
                <li>Special order items are non-returnable unless defective</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Non-Returnable Items</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Custom or personalized accessories</li>
                <li>Used or installed parts</li>
                <li>Electrical components that have been connected</li>
                <li>Fluids, oils, and consumable items</li>
                <li>Items damaged by customer negligence</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Return Process</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Authorization Required</h3>
              <p className="mb-4">All returns must be pre-authorized. To initiate a return:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Contact us at info@golfcartsofindiana.com or 1-844-844-6638</li>
                <li>Provide order number and reason for return</li>
                <li>Receive return authorization number (RMA)</li>
                <li>Include RMA number with returned item</li>
                <li>Returns without RMA will be refused</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Shipping and Handling</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Customer responsible for return shipping costs unless item is defective</li>
                <li>Items must be properly packaged to prevent damage</li>
                <li>Insurance recommended for high-value returns</li>
                <li>Golf Carts Of Indiana not responsible for items lost in transit</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Defective Items</h2>
              <p className="mb-4">For items received damaged or defective:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Contact us within 48 hours of delivery</li>
                <li>Provide photos of defective item and packaging</li>
                <li>We will arrange return shipping at no cost to customer</li>
                <li>Full refund or replacement provided for verified defective items</li>
                <li>No restocking fee for defective returns</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Refund Processing</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Refunds processed to original payment method</li>
                <li>Credit card refunds take 3-5 business days to appear</li>
                <li>Check payments refunded by company check within 10 business days</li>
                <li>Refund amount excludes original shipping charges (unless defective)</li>
                <li>Applicable restocking fees deducted from refund amount</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Warranty vs. Returns</h2>
              <p className="mb-6">
                This return policy is separate from manufacturer warranties. Items experiencing issues 
                after the return period may be covered under manufacturer warranty. Contact us to 
                determine if warranty coverage applies to your situation.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Returns Department</strong></p>
                <p className="mb-2">Golf Carts Of Indiana</p>
                <p className="mb-2">Email: info@golfcartsofindiana.com</p>
                <p className="mb-2">Phone: 1-844-844-6638</p>
                <p className="mb-2">Serving Indiana</p>
                <p>Website: golfcartsofindiana.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
