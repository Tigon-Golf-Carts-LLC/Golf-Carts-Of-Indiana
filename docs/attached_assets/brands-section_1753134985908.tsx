export default function BrandsSection() {
  const brands = [
    {
      name: "Club Car",
      description: "Premium golf carts with advanced technology"
    },
    {
      name: "EZ-GO", 
      description: "Reliable and efficient golf cart solutions"
    },
    {
      name: "Denago",
      description: "High-quality performance golf carts"
    },
    {
      name: "Evolution",
      description: "Luxury golf carts with premium features"
    },
    {
      name: "Tomberlin",
      description: "Street-legal LSV and golf cart options"
    },
    {
      name: "Swift EV",
      description: "Electric vehicle innovation"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            New Jersey Golf Cart Dealerships for Top Brands
          </h2>
          <p className="text-lg text-gray-600">
            We carry the most trusted names in golf cart manufacturing
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-gray-700">{brand.name}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{brand.name}</h3>
              <p className="text-sm text-gray-600">{brand.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-8">
            As an authorized dealer, we provide genuine parts, factory warranties, and certified service for all major brands.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center text-green-600 font-medium">
              <span className="mr-1">✓</span>
              <span>Factory Warranties</span>
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <span className="mr-1">✓</span>
              <span>Genuine Parts</span>
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <span className="mr-1">✓</span>
              <span>Certified Service</span>
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <span className="mr-1">✓</span>
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}