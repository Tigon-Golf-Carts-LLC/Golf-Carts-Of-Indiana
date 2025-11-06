import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function StaffingReportPage() {
  return (
    <>
      <SEOHead 
        title="Staffing Report | Monroe County Golf Carts"
        description="Learn about Monroe County Golf Carts' staffing structure, employment practices, and workforce development in Pennsylvania."
        keywords="staffing report, employment, Monroe County golf carts, workforce Pennsylvania"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("policy-staffing")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Staffing Report
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transparency on our employment practices, workforce composition, and professional development initiatives in Pennsylvania.
          </p>
        </div>
      </section>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-theme-primary mb-4">Annual Staffing Report</h1>
              <p className="text-gray-600">Reporting Period: January 1, 2024 - December 31, 2024</p>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Executive Summary</h2>
              <p className="mb-6">
                Monroe County Golf Carts maintains a dedicated workforce committed to providing 
                exceptional golf cart sales, rental, and service throughout Pennsylvania. This 
                annual staffing report provides transparency on our employment practices, 
                workforce composition, and professional development initiatives.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Workforce Overview</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Total Employment</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <ul className="list-disc pl-6">
                  <li><strong>Full-Time Employees:</strong> 24 team members</li>
                  <li><strong>Part-Time Employees:</strong> 8 team members</li>
                  <li><strong>Seasonal Employees:</strong> 6 team members (April-October)</li>
                  <li><strong>Total Workforce:</strong> 38 team members at peak season</li>
                  <li><strong>Employee Retention Rate:</strong> 87% (well above industry average)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Location Distribution</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>TIGON Golf Carts Pocono Pines:</strong> 18 employees</li>
                <li><strong>TIGON Golf Carts Scranton-Wilkes-Barre:</strong> 14 employees</li>
                <li><strong>Mobile Service Teams:</strong> 6 employees</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Departmental Structure</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Sales Department</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Sales Representatives:</strong> 8 employees</li>
                <li><strong>Sales Support Staff:</strong> 3 employees</li>
                <li><strong>Customer Service Representatives:</strong> 4 employees</li>
                <li><strong>Average Experience:</strong> 4.2 years in golf cart industry</li>
                <li><strong>Certifications:</strong> All sales staff certified in Denago and Evolution products</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Service Department</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Certified Technicians:</strong> 6 employees</li>
                <li><strong>Service Advisors:</strong> 2 employees</li>
                <li><strong>Parts Specialists:</strong> 2 employees</li>
                <li><strong>Average Experience:</strong> 6.8 years in golf cart service</li>
                <li><strong>Certifications:</strong> ASE certified, manufacturer-specific training</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Operations and Administration</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Management Team:</strong> 4 employees</li>
                <li><strong>Administrative Staff:</strong> 3 employees</li>
                <li><strong>Delivery and Logistics:</strong> 4 employees</li>
                <li><strong>Facility Maintenance:</strong> 2 employees</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Workforce Demographics</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Age Distribution</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <ul className="list-disc pl-6">
                  <li><strong>18-25 years:</strong> 12% (5 employees)</li>
                  <li><strong>26-35 years:</strong> 28% (11 employees)</li>
                  <li><strong>36-45 years:</strong> 35% (13 employees)</li>
                  <li><strong>46-55 years:</strong> 18% (7 employees)</li>
                  <li><strong>56+ years:</strong> 7% (2 employees)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Gender Representation</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Male:</strong> 68% (26 employees)</li>
                <li><strong>Female:</strong> 32% (12 employees)</li>
                <li><strong>Management Positions:</strong> 50% female representation</li>
                <li><strong>Technical Positions:</strong> 25% female representation</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Employment Practices</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Recruitment and Hiring</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>New Hires in 2024:</strong> 9 employees</li>
                <li><strong>Internal Promotions:</strong> 5 employees</li>
                <li><strong>Average Time to Fill Position:</strong> 21 days</li>
                <li><strong>Recruitment Sources:</strong> Employee referrals (44%), online job boards (33%), local colleges (23%)</li>
                <li><strong>Background Check Completion:</strong> 100% of new hires</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Compensation and Benefits</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Starting Wages:</strong> Above Pennsylvania minimum wage for all positions</li>
                <li><strong>Health Insurance:</strong> Available to all full-time employees</li>
                <li><strong>Paid Time Off:</strong> 15-25 days annually based on tenure</li>
                <li><strong>Retirement Plan:</strong> 401(k) with company matching available</li>
                <li><strong>Professional Development Budget:</strong> $1,200 per employee annually</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Professional Development</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Training Programs</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>New Employee Orientation:</strong> 40-hour comprehensive program</li>
                <li><strong>Ongoing Technical Training:</strong> Monthly manufacturer updates</li>
                <li><strong>Customer Service Training:</strong> Quarterly workshops</li>
                <li><strong>Safety Training:</strong> Annual certification required</li>
                <li><strong>Leadership Development:</strong> Available for high-potential employees</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">External Education Support</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Industry Conference Attendance:</strong> 12 employees in 2024</li>
                <li><strong>Certification Programs:</strong> Company-sponsored for relevant certifications</li>
                <li><strong>Tuition Reimbursement:</strong> Available for job-related education</li>
                <li><strong>Cross-Training Opportunities:</strong> Encouraged across departments</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Employee Performance and Recognition</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Performance Management</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Annual Performance Reviews:</strong> 100% completion rate</li>
                <li><strong>Goal Achievement Rate:</strong> 89% of employees met or exceeded goals</li>
                <li><strong>Performance Improvement Plans:</strong> 3 employees (successful completion rate: 100%)</li>
                <li><strong>Career Development Plans:</strong> Available for all employees</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Recognition Programs</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Employee of the Month:</strong> 12 recipients in 2024</li>
                <li><strong>Years of Service Awards:</strong> 8 employees recognized</li>
                <li><strong>Customer Service Excellence Awards:</strong> 6 recipients</li>
                <li><strong>Safety Recognition:</strong> Department-wide safety bonuses earned</li>
                <li><strong>Innovation Awards:</strong> 3 employees recognized for process improvements</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Workplace Safety and Wellness</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Safety Record</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Workplace Accidents:</strong> 2 minor incidents (below industry average)</li>
                <li><strong>Lost Time Incidents:</strong> 0 incidents</li>
                <li><strong>Safety Training Hours:</strong> 760 total hours completed</li>
                <li><strong>Safety Committee Meetings:</strong> Monthly meetings with employee participation</li>
                <li><strong>OSHA Compliance:</strong> 100% compliance with all regulations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Wellness Initiatives</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Health Screenings:</strong> Annual screenings offered on-site</li>
                <li><strong>Wellness Challenges:</strong> Quarterly team-building health activities</li>
                <li><strong>Mental Health Support:</strong> Employee assistance program available</li>
                <li><strong>Ergonomic Assessments:</strong> Workstation evaluations for all employees</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Employee Satisfaction and Engagement</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Annual Employee Survey Results</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <ul className="list-disc pl-6">
                  <li><strong>Overall Job Satisfaction:</strong> 4.3/5.0</li>
                  <li><strong>Work-Life Balance:</strong> 4.1/5.0</li>
                  <li><strong>Management Effectiveness:</strong> 4.2/5.0</li>
                  <li><strong>Career Development Opportunities:</strong> 3.9/5.0</li>
                  <li><strong>Workplace Safety:</strong> 4.6/5.0</li>
                  <li><strong>Survey Response Rate:</strong> 89%</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Employee Feedback Implementation</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Flexible Work Arrangements:</strong> Implemented for administrative roles</li>
                <li><strong>Enhanced Break Areas:</strong> Facility improvements based on feedback</li>
                <li><strong>Communication Improvements:</strong> Monthly all-hands meetings instituted</li>
                <li><strong>Professional Development Expansion:</strong> Increased training budget by 15%</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Future Workforce Planning</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2025 Staffing Goals</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Planned Hiring:</strong> 6-8 new positions to support growth</li>
                <li><strong>Focus Areas:</strong> Service technicians and sales representatives</li>
                <li><strong>Succession Planning:</strong> Identify and develop internal candidates</li>
                <li><strong>Diversity Goals:</strong> Increase workforce diversity by 10%</li>
                <li><strong>Retention Target:</strong> Maintain 85%+ retention rate</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Strategic Initiatives</h3>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Apprenticeship Program:</strong> Partnership with local technical schools</li>
                <li><strong>Remote Work Options:</strong> Expansion for eligible positions</li>
                <li><strong>Skills Development:</strong> Focus on emerging technologies in golf cart industry</li>
                <li><strong>Employee Wellness Expansion:</strong> Additional health and wellness benefits</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Community Impact</h2>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Local Hiring:</strong> 85% of employees are Monroe County residents</li>
                <li><strong>Economic Impact:</strong> $2.1 million in local payroll annually</li>
                <li><strong>Volunteer Hours:</strong> 240 hours of community service by employees</li>
                <li><strong>Educational Partnerships:</strong> Internship programs with 3 local schools</li>
                <li><strong>Local Supplier Preference:</strong> Supporting Pennsylvania businesses</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Human Resources</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Human Resources Department</strong></p>
                <p className="mb-2">Monroe County Golf Carts</p>
                <p className="mb-2">Email: info@monroegolfcarts.com</p>
                <p className="mb-2">Phone: 1-844-844-6638</p>
                <p className="mb-2">Serving Monroe County, Pennsylvania</p>
                <p className="mb-2">Website: monroegolfcarts.com</p>
                <p>Career opportunities and employment inquiries welcome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}