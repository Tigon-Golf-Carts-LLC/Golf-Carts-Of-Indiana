import { Link } from "wouter";
import { NEW_MONROE_COUNTY_MUNICIPALITIES } from "@/data/newMonroeCountyMunicipalities";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="space-y-8 mb-8">
          {/* Company Description */}
          <div className="md:hidden">
            <p className="text-gray-600 text-sm leading-relaxed">
              Notre Dame's premier golf cart dealership serving customers across 
              the region with quality carts and expert service.
            </p>
          </div>

          {/* Mobile: Navigation and Policies side by side (50% each) */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {/* Navigation Links */}
            <div>
              <h4 className="text-gray-900 font-semibold text-sm mb-2">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">Home</Link></li>
                <li><Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm">Inventory</Link></li>
                <li><Link href="/rentals" className="text-gray-600 hover:text-gray-900 text-sm">Rentals</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900 text-sm">Services</Link></li>
                <li><a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm">Financing</a></li>
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Contact</Link></li>
                <li><Link href="/evolution" className="text-gray-600 hover:text-gray-900 text-sm">Evolution Golf Carts</Link></li>
                <li><Link href="/denago" className="text-gray-600 hover:text-gray-900 text-sm">Denago Golf Carts</Link></li>
              </ul>
            </div>

            {/* Main Policies */}
            <div>
              <h4 className="text-gray-900 font-semibold text-sm mb-2">Policies</h4>
              <ul className="space-y-2">
                <li><Link href="/policies/terms-conditions" className="text-gray-600 hover:text-gray-900 text-sm">Terms & Conditions</Link></li>
                <li><Link href="/policies/return-policy" className="text-gray-600 hover:text-gray-900 text-sm">Return Policy</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</Link></li>
                <li><Link href="/policies/delivery-policy" className="text-gray-600 hover:text-gray-900 text-sm">Delivery Policy</Link></li>
                <li><Link href="/policies/rental-policy" className="text-gray-600 hover:text-gray-900 text-sm">Rental Policy</Link></li>
                <li><Link href="/policies/ethics-policy" className="text-gray-600 hover:text-gray-900 text-sm">Ethics Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Mobile: Contact Info */}
          <div className="md:hidden">
            <div className="space-y-2">
              <p className="text-gray-900 font-semibold text-sm">Phone: <a href="tel:1-844-844-6638" className="hover:text-blue-600">1-844-844-6638</a></p>
              <p className="text-gray-600 text-sm">Email: info@notredamegolfcarts.com</p>
              <div className="text-gray-600 text-sm">
                <p>Mon-Fri: 9AM-5PM</p>
                <p>Sat: 9AM-5PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Desktop: 6 column layout for comprehensive policies */}
          <div className="hidden md:grid md:grid-cols-6 gap-6">
            {/* Company Description */}
            <div className="md:col-span-1">
              <p className="text-gray-600 text-sm leading-relaxed">
                Notre Dame's premier golf cart dealership serving customers across 
                the region with quality carts and expert service.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-1">
              <h4 className="text-gray-900 font-semibold text-sm mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">Home</Link></li>
                <li><Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm">Inventory</Link></li>
                <li><Link href="/rentals" className="text-gray-600 hover:text-gray-900 text-sm">Rentals</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900 text-sm">Services</Link></li>
                <li><a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm">Financing</a></li>
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Contact</Link></li>
                <li><Link href="/evolution" className="text-gray-600 hover:text-gray-900 text-sm">Evolution</Link></li>
                <li><Link href="/denago" className="text-gray-600 hover:text-gray-900 text-sm">Denago</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div className="md:col-span-1">
              <h4 className="text-gray-900 font-semibold text-sm mb-3">POLICIES</h4>
              <ul className="space-y-2">
                <li><Link href="/policies/terms-conditions" className="text-gray-600 hover:text-gray-900 text-sm">Terms & Conditions</Link></li>
                <li><Link href="/policies/return-policy" className="text-gray-600 hover:text-gray-900 text-sm">Return Policy</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Service Policies */}
            <div className="md:col-span-1">
              <h4 className="text-gray-900 font-semibold text-sm mb-3">SERVICE POLICIES</h4>
              <ul className="space-y-2">
                <li><Link href="/policies/delivery-policy" className="text-gray-600 hover:text-gray-900 text-sm">Delivery Policy</Link></li>
                <li><Link href="/policies/rental-policy" className="text-gray-600 hover:text-gray-900 text-sm">Rental Policy</Link></li>
                <li><Link href="/policies/storage-policy" className="text-gray-600 hover:text-gray-900 text-sm">Storage Policy</Link></li>
              </ul>
            </div>

            {/* Content Policies */}
            <div className="md:col-span-1">
              <h4 className="text-gray-900 font-semibold text-sm mb-3">CONTENT POLICIES</h4>
              <ul className="space-y-2">
                <li><Link href="/policies/publishing-policy" className="text-gray-600 hover:text-gray-900 text-sm">Publishing Policy</Link></li>
                <li><Link href="/policies/feedback-policy" className="text-gray-600 hover:text-gray-900 text-sm">Feedback Policy</Link></li>
                <li><Link href="/policies/corrections-policy" className="text-gray-600 hover:text-gray-900 text-sm">Corrections Policy</Link></li>
              </ul>
            </div>

            {/* Work Policies & Contact */}
            <div className="md:col-span-1">
              <h4 className="text-gray-900 font-semibold text-sm mb-3">WORK POLICIES</h4>
              <ul className="space-y-2 mb-4">
                <li><Link href="/policies/diversity-policy" className="text-gray-600 hover:text-gray-900 text-sm">Diversity Policy</Link></li>
                <li><Link href="/policies/ethics-policy" className="text-gray-600 hover:text-gray-900 text-sm">Ethics Policy</Link></li>
                <li><Link href="/policies/staffing-report" className="text-gray-600 hover:text-gray-900 text-sm">Staffing Report</Link></li>
              </ul>
              <div className="space-y-2">
                <p className="text-gray-900 font-semibold text-sm">Phone: <a href="tel:1-844-844-6638" className="hover:text-blue-600">1-844-844-6638</a></p>
                <p className="text-gray-600 text-sm">Email: info@notredamegolfcarts.com</p>
                <div className="text-gray-600 text-sm">
                  <p>Mon-Fri: 9AM-5PM</p>
                  <p>Sat: 9AM-5PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Towns Served - Notre Dame Area */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
            Notre Dame Area Locations We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            {NEW_MONROE_COUNTY_MUNICIPALITIES.map((municipality) => (
              <Link 
                key={municipality.slug}
                href={municipality.url} 
                className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                {municipality.name} {municipality.type} Golf Carts
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © 2025 Notredame Golf Carts. All rights reserved. | 
              <Link href="/privacy-policy" className="hover:text-gray-900 ml-1">Privacy Policy</Link> | 
              <Link href="/terms-of-service" className="hover:text-gray-900 ml-1">Terms of Service</Link>
            </div>
            <div className="text-gray-600 text-sm">
              Notredame Golf Carts - Serving Notre Dame locations with premium golf carts and exceptional service.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}