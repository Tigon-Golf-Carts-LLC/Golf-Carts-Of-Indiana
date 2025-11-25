import VehicleDetailPage from "@/components/VehicleDetailPage";
import denagoEvNomadImage from "@assets/DENAGONEVNOMAD_1751893047472_1753135231313.jpg";

export default function DenagoEvNomadPage() {
  return (
    <VehicleDetailPage
      vehicleName="DENAGO EV NOMAD"
      brand="DENAGO"
      series="EV NOMAD"
      price="$8,495"
      image={denagoEvNomadImage}
      seats="4"
      range="45 miles"
      topSpeed="25 mph"
      driveType="2x4"
      features={[
        "All-Terrain Tires",
        "Lifted Suspension",
        "Adventure Package",
        "Enhanced Ground Clearance",
        "Rugged Construction",
        "Off-Road Capabilities",
        "Durable Frame",
        "Weather Protection"
      ]}
      description="Adventure-ready vehicles built for exploration and off-road adventures. The DENAGO EV NOMAD combines rugged durability with electric efficiency for Indiana's diverse terrain. Call 1-844-844-6638."
      tigoUrl="https://golfcartsofindiana.com/denago-ev/nomad/"
    />
  );
}