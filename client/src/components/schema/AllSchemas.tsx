import WebsiteSchema from "./WebsiteSchema";
import BreadcrumbSchema from "./BreadcrumbSchema";
import SiteNavigationSchema from "./SiteNavigationSchema";
import ProductSchema from "./ProductSchema";
import ServiceSchema from "./ServiceSchema";
import LocalBusinessSchema from "./LocalBusinessSchema";
import ReviewSchema from "./ReviewSchema";
import PersonSchema from "./PersonSchema";
import PlaceSchema from "./PlaceSchema";
import OfferSchema from "./OfferSchema";
import AggregateRatingSchema from "./AggregateRatingSchema";
import ImageObjectSchema from "./ImageObjectSchema";
import OrganizationSchema from "../OrganizationSchema";
import LocationSchema from "../LocationSchema";
import VehicleSchemaOld from "../VehicleSchema";
import MenuSchema from "./MenuSchema";
import FAQSchema from "./FAQSchema";
import ContactPointSchema from "./ContactPointSchema";
import EventSchema from "./EventSchema";
import VideoObjectSchema from "./VideoObjectSchema";
import HowToSchema from "./HowToSchema";
import CollectionPageSchema from "./CollectionPageSchema";
import BrandSchema from "./BrandSchema";
import AutoDealerSchema from "./AutoDealerSchema";
import RentalCarAgencySchema from "./RentalCarAgencySchema";
import VehicleSchema from "./VehicleSchema";

interface AllSchemasProps {
  pageType: "home" | "about" | "contact" | "services" | "inventory" | "rentals" | "showroom" | "vehicle" | "location" | "location-rental" | "brand";
  pageData?: {
    title?: string;
    description?: string;
    url?: string;
    breadcrumbs?: Array<{ name: string; url: string }>;
    // Vehicle-specific data
    vehicleName?: string;
    vehicleBrand?: string;
    vehicleModel?: string;
    vehicleImage?: string;
    vehiclePrice?: string;
    vehicleFeatures?: string[];
    vehicleSpecs?: { [key: string]: string };
    // Location-specific data
    locationName?: string;
    locationType?: "Borough" | "Township";
    locationLatitude?: string;
    locationLongitude?: string;
    // Service-specific data
    serviceName?: string;
    serviceDescription?: string;
    serviceOffers?: Array<{
      price?: string;
      description?: string;
    }>;
    // Review data
    reviews?: Array<{
      author: string;
      reviewBody: string;
      reviewRating: number;
      datePublished: string;
      headline?: string;
    }>;
    // Person data (for about page)
    people?: Array<{
      name: string;
      jobTitle?: string;
      description?: string;
      image?: string;
    }>;
    // FAQ data
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
    // Menu data (for navigation)
    menuSections?: Array<{
      name: string;
      description: string;
      hasMenuItem: Array<{
        name: string;
        description: string;
        url: string;
        offers?: {
          price: string;
          priceCurrency: string;
        };
      }>;
    }>;
    // Event data
    events?: Array<{
      name: string;
      description: string;
      startDate: string;
      endDate?: string;
      location: {
        name: string;
        address: {
          streetAddress: string;
          addressLocality: string;
          addressRegion: string;
          postalCode: string;
          addressCountry: string;
        };
      };
    }>;
    // Brand data
    brandName?: string;
    brandDescription?: string;
    brandLogo?: string;
    brandProducts?: Array<{
      name: string;
      description: string;
      url: string;
      price?: string;
    }>;
    // Collection data (for inventory/listings)
    collectionItems?: Array<{
      name: string;
      url: string;
      description?: string;
      image?: string;
    }>;
  };
}

export default function AllSchemas({ pageType, pageData = {} }: AllSchemasProps) {
  const {
    title = "Monroe County Golf Carts",
    description = "Premier golf cart dealership in Monroe County, Pennsylvania",
    url = "https://monroegolfcarts.com",
    breadcrumbs = [{ name: "Home", url: "https://monroegolfcarts.com/" }],
    vehicleName,
    vehicleBrand,
    vehicleModel,
    vehicleImage,
    vehiclePrice,
    vehicleFeatures = [],
    vehicleSpecs = {},
    locationName,
    locationType,
    locationLatitude,
    locationLongitude,
    serviceName,
    serviceDescription,
    serviceOffers = [],
    reviews = [],
    people = [],
    faqs = [],
    menuSections = [],
    events = [],
    brandName,
    brandDescription,
    brandLogo,
    brandProducts = [],
    collectionItems = []
  } = pageData;

  return (
    <>
      {/* Core schemas for all pages */}
      <WebsiteSchema url={url} name={title} description={description} />
      <BreadcrumbSchema items={breadcrumbs} />
      <SiteNavigationSchema />
      <LocalBusinessSchema />
      <OrganizationSchema pageType={pageType === "home" ? "home" : pageType === "about" ? "about" : pageType === "contact" ? "contact" : pageType === "services" ? "services" : "home"} />
      
      {/* Auto Dealer Schema for all pages */}
      <AutoDealerSchema
        name="Monroe County Golf Carts"
        description="Premier electric golf cart dealership serving Monroe County, Pennsylvania with sales, service, rentals, and financing"
        url="https://monroegolfcarts.com"
        address={{
          streetAddress: "Various Locations",
          addressLocality: "Monroe County",
          addressRegion: "PA",
          postalCode: "18101",
          addressCountry: "US"
        }}
        telephone="1-844-844-6638"
        email="info@monroegolfcarts.com"
        brands={["DENAGO", "EVOLUTION"]}
        services={["Golf Cart Sales", "Golf Cart Service", "Golf Cart Rentals", "Financing", "Parts & Accessories"]}
        openingHours={[
          { dayOfWeek: "Monday", opens: "09:00", closes: "18:00" },
          { dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
          { dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
          { dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
          { dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
          { dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
          { dayOfWeek: "Sunday", opens: "12:00", closes: "16:00" }
        ]}
      />
      
      {/* Contact Point Schema */}
      <ContactPointSchema
        contactType="customer service"
        telephone="1-844-844-6638"
        email="info@monroegolfcarts.com"
        areaServed="Monroe County, Pennsylvania"
        availableLanguage={["English"]}
        hoursAvailable={[
          { dayOfWeek: "Monday", opens: "09:00", closes: "18:00" },
          { dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
          { dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
          { dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
          { dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
          { dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" },
          { dayOfWeek: "Sunday", opens: "12:00", closes: "16:00" }
        ]}
      />
      
      {/* Menu Schema for site navigation */}
      <MenuSchema
        name="Monroe County Golf Carts Navigation"
        description="Main website navigation menu"
        hasMenuSection={[
          {
            name: "Products",
            description: "Golf cart inventory and vehicles",
            hasMenuItem: [
              { name: "Inventory", description: "Browse all golf carts", url: `${url}/inventory` },
              { name: "DENAGO Vehicles", description: "DENAGO golf cart lineup", url: `${url}/denago` },
              { name: "EVOLUTION Vehicles", description: "EVOLUTION golf cart lineup", url: `${url}/evolution` }
            ]
          },
          {
            name: "Services",
            description: "Golf cart services and support",
            hasMenuItem: [
              { name: "Sales", description: "New golf cart sales", url: `${url}/inventory` },
              { name: "Service & Repair", description: "Professional maintenance", url: `${url}/services` },
              { name: "Rentals", description: "Golf cart rental services", url: `${url}/rentals`, offers: { price: "245", priceCurrency: "USD" } }
            ]
          },
          {
            name: "Information",
            description: "Company and location information",
            hasMenuItem: [
              { name: "About Us", description: "Learn about our company", url: `${url}/about` },
              { name: "Contact", description: "Get in touch with us", url: `${url}/contact` },
              { name: "Showroom", description: "Visit our locations", url: `${url}/showroom` }
            ]
          }
        ]}
      />
      
      {/* Page-specific schemas */}
      {pageType === "vehicle" && vehicleName && vehicleBrand && vehicleModel && vehicleImage && (
        <>
          <ProductSchema
            name={vehicleName}
            brand={vehicleBrand}
            model={vehicleModel}
            description={`${vehicleBrand} ${vehicleModel} electric golf cart available at Monroe County Golf Carts`}
            image={vehicleImage}
            price={vehiclePrice}
            features={vehicleFeatures}
            specifications={vehicleSpecs}
            url={url}
          />
          <VehicleSchema
            name={vehicleName}
            brand={vehicleBrand}
            model={vehicleModel || "Standard"}
            description={`${vehicleBrand} ${vehicleModel} electric golf cart with premium features and reliable performance`}
            image={`/attached_assets/${vehicleImage}`}
            url={url}
            price={vehiclePrice || "0"}
            availability="InStock"
            condition="NewCondition"
            fuelType="Electric"
            numberOfSeats={parseInt(vehicleSpecs["Seating Capacity"] || "4")}
            vehicleEngine={{
              name: "Electric Motor",
              enginePower: vehicleSpecs["Motor Type"] || "Electric Motor"
            }}
            features={vehicleFeatures}
            manufacturer={{
              name: vehicleBrand,
              url: `https://monroegolfcarts.com/${vehicleBrand.toLowerCase()}`
            }}
          />
          <VehicleSchemaOld
            name={vehicleName}
            brand={vehicleBrand}
            image={vehicleImage}
            description={`${vehicleBrand} ${vehicleModel} electric golf cart`}
            url={url}
            features={vehicleFeatures}
          />
          <OfferSchema
            itemOffered={{
              name: vehicleName,
              type: "Product",
              description: `${vehicleBrand} ${vehicleModel} electric golf cart`,
              category: "Electric Golf Cart"
            }}
            price={vehiclePrice}
          />
          <ImageObjectSchema
            url={`/attached_assets/${vehicleImage}`}
            name={`${vehicleName} Image`}
            description={`Professional photo of ${vehicleName} golf cart`}
            width={800}
            height={600}
          />
          <BrandSchema
            name={vehicleBrand}
            description={`${vehicleBrand} electric golf carts available at Monroe County Golf Carts`}
            url={`https://monroegolfcarts.com/${vehicleBrand.toLowerCase()}`}
            manufacturer={vehicleBrand}
            products={[{
              name: vehicleName,
              description: `${vehicleBrand} ${vehicleModel} electric golf cart`,
              url: url,
              price: vehiclePrice
            }]}
          />
        </>
      )}
      
      {pageType === "inventory" && (
        <>
          <CollectionPageSchema
            name="Golf Cart Inventory - Monroe County Golf Carts"
            description="Browse our complete inventory of electric golf carts from DENAGO and EVOLUTION"
            url={url}
            mainEntity={collectionItems.length > 0 ? collectionItems : [
              { name: "DENAGO Electric Golf Carts", url: `${url}/denago`, description: "Premium DENAGO electric vehicles", image: "/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg" },
              { name: "EVOLUTION Golf Carts", url: `${url}/evolution`, description: "Reliable EVOLUTION electric vehicles", image: "/attached_assets/EVOLUTIONCLASSIC4PLUS_1751893115779_1753135231314.jpg" }
            ]}
            breadcrumb={breadcrumbs}
          />
          <FAQSchema
            faqs={[
              {
                question: "What types of golf carts do you sell?",
                answer: "We sell premium electric golf carts from DENAGO and EVOLUTION, including 2-seater, 4-seater, and 6-seater models with various features and capabilities."
              },
              {
                question: "Do you offer financing for golf cart purchases?",
                answer: "Yes, we offer competitive financing options with flexible terms to help you purchase your ideal golf cart."
              },
              {
                question: "What is the range of your electric golf carts?",
                answer: "Our electric golf carts typically have a range of 25-60 miles per charge, depending on the model and battery configuration."
              },
              {
                question: "Do you provide delivery service?",
                answer: "Yes, we provide delivery service throughout Monroe County and surrounding areas in Pennsylvania."
              }
            ]}
          />
        </>
      )}
      
      {pageType === "location" && locationName && locationType && (
        <>
          <LocationSchema
            municipalityName={locationName}
            municipalityType={locationType}
            pageType="location"
            latitude={locationLatitude}
            longitude={locationLongitude}
          />
          <PlaceSchema
            name={`${locationName} ${locationType}`}
            description={`Golf cart sales and service in ${locationName} ${locationType}, Monroe County, Pennsylvania`}
            address={{
              addressLocality: locationName,
              addressRegion: "PA",
              addressCountry: "US"
            }}
            geo={locationLatitude && locationLongitude ? {
              latitude: locationLatitude,
              longitude: locationLongitude
            } : undefined}
            telephone="1-844-844-6638"
            url={url}
            containedInPlace={{
              name: "Monroe County",
              type: "AdministrativeArea"
            }}
          />
          <ServiceSchema
            serviceName={`Golf Cart Services in ${locationName} ${locationType}`}
            description={`Professional golf cart sales, service, and rentals serving ${locationName} ${locationType}, Monroe County, PA`}
            areaServed={`${locationName} ${locationType}, Monroe County, PA`}
          />
          <AutoDealerSchema
            name={`Monroe County Golf Carts - ${locationName} Service`}
            description={`Premier golf cart dealership serving ${locationName} ${locationType} and surrounding areas`}
            url={url}
            address={{
              streetAddress: "Service Area",
              addressLocality: locationName,
              addressRegion: "PA",
              postalCode: "18000",
              addressCountry: "US"
            }}
            telephone="1-844-844-6638"
            email="info@monroegolfcarts.com"
            brands={["DENAGO", "EVOLUTION"]}
            services={["Golf Cart Sales", "Service & Repair", "Rentals", "Parts & Accessories"]}
          />
        </>
      )}
      
      {pageType === "location-rental" && locationName && locationType && (
        <>
          <LocationSchema
            municipalityName={locationName}
            municipalityType={locationType}
            pageType="rental"
            latitude={locationLatitude}
            longitude={locationLongitude}
          />
          <RentalCarAgencySchema
            name={`Monroe County Golf Carts - ${locationName} Rentals`}
            description={`Professional golf cart rental services in ${locationName} ${locationType}, Monroe County, Pennsylvania`}
            url={url}
            address={{
              streetAddress: "Service Area",
              addressLocality: locationName,
              addressRegion: "PA",
              postalCode: "18000",
              addressCountry: "US"
            }}
            telephone="1-844-844-6638"
            email="info@monroegolfcarts.com"
            areaServed={`${locationName} ${locationType}, Monroe County, PA`}
            vehicleTypes={["4-Seater Golf Cart", "6-Seater Golf Cart", "Utility Golf Cart"]}
            rentalPolicies={[
              { type: "Daily Rental", description: "4-Seater from $245/day, 6-Seater from $295/day, Utility from $245/day" },
              { type: "Delivery", description: "Professional delivery within Monroe County" },
              { type: "Insurance", description: "Full coverage included with all rentals" }
            ]}
          />
          <ServiceSchema
            serviceName={`Golf Cart Rentals in ${locationName} ${locationType}`}
            description={`Professional golf cart rental services in ${locationName} ${locationType}, Monroe County, Pennsylvania`}
            areaServed={`${locationName} ${locationType}, Monroe County, PA`}
            offers={[
              { price: "$245", description: "4-Seater Golf Cart Daily Rental" },
              { price: "$295", description: "6-Seater Golf Cart Daily Rental" },
              { price: "$245", description: "Utility Golf Cart Daily Rental" }
            ]}
          />
          <OfferSchema
            itemOffered={{
              name: "Golf Cart Rental",
              type: "Service",
              description: `Golf cart rental service in ${locationName} ${locationType}`,
              category: "Rental Service"
            }}
            priceSpecification={[
              { type: "UnitPriceSpecification", price: "245", priceCurrency: "USD", description: "4-Seater Daily Rental" },
              { type: "UnitPriceSpecification", price: "295", priceCurrency: "USD", description: "6-Seater Daily Rental" },
              { type: "UnitPriceSpecification", price: "245", priceCurrency: "USD", description: "Utility Daily Rental" }
            ]}
          />
          <FAQSchema
            faqs={[
              {
                question: `Do you deliver golf cart rentals to ${locationName}?`,
                answer: `Yes, we provide professional delivery of rental golf carts throughout ${locationName} ${locationType} and surrounding areas in Monroe County, Pennsylvania.`
              },
              {
                question: "What types of golf carts are available for rent?",
                answer: "We offer 4-seater, 6-seater, and utility golf carts for daily, weekly, and monthly rentals with full insurance coverage."
              },
              {
                question: "How much does it cost to rent a golf cart?",
                answer: "4-seater and utility carts start at $245/day, 6-seater carts start at $295/day. Weekly and monthly rates available with significant savings."
              },
              {
                question: "Is insurance included with rental golf carts?",
                answer: "Yes, full insurance coverage is included with all rental golf carts at no additional cost."
              }
            ]}
          />
        </>
      )}
      
      {pageType === "services" && (
        <>
          <ServiceSchema
            serviceName="Golf Cart Services"
            description="Comprehensive golf cart sales, service, repair, and maintenance in Monroe County, Pennsylvania"
            offers={serviceOffers}
          />
          <OfferSchema
            itemOffered={{
              name: "Golf Cart Service & Repair",
              type: "Service",
              description: "Professional golf cart maintenance and repair services",
              category: "Automotive Service"
            }}
          />
        </>
      )}
      
      {pageType === "inventory" && (
        <>
          <ServiceSchema
            serviceName="Golf Cart Sales"
            description="New and used electric golf cart sales in Monroe County, Pennsylvania"
          />
          <OfferSchema
            itemOffered={{
              name: "Electric Golf Carts",
              type: "Product",
              description: "DENAGO and Evolution electric golf carts for sale",
              category: "Electric Golf Cart"
            }}
          />
        </>
      )}
      
      {pageType === "rentals" && (
        <>
          <ServiceSchema
            serviceName="Golf Cart Rentals"
            description="Golf cart rental services throughout Monroe County, Pennsylvania"
            offers={[
              { price: "$245", description: "4-Seater Golf Cart Daily Rental" },
              { price: "$295", description: "6-Seater Golf Cart Daily Rental" },
              { price: "$245", description: "Utility Golf Cart Daily Rental" }
            ]}
          />
          <RentalCarAgencySchema
            name="Monroe County Golf Carts - Rental Services"
            description="Professional golf cart rental services throughout Monroe County, Pennsylvania"
            url="https://monroegolfcarts.com/rentals"
            address={{
              streetAddress: "Service Area",
              addressLocality: "Monroe County",
              addressRegion: "PA",
              postalCode: "18101",
              addressCountry: "US"
            }}
            telephone="1-844-844-6638"
            email="info@monroegolfcarts.com"
            areaServed="Monroe County, Pennsylvania"
            vehicleTypes={["4-Seater Golf Cart", "6-Seater Golf Cart", "Utility Golf Cart"]}
            rentalPolicies={[
              { type: "Daily Rental", description: "4-Seater and Utility from $245/day, 6-Seater from $295/day" },
              { type: "Weekly Rental", description: "Save with weekly rates starting at $1,400/week" },
              { type: "Monthly Rental", description: "Best value with monthly rates starting at $4,200/month" },
              { type: "Delivery", description: "Professional delivery throughout Monroe County" },
              { type: "Insurance", description: "Full coverage included with all rentals" }
            ]}
          />
          <OfferSchema
            itemOffered={{
              name: "Golf Cart Rental",
              type: "Service",
              description: "Daily, weekly, and monthly golf cart rentals in Monroe County",
              category: "Rental Service"
            }}
            priceSpecification={[
              { type: "UnitPriceSpecification", price: "245", priceCurrency: "USD", description: "4-Seater Daily Rental" },
              { type: "UnitPriceSpecification", price: "295", priceCurrency: "USD", description: "6-Seater Daily Rental" },
              { type: "UnitPriceSpecification", price: "245", priceCurrency: "USD", description: "Utility Daily Rental" }
            ]}
          />
        </>
      )}
      
      {pageType === "about" && people.length > 0 && (
        <>
          {people.map((person, index) => (
            <PersonSchema
              key={index}
              name={person.name}
              jobTitle={person.jobTitle}
              description={person.description}
              image={person.image}
            />
          ))}
        </>
      )}
      
      {reviews.length > 0 && (
        <>
          <ReviewSchema
            itemReviewed={{
              name: title,
              type: pageType === "vehicle" ? "Product" : "LocalBusiness",
              url: url
            }}
            reviews={reviews}
          />
          <AggregateRatingSchema
            itemReviewed={{
              name: title,
              type: pageType === "vehicle" ? "Product" : "LocalBusiness",
              url: url
            }}
            ratingValue="4.7"
            reviewCount={reviews.length.toString()}
          />
        </>
      )}
      
      {/* Always include main company image */}
      <ImageObjectSchema
        url="/attached_assets/Monroe County Golf Carts (1)_1756141613254.png"
        name="Monroe County Golf Carts Logo"
        description="Monroe County Golf Carts company logo featuring professional golf cart branding"
        width={400}
        height={400}
      />
      
      {/* Additional comprehensive schemas */}
      {faqs.length > 0 && (
        <FAQSchema faqs={faqs} />
      )}
      
      {events.length > 0 && (
        <>
          {events.map((event, index) => (
            <EventSchema
              key={index}
              name={event.name}
              description={event.description}
              startDate={event.startDate}
              endDate={event.endDate}
              location={event.location}
              organizer={{
                name: "Monroe County Golf Carts",
                url: "https://monroegolfcarts.com"
              }}
            />
          ))}
        </>
      )}
      
      {pageType === "brand" && brandName && (
        <BrandSchema
          name={brandName}
          description={brandDescription || `${brandName} electric golf carts available at Monroe County Golf Carts`}
          url={url}
          logo={brandLogo}
          manufacturer={brandName}
          products={brandProducts}
        />
      )}
      
      {pageType === "home" && (
        <>
          <HowToSchema
            name="How to Buy a Golf Cart from Monroe County Golf Carts"
            description="Step-by-step guide to purchasing your perfect electric golf cart"
            steps={[
              {
                name: "Browse Inventory",
                text: "Explore our complete selection of DENAGO and EVOLUTION electric golf carts online or visit our showroom to see them in person.",
                url: `${url}/inventory`
              },
              {
                name: "Schedule Test Drive",
                text: "Contact us to schedule a test drive and experience the performance and features of your preferred golf cart model.",
                url: `${url}/contact`
              },
              {
                name: "Discuss Financing",
                text: "Our team will help you explore financing options and payment plans that fit your budget and needs.",
                url: `${url}/contact`
              },
              {
                name: "Complete Purchase",
                text: "Finalize your purchase with our professional team and arrange delivery or pickup of your new golf cart.",
                url: `${url}/contact`
              }
            ]}
          />
          {/* VideoObjectSchema temporarily disabled due to props issue */}
          {/* <VideoObjectSchema
            name="Monroe County Golf Carts - Electric Vehicle Showcase"
            description="Watch our showcase of premium electric golf carts from DENAGO and EVOLUTION brands"
            thumbnailUrl="/attached_assets/image_1753728346042.png"
            embedUrl={`${url}#video-showcase`}
            duration="PT3M45S"
            uploadDate="2024-12-01"
            publisher={{
              name: "Monroe County Golf Carts",
              logo: "/attached_assets/Monroe County Golf Carts (1)_1756141613254.png"
            }}
          /> */}
        </>
      )}
    </>
  );
}