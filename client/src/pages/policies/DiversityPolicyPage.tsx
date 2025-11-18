import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function DiversityPolicyPage() {
  return (
    <>
      <SEOHead 
        title="Diversity Policy | Notredame Golf Carts"
        description="Learn about Notredame Golf Carts' commitment to diversity, equity, and inclusion in our Indiana workplace and customer service practices."
        keywords="diversity policy, equity inclusion, Notre Dame golf carts, workplace diversity Indiana"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("policy-diversity")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Diversity & Inclusion Policy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our commitment to fostering a diverse, equitable, and inclusive environment for all employees, customers, and business partners.
          </p>
        </div>
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-theme-primary mb-4">Diversity, Equity & Inclusion Policy</h1>
              <p className="text-gray-600">Effective Date: January 23, 2025</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Our Commitment to Diversity</h2>
              <p className="mb-6">
                Notredame Golf Carts is committed to fostering a diverse, equitable, and inclusive 
                environment for all employees, customers, and business partners. We believe that 
                diversity strengthens our organization and enhances our ability to serve the 
                Indiana community effectively.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Core Values and Principles</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Respect and Dignity</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Every individual deserves to be treated with respect and dignity</li>
                <li>Personal differences are valued and celebrated</li>
                <li>Zero tolerance for discrimination, harassment, or bias</li>
                <li>Professional conduct expected from all team members</li>
                <li>Inclusive communication practices encouraged</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Equal Opportunity</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Merit-based hiring and promotion decisions</li>
                <li>Equal access to professional development opportunities</li>
                <li>Fair compensation practices regardless of background</li>
                <li>Transparent career advancement pathways</li>
                <li>Accessible workplace accommodations provided</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Protected Characteristics</h2>
              <p className="mb-4">Notredame Golf Carts prohibits discrimination based on:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Race, color, and ethnicity</li>
                <li>National origin and ancestry</li>
                <li>Religion and spiritual beliefs</li>
                <li>Gender identity and expression</li>
                <li>Sexual orientation</li>
                <li>Age and generational differences</li>
                <li>Disability status (physical or mental)</li>
                <li>Military and veteran status</li>
                <li>Marital and family status</li>
                <li>Socioeconomic background</li>
                <li>Political affiliation</li>
                <li>Any other characteristic protected by law</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Workplace Diversity Initiatives</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Recruitment and Hiring</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Diverse candidate sourcing strategies</li>
                <li>Inclusive job descriptions and requirements</li>
                <li>Diverse interview panels when possible</li>
                <li>Bias awareness training for hiring managers</li>
                <li>Partnership with diverse professional organizations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Professional Development</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Equal access to training and development programs</li>
                <li>Mentorship opportunities for underrepresented employees</li>
                <li>Leadership development focused on inclusion</li>
                <li>Cultural competency training for all staff</li>
                <li>Skills-based advancement opportunities</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Inclusive Customer Service</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Welcoming Environment</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>All customers treated with equal respect and courtesy</li>
                <li>Multilingual support available when possible</li>
                <li>Accessible facilities and services</li>
                <li>Cultural sensitivity in customer interactions</li>
                <li>Inclusive marketing and communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Accessibility Accommodations</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Physical accessibility improvements ongoing</li>
                <li>Modified golf carts for customers with disabilities</li>
                <li>Flexible service delivery options</li>
                <li>Assistive technology integration</li>
                <li>Staff training on disability awareness</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Community Engagement</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Local Partnerships</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Support for diverse community organizations</li>
                <li>Participation in cultural events and celebrations</li>
                <li>Sponsorship of inclusive community activities</li>
                <li>Partnership with minority-owned businesses</li>
                <li>Educational outreach to diverse groups</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Economic Inclusion</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Diverse supplier development program</li>
                <li>Local hiring initiatives</li>
                <li>Small business partnership opportunities</li>
                <li>Community investment in underserved areas</li>
                <li>Scholarship and internship programs</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Training and Education</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Diversity Training Programs</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Mandatory diversity and inclusion training for all employees</li>
                <li>Unconscious bias awareness workshops</li>
                <li>Cultural competency development sessions</li>
                <li>Inclusive leadership training for managers</li>
                <li>Regular refresher training and updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Ongoing Education</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Diversity-focused lunch and learn sessions</li>
                <li>Guest speakers from diverse backgrounds</li>
                <li>Cultural awareness month celebrations</li>
                <li>Best practices sharing across locations</li>
                <li>External diversity conference participation</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Reporting and Accountability</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Reporting Mechanisms</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Multiple channels for reporting discrimination or bias</li>
                <li>Anonymous reporting options available</li>
                <li>Protection against retaliation for good faith reporting</li>
                <li>Prompt investigation of all reports</li>
                <li>Regular communication about reporting processes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Accountability Measures</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Diversity metrics tracked and reported</li>
                <li>Management performance includes diversity goals</li>
                <li>Regular policy review and updates</li>
                <li>Employee feedback surveys on inclusion</li>
                <li>Third-party diversity assessments conducted</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Employee Resource Groups</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Support Networks</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Employee-led affinity groups encouraged</li>
                <li>Resources provided for group activities</li>
                <li>Professional development through group participation</li>
                <li>Cross-cultural mentoring programs</li>
                <li>Leadership opportunities within groups</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Business Impact</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Employee input on business decisions</li>
                <li>Market insights from diverse perspectives</li>
                <li>Product and service improvement suggestions</li>
                <li>Community outreach program development</li>
                <li>Recruitment and retention strategies</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Measuring Success</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Key Performance Indicators</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Workforce diversity representation at all levels</li>
                <li>Employee satisfaction and engagement scores</li>
                <li>Retention rates across diverse groups</li>
                <li>Customer satisfaction in diverse communities</li>
                <li>Supplier diversity spending metrics</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Continuous Improvement</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Annual diversity assessment and goal setting</li>
                <li>Regular policy review and enhancement</li>
                <li>Best practices research and implementation</li>
                <li>Stakeholder feedback integration</li>
                <li>Industry benchmarking and comparison</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Leadership Commitment</h2>
              <p className="mb-6">
                Our leadership team is personally committed to advancing diversity, equity, and 
                inclusion throughout Notredame Golf Carts. This commitment is demonstrated 
                through resource allocation, policy development, and personal accountability 
                for creating an inclusive workplace culture.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Human Resources Department</strong></p>
                <p className="mb-2">Notredame Golf Carts</p>
                <p className="mb-2">Email: info@notredamegolfcarts.com</p>
                <p className="mb-2">Phone: 1-844-844-6638</p>
                <p className="mb-2">Serving Notre Dame, Indiana</p>
                <p className="mb-2">Website: notredamegolfcarts.com</p>
                <p>Confidential reporting and support available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}