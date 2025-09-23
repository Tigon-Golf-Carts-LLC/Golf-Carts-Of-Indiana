import VehicleDetailPage from "@/components/VehicleDetailPage";
import evolutionClassic4PlusImage from "@assets/EVOLUTIONCLASSIC4PLUS_1751893115779_1753135231314.jpg";

export default function EvolutionClassic4PlusPage() {
  return (
    <VehicleDetailPage
      vehicleName="EVOLUTION CLASSIC 4 PLUS"
      brand="EVOLUTION"
      series="CLASSIC"
      price="$6,995"
      image={evolutionClassic4PlusImage}
      seats="4"
      range="35 miles"
      topSpeed="25 mph"
      driveType="Rear-Wheel Drive"
      features={[
        "Classic Golf Cart Design",
        "Reliable Performance",
        "Traditional Styling",
        "Proven Technology",
        "Comfortable Seating",
        "Quality Construction",
        "Easy Operation",
        "Value-Oriented"
      ]}
      description="Traditional 4-passenger golf cart with classic design and reliable performance. The EVOLUTION CLASSIC 4 PLUS offers timeless styling with modern electric efficiency for Monroe County golf enthusiasts. Call 1-844-844-6638."
      tigoUrl="https://tigongolfcarts.com/evolution/classic/4-plus/"
    />
  );
}