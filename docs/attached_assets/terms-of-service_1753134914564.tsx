import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Terms of Service | NJ Golf Carts"
        description="Read NJ Golf Carts terms of service to understand the conditions for using our website and services."
      />
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-neutral-dark mb-8">
              Terms of Service
            </h1>
            
            <div className="text-gray-600 mb-6">
              <p className="mb-4">
                <strong>Effective Date:</strong> January 14, 2025
              </p>
              <p className="mb-4">
                <strong>Last Updated:</strong> January 14, 2025
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    By accessing and using the NJ Golf Carts website and services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
                  2. Use of Services
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our services are provided for legitimate business purposes. You agree to use our services only for lawful purposes and in accordance with these terms.
                  </p>
                  <p>
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the service for any unlawful purpose</li>
                    <li>Interfere with or disrupt the service</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Transmit any harmful or malicious content</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
                  3. Product Information and Pricing
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We strive to provide accurate product information and pricing. However, errors may occur. We reserve the right to correct any errors and update information without prior notice.
                  </p>
                  <p>
                    All prices are subject to change without notice. Final pricing will be confirmed at the time of purchase.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
                  4. Orders and Payment
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion.
                  </p>
                  <p>
                    Payment terms will be established at the time of purchase. We accept various payment methods and financing options as available.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
                  5. Warranties and Disclaimers
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Golf carts sold by NJ Golf Carts come with manufacturer warranties. Specific warranty terms vary by manufacturer and model.
                  </p>
                  <p>
                    Our services are provided "as is" without warranties of any kind, either express or implied.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
                  6. Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    In no event shall NJ Golf Carts be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
                  7. Intellectual Property
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    All content on this website, including text, graphics, logos, and images, is the property of NJ Golf Carts or its licensors and is protected by copyright and other intellectual property laws.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
                  8. Governing Law
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law provisions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
                  9. Changes to Terms
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">
                  10. Contact Information
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    If you have any questions about these terms of service, please contact us:
                  </p>
                  <ul className="list-none space-y-2">
                    <li><strong>Phone:</strong> <a href="tel:1-844-844-6638" className="text-primary hover:underline">1-844-844-6638</a></li>
                    <li><strong>Email:</strong> <a href="mailto:info@njgolfcarts.com" className="text-primary hover:underline">info@njgolfcarts.com</a></li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}