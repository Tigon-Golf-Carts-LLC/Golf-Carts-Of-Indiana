import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function PublishingPolicyPage() {
  return (
    <>
      <SEOHead 
        title="Publishing Policy | Monroe County Golf Carts"
        description="Learn about Monroe County Golf Carts' content publishing standards, guidelines for user-generated content, and editorial policies for our Pennsylvania website."
        keywords="publishing policy, content policy, Monroe County golf carts, editorial guidelines"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("policy-publishing")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Publishing Policy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our content publishing standards and editorial guidelines for accurate, professional information.
          </p>
        </div>
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-theme-primary mb-4">Publishing Policy</h1>
              <p className="text-gray-600">Effective Date: January 23, 2025</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Content Publishing Standards</h2>
              <p className="mb-6">
                Monroe County Golf Carts maintains high standards for all content published on our website, 
                social media channels, and marketing materials. This policy ensures accuracy, professionalism, 
                and compliance with Pennsylvania business regulations.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Editorial Guidelines</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Accuracy and Verification</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>All product specifications verified with manufacturers</li>
                <li>Pricing information confirmed before publication</li>
                <li>Service availability validated across all locations</li>
                <li>Contact information regularly updated and verified</li>
                <li>Legal compliance reviewed for all promotional content</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content Quality Standards</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Professional writing style appropriate for business communication</li>
                <li>Grammar and spelling checked before publication</li>
                <li>Clear, concise language accessible to all customers</li>
                <li>Consistent brand voice and messaging</li>
                <li>Mobile-friendly formatting and design</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Product Information Publishing</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Golf Cart Specifications</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Technical specifications sourced directly from manufacturers</li>
                <li>High-quality product images from authorized sources</li>
                <li>Current model year information with availability status</li>
                <li>Accurate pricing with clear terms and conditions</li>
                <li>Warranty information prominently displayed</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Service Descriptions</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Detailed service offerings with clear scope</li>
                <li>Qualified technician certifications highlighted</li>
                <li>Service area coverage accurately mapped</li>
                <li>Response times and availability clearly stated</li>
                <li>Pricing transparency with no hidden fees</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">User-Generated Content</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Customer Reviews and Testimonials</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Only verified customer experiences published</li>
                <li>Reviews moderated for inappropriate content</li>
                <li>Both positive and constructive feedback welcomed</li>
                <li>Customer privacy protected (names with permission only)</li>
                <li>Responses to reviews professional and helpful</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Photo and Video Submissions</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Customer consent required for use of submitted media</li>
                <li>Quality standards maintained for published content</li>
                <li>Appropriate content only (family-friendly)</li>
                <li>Credit given to customers when requested</li>
                <li>Rights to use in marketing materials clearly established</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Legal and Compliance Standards</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Advertising Compliance</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>All claims substantiated with supporting evidence</li>
                <li>Federal Trade Commission guidelines followed</li>
                <li>Pennsylvania consumer protection laws observed</li>
                <li>Clear disclosure of any paid partnerships</li>
                <li>Honest representation of products and services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Intellectual Property Respect</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Authorized use of manufacturer logos and trademarks</li>
                <li>Proper attribution for third-party content</li>
                <li>Licensed images and multimedia content only</li>
                <li>Original content creation prioritized</li>
                <li>Copyright infringement prevention measures</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Content Review Process</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Pre-Publication Review</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Management approval required for major content changes</li>
                <li>Technical accuracy verified by qualified staff</li>
                <li>Legal review for promotional and policy content</li>
                <li>SEO optimization and accessibility compliance checked</li>
                <li>Mobile responsiveness tested before publication</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Post-Publication Monitoring</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Regular content audits for accuracy and relevance</li>
                <li>Broken links and outdated information promptly corrected</li>
                <li>Customer feedback on content accuracy welcomed</li>
                <li>Seasonal updates for availability and pricing</li>
                <li>Analytics monitoring to improve content effectiveness</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Social Media Publishing</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Platform-Specific Guidelines</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Content adapted appropriately for each social media platform</li>
                <li>Professional business tone maintained across all channels</li>
                <li>Customer interactions handled promptly and courteously</li>
                <li>Community guidelines of each platform strictly followed</li>
                <li>Crisis communication procedures in place</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Engagement Standards</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Timely responses to customer inquiries and comments</li>
                <li>Professional handling of complaints or negative feedback</li>
                <li>Promotional content balanced with educational information</li>
                <li>Local community engagement and support highlighted</li>
                <li>Safety messages and responsible usage promoted</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Content Updates and Maintenance</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Quarterly review of all published content for accuracy</li>
                <li>Immediate updates for safety-related information</li>
                <li>Seasonal content updates for availability and services</li>
                <li>New product information published within 48 hours of availability</li>
                <li>Archived content maintained for reference but clearly marked</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Content Removal Policy</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Outdated or inaccurate information promptly removed</li>
                <li>Customer-requested content removal honored when appropriate</li>
                <li>Legal compliance requires immediate removal when necessary</li>
                <li>Discontinued products clearly marked or removed</li>
                <li>Redirect pages maintained for removed content with high traffic</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Content Team</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Content and Marketing Department</strong></p>
                <p className="mb-2">Monroe County Golf Carts</p>
                <p className="mb-2">Email: info@monroegolfcarts.com</p>
                <p className="mb-2">Phone: 1-844-844-6638</p>
                <p className="mb-2">For content corrections or suggestions</p>
                <p className="mb-2">Website: monroegolfcarts.com</p>
                <p>Response time: 24-48 hours for content inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}