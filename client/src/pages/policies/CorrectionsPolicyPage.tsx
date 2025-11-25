import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function CorrectionsPolicyPage() {
  return (
    <>
      <SEOHead 
        title="Corrections Policy | Golf Carts Of Indiana"
        description="Learn about Golf Carts Of Indiana's commitment to accuracy and our process for handling corrections to published content and information."
        keywords="corrections policy, content accuracy, Indiana golf carts, information corrections"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("policy-corrections")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Corrections Policy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our commitment to accuracy and transparent process for handling corrections to published content and information.
          </p>
        </div>
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-theme-primary mb-4">Corrections Policy</h1>
              <p className="text-gray-600">Effective Date: January 23, 2025</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Our Commitment to Accuracy</h2>
              <p className="mb-6">
                Golf Carts Of Indiana is committed to providing accurate, up-to-date information across 
                all our communications channels. When errors occur, we take immediate action to correct 
                them transparently and prevent similar issues in the future.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Types of Corrections</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Product Information Corrections</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Golf cart specifications and technical details</li>
                <li>Pricing information and promotional offers</li>
                <li>Availability status and inventory levels</li>
                <li>Warranty terms and coverage details</li>
                <li>Manufacturer information and model changes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Service Information Corrections</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Service area coverage and delivery zones</li>
                <li>Operating hours and availability</li>
                <li>Contact information and location details</li>
                <li>Service pricing and fee structures</li>
                <li>Policy terms and conditions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content and Editorial Corrections</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Factual errors in articles and descriptions</li>
                <li>Spelling and grammatical mistakes</li>
                <li>Broken links and navigation issues</li>
                <li>Image accuracy and caption corrections</li>
                <li>Date and time stamp corrections</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">How to Report Corrections</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Reporting Channels</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Email:</strong> info@golfcartsofindiana.com with "Correction Request" in subject</li>
                <li><strong>Phone:</strong> 1-844-844-6638 - ask for corrections department</li>
                <li><strong>Website:</strong> Contact form with correction details</li>
                <li><strong>In-Person:</strong> Report to any TIGON Golf Carts location</li>
                <li><strong>Social Media:</strong> Direct message on Facebook or other platforms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information to Include</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Specific page URL or location where error appears</li>
                <li>Exact text or information that needs correction</li>
                <li>Suggested correction with source if available</li>
                <li>Your contact information for follow-up</li>
                <li>Screenshots or documentation if helpful</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Correction Response Process</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Response Timeline</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Critical errors (safety, pricing):</strong> Within 2 hours</li>
                <li><strong>Important corrections:</strong> Within 24 hours</li>
                <li><strong>Minor editorial corrections:</strong> Within 48 hours</li>
                <li><strong>Complex verifications:</strong> Within 72 hours with status update</li>
                <li><strong>Acknowledgment:</strong> Immediate automated response</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Verification Process</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Internal review of reported correction</li>
                <li>Verification against authoritative sources</li>
                <li>Consultation with manufacturers when applicable</li>
                <li>Legal review for policy-related changes</li>
                <li>Management approval for significant corrections</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Implementation of Corrections</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Website and Digital Corrections</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Immediate update to website content</li>
                <li>Search engine cache refresh requested</li>
                <li>Social media updates if correction affects posted content</li>
                <li>Email notifications sent if customers were affected</li>
                <li>Mobile app updates synchronized</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Print and Marketing Material Corrections</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>New print materials ordered with corrections</li>
                <li>Existing materials withdrawn from circulation when possible</li>
                <li>Staff notified of corrections for customer interactions</li>
                <li>Partner dealers updated with corrected information</li>
                <li>Direct mail corrections sent when warranted</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Transparency and Disclosure</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Significant Corrections</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Clear notation when major corrections are made</li>
                <li>Date and time stamp of correction updates</li>
                <li>Brief explanation of what was corrected when helpful</li>
                <li>Preservation of correction history for internal records</li>
                <li>Customer notification for corrections affecting their purchases</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Minor Corrections</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Spelling and grammar fixes made without notation</li>
                <li>Formatting improvements implemented seamlessly</li>
                <li>Broken link repairs completed immediately</li>
                <li>Image optimization done without disclosure</li>
                <li>Technical updates for better user experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Customer Impact Management</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Purchase-Related Corrections</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Immediate contact with affected customers</li>
                <li>Options provided for pricing discrepancies</li>
                <li>Product specification changes handled case-by-case</li>
                <li>Delivery timeline corrections communicated promptly</li>
                <li>Compensation considered for significant impacts</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Service-Related Corrections</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Schedule adjustments made to accommodate corrections</li>
                <li>Service area changes communicated to affected customers</li>
                <li>Pricing corrections honored for pending services</li>
                <li>Policy changes applied fairly to existing customers</li>
                <li>Alternative solutions offered when corrections affect availability</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Prevention and Quality Control</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Proactive Measures</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Regular content audits and accuracy reviews</li>
                <li>Multiple approval levels for content publication</li>
                <li>Automated checks for common error types</li>
                <li>Staff training on accuracy and attention to detail</li>
                <li>Technology solutions to prevent recurring errors</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Continuous Improvement</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Analysis of correction patterns to identify systemic issues</li>
                <li>Process improvements based on correction frequency</li>
                <li>Enhanced training for areas with frequent corrections</li>
                <li>Technology upgrades to support accuracy</li>
                <li>Regular review of correction policy effectiveness</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Acknowledgment and Appreciation</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Personal thank you to customers who report corrections</li>
                <li>Recognition that customer corrections improve our service</li>
                <li>Feedback encouraged to maintain accuracy standards</li>
                <li>Appreciation for customer attention to detail</li>
                <li>Commitment to continued accuracy improvement</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Record Keeping</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>All corrections logged with date, source, and resolution</li>
                <li>Monthly reports on correction frequency and types</li>
                <li>Annual analysis of correction trends</li>
                <li>Documentation maintained for accountability</li>
                <li>Records used for training and process improvement</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Corrections Department</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Corrections and Content Accuracy Team</strong></p>
                <p className="mb-2">Golf Carts Of Indiana</p>
                <p className="mb-2">Email: info@golfcartsofindiana.com (Subject: Correction Request)</p>
                <p className="mb-2">Phone: 1-844-844-6638</p>
                <p className="mb-2">Serving Indiana</p>
                <p className="mb-2">Website: golfcartsofindiana.com</p>
                <p>Thank you for helping us maintain accuracy!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
