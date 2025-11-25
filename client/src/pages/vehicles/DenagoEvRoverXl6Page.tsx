import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvRoverXL6Image from "@assets/DENAGONEVROVERXL6_1751893047473_1753135231313.jpg";

export default function DenagoEvRoverXl6Page() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV ROVER XL6"
      brand="DENAGO"
      series="EV ROVER"
      price="$11,995"
      image={denagoEvRoverXL6Image}
      seats="6"
      range="50 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "Extended 6-Seat Configuration",
        "Premium Materials",
        "Enhanced Comfort",
        "Smart Technology",
        "Advanced Suspension",
        "Luxury Appointments",
        "Superior Build Quality",
        "Modern Design"
      ]}
      description="Extended 6-seat configuration with premium materials and enhanced comfort features. The DENAGO EV ROVER XL6 represents the pinnacle of family electric vehicle luxury in Indiana. Call 1-844-844-6638."
      tigoUrl="https://golfcartsofindiana.com/denago-ev/rover-xl6/"
    />
  );
}