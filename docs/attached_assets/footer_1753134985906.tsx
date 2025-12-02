import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NJ Golf Carts</h3>
            <p className="text-gray-400 mb-4">
              New Jersey's premier golf cart dealership serving customers across the state with quality carts and expert service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/inventory" className="text-gray-400 hover:text-white">Inventory</Link></li>
              <li><Link href="/rentals" className="text-gray-400 hover:text-white">Rentals</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/financing" className="text-gray-400 hover:text-white">Financing</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/inventory" className="text-gray-400 hover:text-white">New Golf Carts</Link></li>
              <li><Link href="/rentals" className="text-gray-400 hover:text-white">Golf Cart Rentals</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Service & Repair</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Parts & Accessories</Link></li>
              <li><Link href="/financing" className="text-gray-400 hover:text-white">Financing Options</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <div>Phone: 1-844-844-6638</div>
              <div>Email: info@njgolfcarts.com</div>
              <div>
                <strong className="text-white">Hours:</strong><br />
                Mon-Fri: 9AM-5PM<br />
                Sat: 9AM-5PM<br />
                Sun: Closed
              </div>
            </div>
          </div>
        </div>

        {/* County Links Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <h4 className="font-semibold mb-4 text-center">Golf Carts by County</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 text-sm">
            <Link href="/atlantic-county-golf-carts" className="text-gray-400 hover:text-white text-center">Atlantic County</Link>
            <Link href="/bergen-county-golf-carts" className="text-gray-400 hover:text-white text-center">Bergen County</Link>
            <Link href="/burlington-county-golf-carts" className="text-gray-400 hover:text-white text-center">Burlington County</Link>
            <Link href="/camden-county-golf-carts" className="text-gray-400 hover:text-white text-center">Camden County</Link>
            <Link href="/cape-may-county-golf-carts" className="text-gray-400 hover:text-white text-center">Cape May County</Link>
            <Link href="/cumberland-county-golf-carts" className="text-gray-400 hover:text-white text-center">Cumberland County</Link>
            <Link href="/essex-county-golf-carts" className="text-gray-400 hover:text-white text-center">Essex County</Link>
            <Link href="/gloucester-county-golf-carts" className="text-gray-400 hover:text-white text-center">Gloucester County</Link>
            <Link href="/hudson-county-golf-carts" className="text-gray-400 hover:text-white text-center">Hudson County</Link>
            <Link href="/hunterdon-county-golf-carts" className="text-gray-400 hover:text-white text-center">Hunterdon County</Link>
            <Link href="/mercer-county-golf-carts" className="text-gray-400 hover:text-white text-center">Mercer County</Link>
            <Link href="/middlesex-county-golf-carts" className="text-gray-400 hover:text-white text-center">Middlesex County</Link>
            <Link href="/monmouth-county-golf-carts" className="text-gray-400 hover:text-white text-center">Monmouth County</Link>
            <Link href="/morris-county-golf-carts" className="text-gray-400 hover:text-white text-center">Morris County</Link>
            <Link href="/ocean-county-golf-carts" className="text-gray-400 hover:text-white text-center">Ocean County</Link>
            <Link href="/passaic-county-golf-carts" className="text-gray-400 hover:text-white text-center">Passaic County</Link>
            <Link href="/salem-county-golf-carts" className="text-gray-400 hover:text-white text-center">Salem County</Link>
            <Link href="/somerset-county-golf-carts" className="text-gray-400 hover:text-white text-center">Somerset County</Link>
            <Link href="/sussex-county-golf-carts" className="text-gray-400 hover:text-white text-center">Sussex County</Link>
            <Link href="/union-county-golf-carts" className="text-gray-400 hover:text-white text-center">Union County</Link>
            <Link href="/warren-county-golf-carts" className="text-gray-400 hover:text-white text-center">Warren County</Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NJ Golf Carts. All rights reserved. | <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></p>
          <p className="mt-2">
            <a href="https://tigongolfcarts.com/new-jersey/" target="_blank" rel="dofollow" className="hover:text-white">New Jersey Golf Carts</a> - Serving all 21 counties in New Jersey with premium golf carts and exceptional service.
          </p>
        </div>
      </div>
    </footer>
  );
}
