import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvNomadXLImage from "@assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg";

export default function DenagoEvNomadXlPage() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV NOMAD XL"
      brand="DENAGO"
      series="EV NOMAD"
      price="$8,495"
      image={denagoEvNomadXLImage}
      seats="4"
      range="55 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "Extended Range",
        "Premium Off-Road Package",
        "Enhanced Cargo Space",
        "All-Weather Protection",
        "Superior Suspension",
        "Heavy-Duty Construction",
        "Advanced Battery System",
        "Premium Interior"
      ]}
      description="Extended range and premium off-road capabilities for serious adventurers. The DENAGO EV NOMAD XL offers enhanced cargo space and all-weather protection for Notre Dame expeditions. Call 1-844-844-6638."
      tigoUrl="https://tigongolfcarts.com/denago-ev/nomad-xl/"
    />
  );
}