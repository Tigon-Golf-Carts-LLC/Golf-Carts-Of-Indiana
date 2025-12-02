import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mike Johnson",
      location: "Princeton, NJ",
      rating: 5,
      text: "Exceptional service and quality! The team at NJ Golf Carts helped me find the perfect cart for my needs. The financing process was smooth and the delivery was on time.",
      initials: "MJ",
    },
    {
      name: "Sarah Davis",
      location: "Morristown, NJ",
      rating: 5,
      text: "Best golf cart dealership in New Jersey! Their custom work is amazing and the prices are very competitive. I've recommended them to all my friends at the golf club.",
      initials: "SD",
    },
    {
      name: "Robert Thompson",
      location: "Edison, NJ",
      rating: 5,
      text: "Professional, knowledgeable, and honest. They fixed my golf cart quickly and at a fair price. Will definitely be coming back for future needs.",
      initials: "RT",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-neutral-light p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{testimonial.rating}/5 stars</span>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-medium">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-neutral-dark">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
