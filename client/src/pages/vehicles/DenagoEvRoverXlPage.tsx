import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvRoverXLImage from "@assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg";

export default function DenagoEvRoverXlPage() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV ROVER XL"
      brand="DENAGO"
      series="EV ROVER"
      price="$9,995"
      image={denagoEvRoverXLImage}
      seats="6"
      range="50 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "6-Passenger Seating",
        "Luxury Interior",
        "Advanced Safety Features",
        "Premium Sound System",
        "Climate Control",
        "Premium Materials",
        "Enhanced Comfort",
        "Smart Technology"
      ]}
      description="Luxury family transportation with maximum comfort and capacity. The DENAGO EV ROVER XL features 6-passenger seating with premium interior and advanced safety systems for Notre Dame families. Call 1-844-844-6638."
      tigoUrl="https://tigongolfcarts.com/denago-ev/rover-xl/"
    />
  );
}