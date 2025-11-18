import VehicleDetailPage from "@/components/VehicleDetailPage";
import evolutionCarrier6PlusImage from "@assets/EVOLUTIONCARRIER6PLUS_1751893115778_1753135231314.jpg";

export default function EvolutionCarrier6PlusPage() {
  return (
    <VehicleDetailPage
      vehicleName="EVOLUTION CARRIER 6 PLUS"
      brand="EVOLUTION"
      series="CARRIER"
      price="$9,595"
      image={evolutionCarrier6PlusImage}
      seats="6"
      range="38 miles"
      topSpeed="25 mph"
      driveType="Rear-Wheel Drive"
      features={[
        "6-Passenger Utility Vehicle",
        "Enhanced Cargo Capacity",
        "Work-Ready Features",
        "Durable Construction",
        "Heavy-Duty Frame",
        "Versatile Configuration",
        "Commercial Grade",
        "Reliable Power"
      ]}
      description="6-passenger utility vehicle with enhanced cargo capacity and work features. The EVOLUTION CARRIER 6 PLUS is designed for both passenger transport and utility work in Notre Dame communities. Call 1-844-844-6638."
      tigoUrl="https://tigongolfcarts.com/evolution/carrier/6-plus/"
    />
  );
}