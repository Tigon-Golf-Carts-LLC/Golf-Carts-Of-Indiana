import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function StoragePolicyPage() {
  return (
    <>
      <SEOHead 
        title="Storage Policy | Notredame Golf Carts"
        description="Learn about golf cart storage services and policies at Notredame Golf Carts. Seasonal storage, maintenance, and security information for Indiana customers."
        keywords="golf cart storage, storage policy, Monroe County storage, Indiana golf cart storage"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("policy-storage")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Storage Policy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Secure, climate-controlled storage services for golf carts at our Indiana facilities.
          </p>
        </div>
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-theme-primary mb-4">Golf Cart Storage Policy</h1>
              <p className="text-gray-600">Effective Date: January 23, 2025</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Storage Services Overview</h2>
              <p className="mb-6">
                Notredame Golf Carts provides secure, climate-controlled storage services for golf carts 
                at our Indiana facilities. Our storage policy ensures the protection and maintenance 
                of your investment during storage periods.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Storage Options</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Indoor Climate-Controlled Storage</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Temperature maintained between 50-75°F year-round</li>
                <li>Humidity controlled to prevent moisture damage</li>
                <li>Fully enclosed, secure building</li>
                <li>24/7 security monitoring</li>
                <li>Individual storage bays for each golf cart</li>
                <li>Rate: $125 per month</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Covered Outdoor Storage</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Weather protection from rain, snow, and UV rays</li>
                <li>Open-air design with adequate ventilation</li>
                <li>Fenced and locked storage area</li>
                <li>Security cameras and lighting</li>
                <li>Suitable for seasonal storage</li>
                <li>Rate: $75 per month</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Seasonal Storage Programs</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Winter Storage Package</h3>
              <p className="mb-4">October 15 - April 15 (6 months) includes:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Pre-storage inspection and preparation</li>
                <li>Battery maintenance and conditioning</li>
                <li>Tire pressure monitoring</li>
                <li>Monthly status checks</li>
                <li>Pre-delivery preparation in spring</li>
                <li>Indoor rate: $650 (Save $100)</li>
                <li>Covered outdoor rate: $400 (Save $50)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Summer Storage Package</h3>
              <p className="mb-4">May 1 - September 30 (5 months) includes:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>UV protection and cooling system checks</li>
                <li>Battery maintenance during heat</li>
                <li>Interior protection from sun damage</li>
                <li>Monthly operational checks</li>
                <li>Indoor rate: $575 (Save $50)</li>
                <li>Covered outdoor rate: $350 (Save $25)</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Storage Requirements</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Customer Responsibilities</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Golf cart must be clean and in good condition</li>
                <li>Remove all personal items before storage</li>
                <li>Fuel tank should be full (gas models) or batteries charged (electric)</li>
                <li>Notify us of any mechanical issues</li>
                <li>Provide emergency contact information</li>
                <li>Storage fees paid monthly in advance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Prohibited Items</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Personal belongings or valuables</li>
                <li>Flammable materials</li>
                <li>Food or beverages</li>
                <li>Weapons or illegal substances</li>
                <li>Items not related to golf cart operation</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Maintenance Services</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Storage Maintenance Package</h3>
              <p className="mb-4">Optional services during storage period:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Monthly battery maintenance and charging</li>
                <li>Tire rotation and pressure adjustment</li>
                <li>Fluid level checks and top-offs</li>
                <li>Basic cleaning and detailing</li>
                <li>Minor repairs and adjustments</li>
                <li>Additional cost: $50 per month</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Pre-Season Preparation</h3>
              <p className="mb-4">Available before storage retrieval:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Complete mechanical inspection</li>
                <li>Battery testing and service</li>
                <li>Tire inspection and inflation</li>
                <li>Brake and steering checks</li>
                <li>Full cleaning and detailing</li>
                <li>Service cost: $150</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Access and Retrieval</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Access Hours</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Monday-Friday: 8:00 AM - 5:00 PM</li>
                <li>Saturday: 8:00 AM - 3:00 PM</li>
                <li>Sunday: By appointment only</li>
                <li>Holiday hours may vary</li>
                <li>24-hour notice preferred for retrievals</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Retrieval Process</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Valid ID required for golf cart retrieval</li>
                <li>All storage fees must be current</li>
                <li>Pre-retrieval inspection performed</li>
                <li>Customer walkthrough and acceptance</li>
                <li>Any issues documented and addressed</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Payment and Billing</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Monthly storage fees due in advance</li>
                <li>Accepted payment methods: cash, check, credit card</li>
                <li>Automatic billing available with credit card on file</li>
                <li>Late payment fee: $25 after 10 days</li>
                <li>Seasonal packages paid upfront with discount</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Delinquent Accounts</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>30 days overdue: written notice sent</li>
                <li>60 days overdue: phone contact and final notice</li>
                <li>90 days overdue: lien process begins</li>
                <li>120 days overdue: golf cart may be sold to recover fees</li>
                <li>Customer responsible for all collection costs</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Insurance and Liability</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Coverage</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Facility insured against fire, theft, and natural disasters</li>
                <li>Security systems and monitoring in place</li>
                <li>Climate control to prevent weather damage</li>
                <li>Professional handling by trained staff</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Customer Responsibilities</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Customer maintains ownership insurance during storage</li>
                <li>Notify insurance company of storage location</li>
                <li>Report any damage immediately upon discovery</li>
                <li>Customer responsible for mechanical issues not caused by negligence</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Termination of Storage</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>30-day written notice required for termination</li>
                <li>All fees must be current through notice period</li>
                <li>Golf cart must be retrieved within 30 days of notice</li>
                <li>Failure to retrieve may result in additional charges</li>
                <li>No refunds for unused portions of seasonal packages</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Storage Department</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Storage Services</strong></p>
                <p className="mb-2">Notredame Golf Carts</p>
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