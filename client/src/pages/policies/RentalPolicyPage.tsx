import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function RentalPolicyPage() {
  return (
    <>
      <SEOHead 
        title="Rental Policy | Golf Carts Of Indiana"
        description="Complete golf cart rental policy for Golf Carts Of Indiana. Learn about rental requirements, responsibilities, insurance, and terms for Indiana golf cart rentals."
        keywords="rental policy, golf cart rental, Indiana rentals, Indiana golf cart rental policy"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("policy-rental")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Rental Policy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Complete golf cart rental terms, requirements, and responsibilities for Indiana.
          </p>
        </div>
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-theme-primary mb-4">Golf Cart Rental Policy</h1>
              <p className="text-gray-600">Effective Date: January 23, 2025</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Rental Requirements</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Age and Licensing</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Minimum age: 18 years old</li>
                <li>Valid driver's license required (any U.S. state)</li>
                <li>International visitors must have valid passport and international driving permit</li>
                <li>License must be presented at time of rental and pickup</li>
                <li>Suspended or revoked licenses not accepted</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Payment and Deposits</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Major credit card required (Visa, MasterCard, American Express, Discover)</li>
                <li>Debit cards accepted with additional verification</li>
                <li>Security deposit: $500 for 4-seater, $750 for 6-seater, $600 for utility carts</li>
                <li>Full rental payment due at time of rental</li>
                <li>Deposits refunded 3-5 business days after satisfactory return</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Rental Terms and Conditions</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Rental Period</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Minimum rental: 24 hours (daily rate applies)</li>
                <li>Late returns: $25/hour after agreed return time</li>
                <li>Early returns: No refund for unused rental time</li>
                <li>Extensions must be approved and paid in advance</li>
                <li>Maximum single rental period: 30 days</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Authorized Users</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Only renter and pre-approved additional drivers may operate golf cart</li>
                <li>Additional drivers must meet all requirements and be present during rental</li>
                <li>Additional driver fee: $25 per person</li>
                <li>Maximum of 2 additional drivers per rental</li>
                <li>Renter remains fully responsible regardless of who is driving</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Renter Responsibilities</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Care and Operation</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Operate golf cart safely and in accordance with all traffic laws</li>
                <li>Regular charging as instructed (failure may result in additional fees)</li>
                <li>Keep golf cart clean and in good condition</li>
                <li>No smoking, pets, or food/beverages in golf cart</li>
                <li>Maximum speed and weight limits must be observed</li>
                <li>Golf cart must remain within Indiana unless approved</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Prohibited Uses</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Racing, stunts, or reckless driving</li>
                <li>Towing other vehicles or trailers</li>
                <li>Off-road use unless specifically approved</li>
                <li>Commercial use without commercial rental agreement</li>
                <li>Transporting hazardous materials</li>
                <li>Any illegal activities</li>
                <li>Modifications or repairs without written permission</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Insurance and Liability</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Insurance Coverage</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Basic liability insurance included with all rentals</li>
                <li>Coverage limits: $100,000 per person, $300,000 per accident</li>
                <li>Property damage coverage: $50,000</li>
                <li>Comprehensive and collision coverage available for additional fee</li>
                <li>Renter's personal auto insurance may provide additional coverage</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Damage and Loss</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Renter responsible for all damage during rental period</li>
                <li>Theft or total loss: renter responsible for full replacement cost</li>
                <li>Minor damage: repair costs plus administrative fee of $75</li>
                <li>Major damage: repair costs plus loss of use fees</li>
                <li>All incidents must be reported immediately</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Rental Rates and Fees</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Standard Rates</h3>
              <p className="mb-4">Current rental rates (subject to change):</p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="mb-2"><strong>4-Seater Golf Carts:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Daily: $245</li>
                  <li>3-Day: $685 (Save 6.8%)</li>
                  <li>Weekly: $1,050 (Save 38.7%)</li>
                  <li>Monthly: $2,800 (Save 61.6%)</li>
                </ul>
                <p className="mb-2"><strong>6-Seater Golf Carts:</strong></p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Daily: $295</li>
                  <li>3-Day: $735 (Save 16.9%)</li>
                  <li>Weekly: $1,400 (Save 32.2%)</li>
                  <li>Monthly: $3,500 (Save 60.4%)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Additional Fees</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Late return: $25 per hour</li>
                <li>Cleaning fee: $50-150 depending on condition</li>
                <li>Refueling/recharging fee: $35 if returned uncharged</li>
                <li>Smoking odor removal: $200</li>
                <li>Pet hair removal: $75</li>
                <li>Missing accessories: Replacement cost plus $25 fee</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Cancellation Policy</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Free cancellation up to 24 hours before rental start</li>
                <li>Cancellations within 24 hours: 50% refund</li>
                <li>No-shows: No refund</li>
                <li>Weather cancellations: Full refund or rescheduling available</li>
                <li>Golf Carts Of Indiana may cancel due to vehicle unavailability with full refund</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Emergency Procedures</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Accidents</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Contact 911 if anyone is injured</li>
                <li>Call Golf Carts Of Indiana immediately: 1-844-844-6638</li>
                <li>Do not admit fault or make statements about the incident</li>
                <li>Take photos of damage and scene if safe to do so</li>
                <li>Obtain contact information from other parties involved</li>
                <li>Complete incident report within 24 hours</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Breakdowns</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Contact our 24/7 support line: 1-844-844-6638</li>
                <li>Provide location and description of problem</li>
                <li>Do not attempt repairs yourself</li>
                <li>Replacement golf cart provided when possible</li>
                <li>Rental time extended for breakdown time at no charge</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Rental Department</strong></p>
                <p className="mb-2">Golf Carts Of Indiana</p>
                <p className="mb-2">Email: info@golfcartsofindiana.com</p>
                <p className="mb-2">Phone: 1-844-844-6638 (24/7 Support)</p>
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
