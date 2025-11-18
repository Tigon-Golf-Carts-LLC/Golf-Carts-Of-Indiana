import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvRoverXXLImage from "@assets/DENAGONEVROVERXXL_1751893047473_1753135231313.jpg";

export default function DenagoEvRoverXxlPage() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV ROVER XXL"
      brand="DENAGO"
      series="EV ROVER"
      price="$11,995"
      image={denagoEvRoverXXLImage}
      seats="8"
      range="60 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "Maximum Capacity",
        "Ultra-Premium Interior",
        "Advanced Technology Suite",
        "Superior Performance",
        "Extended Range Battery",
        "Premium Entertainment",
        "Luxury Seating",
        "State-of-Art Features"
      ]}
      description="Maximum capacity with ultra-premium interior and advanced technology suite. The DENAGO EV ROVER XXL is the ultimate in electric vehicle luxury, accommodating 8 passengers with superior performance in Notre Dame. Call 1-844-844-6638."
      tigoUrl="https://tigongolfcarts.com/denago-ev/rover-xxl/"
    />
  );
}