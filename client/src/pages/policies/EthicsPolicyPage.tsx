import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function EthicsPolicyPage() {
  return (
    <>
      <SEOHead 
        title="Ethics Policy | Notredame Golf Carts"
        description="Learn about Notredame Golf Carts' code of ethics and business conduct standards for employees, customers, and partners in Indiana."
        keywords="ethics policy, business ethics, Monroe County golf carts, code of conduct Indiana"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("policy-ethics")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Ethics Policy
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our commitment to ethical business practices guides every interaction with customers, employees, and communities we serve.
          </p>
        </div>
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-theme-primary mb-4">Code of Ethics & Business Conduct</h1>
              <p className="text-gray-600">Effective Date: January 23, 2025</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Our Ethical Foundation</h2>
              <p className="mb-6">
                Notredame Golf Carts operates with the highest standards of integrity, honesty, 
                and ethical behavior. Our commitment to ethical business practices guides every 
                interaction with customers, employees, suppliers, and the Indiana communities we serve.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Core Ethical Principles</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Integrity</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Honest and transparent communication in all business dealings</li>
                <li>Consistent behavior that aligns with stated values</li>
                <li>Truthful representation of products, services, and capabilities</li>
                <li>Acknowledgment of mistakes and commitment to correction</li>
                <li>Personal accountability for actions and decisions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Respect</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Dignified treatment of all individuals regardless of position</li>
                <li>Professional courtesy in all interactions</li>
                <li>Appreciation for diverse perspectives and backgrounds</li>
                <li>Protection of confidential and personal information</li>
                <li>Recognition of others' contributions and achievements</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Excellence</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Commitment to quality in products and services</li>
                <li>Continuous improvement in all business processes</li>
                <li>Professional development and skill enhancement</li>
                <li>Innovation in customer service and solutions</li>
                <li>Exceeding customer expectations whenever possible</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Customer Relations Ethics</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Fair Dealing</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Honest pricing with no hidden fees or charges</li>
                <li>Clear explanation of all terms and conditions</li>
                <li>Fair treatment regardless of purchase size or customer status</li>
                <li>Prompt resolution of customer concerns and complaints</li>
                <li>Respectful handling of customer information and privacy</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Sales Practices</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>No high-pressure sales tactics or misleading information</li>
                <li>Accurate representation of product features and benefits</li>
                <li>Honest assessment of customer needs and appropriate solutions</li>
                <li>Clear communication about warranties and service obligations</li>
                <li>Respect for customer decision-making process and timeline</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Employee Conduct Standards</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Professional Behavior</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Punctuality and reliability in work attendance</li>
                <li>Appropriate professional appearance and demeanor</li>
                <li>Respectful communication with colleagues and customers</li>
                <li>Confidentiality of company and customer information</li>
                <li>Compliance with all company policies and procedures</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Workplace Ethics</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>No harassment, discrimination, or inappropriate behavior</li>
                <li>Safe work practices and environmental responsibility</li>
                <li>Honest reporting of work activities and achievements</li>
                <li>Proper use of company resources and equipment</li>
                <li>Collaboration and teamwork in achieving common goals</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Financial Integrity</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Financial Reporting</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Accurate and timely financial record keeping</li>
                <li>Transparent reporting of all business transactions</li>
                <li>Compliance with tax obligations and regulations</li>
                <li>Proper documentation of expenses and revenues</li>
                <li>Regular financial audits and reviews</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Anti-Fraud Measures</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Zero tolerance for fraudulent activities</li>
                <li>Segregation of duties in financial processes</li>
                <li>Multiple approval levels for significant expenditures</li>
                <li>Regular monitoring of financial activities</li>
                <li>Employee training on fraud prevention and detection</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Conflicts of Interest</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Identification and Disclosure</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Prompt disclosure of potential conflicts of interest</li>
                <li>Recusal from decisions involving personal interests</li>
                <li>No personal benefit from business relationships</li>
                <li>Transparent handling of family or friend business dealings</li>
                <li>Annual conflict of interest declarations by key personnel</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Outside Activities</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>No competing business activities without disclosure</li>
                <li>Approval required for outside board positions</li>
                <li>Personal investments that don't compromise business judgment</li>
                <li>Clear separation of personal and business activities</li>
                <li>No use of company position for personal gain</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Supplier and Partner Relations</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Fair Procurement</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Competitive bidding processes when appropriate</li>
                <li>Merit-based supplier selection criteria</li>
                <li>No gifts or entertainment that could influence decisions</li>
                <li>Timely payment of invoices and obligations</li>
                <li>Clear expectations and performance standards</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Partnership Ethics</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Mutual respect and fair dealing with all partners</li>
                <li>Honesty in all business communications</li>
                <li>Compliance with contractual obligations</li>
                <li>Collaborative problem-solving approach</li>
                <li>Support for partner success and growth</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Legal and Regulatory Compliance</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Law Adherence</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Full compliance with all applicable federal, state, and local laws</li>
                <li>Regular review of regulatory requirements</li>
                <li>Prompt implementation of regulatory changes</li>
                <li>Cooperation with regulatory authorities and investigations</li>
                <li>Legal counsel consultation for complex matters</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Industry Standards</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Adherence to golf cart industry safety standards</li>
                <li>Compliance with environmental regulations</li>
                <li>Following best practices in business operations</li>
                <li>Participation in industry associations and standards development</li>
                <li>Continuous monitoring of industry regulatory changes</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Environmental Responsibility</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Sustainable Practices</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Promotion of electric and eco-friendly golf carts</li>
                <li>Proper disposal of batteries and hazardous materials</li>
                <li>Energy-efficient operations and facilities</li>
                <li>Waste reduction and recycling programs</li>
                <li>Environmental impact consideration in business decisions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Community Stewardship</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Support for local environmental initiatives</li>
                <li>Education on sustainable transportation options</li>
                <li>Partnership with environmental organizations</li>
                <li>Responsible land use and facility management</li>
                <li>Promotion of outdoor recreation and healthy communities</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Reporting Ethical Concerns</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Reporting Channels</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Multiple avenues for reporting ethical concerns</li>
                <li>Anonymous reporting options available</li>
                <li>Protection against retaliation for good faith reporting</li>
                <li>Prompt investigation of all reported concerns</li>
                <li>Regular communication about ethical standards</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Investigation Process</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Fair and thorough investigation of all reports</li>
                <li>Confidentiality maintained throughout process</li>
                <li>Appropriate corrective actions taken when warranted</li>
                <li>Follow-up to ensure resolution effectiveness</li>
                <li>Documentation and tracking of all ethical issues</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Training and Awareness</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Regular ethics training for all employees</li>
                <li>New employee orientation includes ethics education</li>
                <li>Annual review and acknowledgment of ethics policy</li>
                <li>Scenario-based training for practical application</li>
                <li>Leadership modeling of ethical behavior</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Enforcement and Accountability</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Consistent enforcement of ethical standards</li>
                <li>Progressive discipline for ethics violations</li>
                <li>Termination for serious ethical breaches</li>
                <li>Regular monitoring and assessment of ethical culture</li>
                <li>Continuous improvement of ethics programs</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Ethics Department</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Ethics and Compliance</strong></p>
                <p className="mb-2">Notredame Golf Carts</p>
                <p className="mb-2">Email: info@notredamegolfcarts.com (Confidential Ethics Reports)</p>
                <p className="mb-2">Phone: 1-844-844-6638</p>
                <p className="mb-2">Serving Notre Dame, Indiana</p>
                <p className="mb-2">Website: notredamegolfcarts.com</p>
                <p>Confidential and anonymous reporting available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}