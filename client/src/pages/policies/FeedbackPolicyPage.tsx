import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function FeedbackPolicyPage() {
  return (
    <>
      <SEOHead 
        title="Feedback Policy | Notredame Golf Carts"
        description="Learn how to provide feedback to Notredame Golf Carts. Our commitment to customer feedback, review process, and continuous improvement in Indiana."
        keywords="feedback policy, customer feedback, Notre Dame golf carts, customer service policy"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("policy-feedback")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Feedback Policy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your feedback drives our continuous improvement and helps us provide exceptional service throughout Indiana.
          </p>
        </div>
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-theme-primary mb-4">Customer Feedback Policy</h1>
              <p className="text-gray-600">Effective Date: January 23, 2025</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Our Commitment to Customer Feedback</h2>
              <p className="mb-6">
                At Notredame Golf Carts, we value every customer's voice. Your feedback drives our 
                continuous improvement efforts and helps us provide exceptional service throughout 
                Indiana. This policy outlines how we collect, process, and act on customer feedback.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Types of Feedback We Welcome</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Product Feedback</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Golf cart performance and quality experiences</li>
                <li>Feature requests and product improvements</li>
                <li>Accessory and parts satisfaction</li>
                <li>Comparison feedback with other brands</li>
                <li>Long-term ownership experiences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Service Feedback</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Sales process and customer service experiences</li>
                <li>Rental service quality and convenience</li>
                <li>Repair and maintenance service satisfaction</li>
                <li>Delivery and pickup experiences</li>
                <li>Staff professionalism and knowledge</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Website and Digital Experience</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Website functionality and ease of use</li>
                <li>Information accuracy and completeness</li>
                <li>Online booking and inquiry processes</li>
                <li>Mobile app experience and features</li>
                <li>Social media engagement and content</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">How to Provide Feedback</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Direct Communication Channels</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Email:</strong> info@notredamegolfcarts.com</li>
                <li><strong>Phone:</strong> 1-844-844-6638</li>
                <li><strong>In-Person:</strong> Any TIGON Golf Carts location</li>
                <li><strong>Mail:</strong> Written feedback to our business addresses</li>
                <li><strong>Website:</strong> Contact form and feedback sections</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Online Review Platforms</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Google Business reviews</li>
                <li>Facebook page reviews and comments</li>
                <li>Industry-specific review websites</li>
                <li>Better Business Bureau feedback</li>
                <li>Local business directory reviews</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Feedback Processing and Response</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Response Timeframes</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Urgent issues:</strong> Within 4 hours during business hours</li>
                <li><strong>General feedback:</strong> Within 24 hours</li>
                <li><strong>Complex inquiries:</strong> Within 48 hours with status update</li>
                <li><strong>Follow-up required:</strong> Within 1 week with resolution plan</li>
                <li><strong>Detailed investigations:</strong> Status updates every 3 business days</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Internal Review Process</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>All feedback logged in our customer management system</li>
                <li>Immediate assignment to appropriate department</li>
                <li>Management review for significant issues</li>
                <li>Root cause analysis for recurring problems</li>
                <li>Solution development and implementation tracking</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Positive Feedback Recognition</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Staff Recognition Program</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Positive feedback shared with mentioned employees</li>
                <li>Monthly recognition for outstanding customer service</li>
                <li>Team meetings highlighting customer compliments</li>
                <li>Annual awards based on customer feedback</li>
                <li>Professional development opportunities for top performers</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Success Story Sharing</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Customer permission requested before sharing testimonials</li>
                <li>Success stories featured on website and social media</li>
                <li>Case studies developed for particularly helpful solutions</li>
                <li>Best practices shared across all locations</li>
                <li>Customer loyalty program enhancements based on feedback</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Complaint Resolution Process</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Initial Response</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Immediate acknowledgment of complaint receipt</li>
                <li>Assigned case number for tracking purposes</li>
                <li>Primary contact person identified</li>
                <li>Initial assessment and priority level assigned</li>
                <li>Expected resolution timeline communicated</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Investigation and Resolution</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Thorough investigation of all complaint details</li>
                <li>Additional information gathered from customer as needed</li>
                <li>Internal processes reviewed and corrected if necessary</li>
                <li>Resolution options developed and presented to customer</li>
                <li>Follow-up to ensure customer satisfaction with resolution</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Feedback-Driven Improvements</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Service Enhancements</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Regular analysis of feedback trends and patterns</li>
                <li>Process improvements based on customer suggestions</li>
                <li>Staff training updates addressing common concerns</li>
                <li>Technology upgrades to improve customer experience</li>
                <li>New service offerings developed from customer requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Communication Improvements</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Website content updates based on clarity feedback</li>
                <li>Enhanced product information and specifications</li>
                <li>Improved pricing transparency and fee structures</li>
                <li>Better service availability and scheduling communication</li>
                <li>Proactive customer updates during service processes</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Feedback Privacy and Confidentiality</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information Protection</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Customer personal information kept confidential</li>
                <li>Feedback used internally for improvement purposes only</li>
                <li>Anonymous feedback options available</li>
                <li>Data sharing limited to necessary staff members</li>
                <li>Secure storage of all feedback records</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Public Sharing Guidelines</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Customer consent required before public testimonial use</li>
                <li>Option to use first name only or remain anonymous</li>
                <li>Right to request removal of published feedback</li>
                <li>Editorial review for appropriate public content only</li>
                <li>No sharing of sensitive business or personal details</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Feedback Quality Assurance</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Monthly feedback review meetings with management</li>
                <li>Quarterly customer satisfaction surveys</li>
                <li>Annual comprehensive feedback analysis and reporting</li>
                <li>Benchmarking against industry standards</li>
                <li>Continuous staff training on feedback handling</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Our Feedback Team</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Customer Feedback Department</strong></p>
                <p className="mb-2">Notredame Golf Carts</p>
                <p className="mb-2">Email: info@notredamegolfcarts.com</p>
                <p className="mb-2">Phone: 1-844-844-6638</p>
                <p className="mb-2">Serving Notre Dame, Indiana</p>
                <p className="mb-2">Website: notredamegolfcarts.com</p>
                <p>We appreciate your feedback and look forward to serving you better!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}