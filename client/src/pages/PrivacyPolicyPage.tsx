import SEOHead from '@/components/SEOHead';
import { generateSEOMetadata } from '@/utils/seoUtils';

export function PrivacyPolicyPage() {
  // Generate SEO metadata that matches the H1 on this page
  const seoData = generateSEOMetadata({
    pageTitle: "Privacy Policy",
    baseDescription: "Privacy Policy for Monroe County Golf Carts. Learn how we collect, use, and protect your personal information when you visit our website or purchase golf carts. Your privacy is our priority.",
    pageType: "policy",
    canonicalPath: "/privacy-policy",
    keywords: ["privacy policy", "data protection", "personal information", "Monroe County Golf Carts"],
    heroBackgroundSeed: "policy"
  });
  
  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        ogImageWidth={seoData.ogImageWidth}
        ogImageHeight={seoData.ogImageHeight}
        ogType={seoData.ogType}
        heroBackgroundSeed={seoData.heroBackgroundSeed}
        pageType={seoData.pageType}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-theme-primary mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Effective Date:</strong> January 23, 2025
              </p>
              
              <p className="mb-6">
                At Monroe County Golf Carts, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website monroegolfcarts.com or engage with our services.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Contact us through our contact forms</li>
                <li>Request quotes or information about our golf carts</li>
                <li>Subscribe to our newsletter or promotional materials</li>
                <li>Schedule service appointments</li>
                <li>Participate in surveys or promotions</li>
              </ul>

              <p className="mb-4">This information may include:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Information about your golf cart interests and preferences</li>
                <li>Communication history with our dealership</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
              <p className="mb-4">When you visit our website, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>IP address and location information</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Process transactions and deliver products/services</li>
                <li>Send you promotional materials and updates (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and unauthorized activity</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-4">Our website may use cookies and similar tracking technologies to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Enhance your browsing experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Remember your preferences</li>
                <li>Provide personalized content</li>
              </ul>
              <p className="mb-6">You can control cookie settings through your browser preferences.</p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Your Rights and Choices</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request information about how your data is processed</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mb-6">To exercise these rights, please contact us using the information provided below.</p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Third-Party Links</h2>
              <p className="mb-6">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Children's Privacy</h2>
              <p className="mb-6">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically for any updates.
              </p>

              <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Contact Information</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Monroe County Golf Carts</strong></p>
                <p className="mb-2">Email: info@monroegolfcarts.com</p>
                <p className="mb-2">Phone: 1-844-844-6638</p>
                <p className="mb-2">Serving Monroe County, Pennsylvania</p>
                <p>Website: monroegolfcarts.com</p>
              </div>

              <p className="mt-8 text-sm text-gray-600">
                This Privacy Policy was last updated on January 23, 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}