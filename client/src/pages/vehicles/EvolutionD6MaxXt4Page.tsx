import VehicleDetailPage from "@/components/VehicleDetailPage";
import evolutionD6MaxXT4Image from "@assets/EVOLUTIOND6MAXXT4_1751893159005_1753135437836.jpg";

export default function EvolutionD6MaxXt4Page() {
  return (
    <VehicleDetailPage
      vehicleName="EVOLUTION D6 MAX XT4"
      brand="EVOLUTION"
      series="D6 MAX"
      price="$15,595"
      image={evolutionD6MaxXT4Image}
      seats="4"
      range="50 miles"
      topSpeed="25 mph"
      driveType="All-Wheel Drive"
      features={[
        "High Performance",
        "Advanced Technology",
        "Premium Features",
        "Superior Power System",
        "Enhanced Suspension",
        "Sport-Tuned Handling",
        "Premium Interior",
        "All-Wheel Drive"
      ]}
      description="High-performance 4-passenger vehicle with advanced technology and premium features. The EVOLUTION D6 MAX XT4 represents the pinnacle of electric golf cart performance for Indiana enthusiasts. Call 1-844-844-6638."
      tigoUrl="https://golfcartsofindiana.com/evolution/d6-max/xt4/"
    />
  );
}