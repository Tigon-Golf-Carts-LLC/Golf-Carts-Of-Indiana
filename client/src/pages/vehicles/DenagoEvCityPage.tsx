import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvCityImage from "@assets/DENAGONEVCITY_1751893047472_1753135231313.jpg";

export default function DenagoEvCityPage() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV CITY"
      brand="DENAGO"
      series="EV CITY"
      price="$15,000"
      image={denagoEvCityImage}
      seats="2"
      range="40 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "Street Legal Ready",
        "LED Lighting Package",
        "Premium Interior Design",
        "Urban Mobility Optimized",
        "Efficient Battery System",
        "Sleek Modern Styling",
        "Digital Display",
        "Comfortable Seating"
      ]}
      description="Urban mobility redefined with sleek design and efficient performance. The DENAGO EV CITY is built for street legal operation with premium features perfect for Monroe County's urban environments. Call 1-844-844-6638."
      tigoUrl="https://tigongolfcarts.com/denago-ev/city/"
    />
  );
}