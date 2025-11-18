import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import useScrollToTop from "@/hooks/useScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import InventoryPage from "@/pages/InventoryPage";
import RentalsPage from "@/pages/RentalsPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import DenagoPage from "@/pages/DenagoPage";
import EvolutionPage from "@/pages/EvolutionPage";
import VehicleDetailPage from "@/pages/VehicleDetailPage";
import ContactPage from "@/pages/ContactPage";
import ThankYouPage from "@/pages/ThankYouPage";
import ShowroomPage from "@/pages/ShowroomPage";
import NotFound from "@/pages/not-found";
import NewInventoryPage from "@/pages/NewInventoryPage";
import NewServicesPage from "@/pages/NewServicesPage";
import NewAboutPage from "@/pages/NewAboutPage";
import EcoImpactPage from "@/pages/EcoImpactPage";

import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";

// Policy Pages
import TermsConditionsPage from "@/pages/policies/TermsConditionsPage";
import ReturnPolicyPage from "@/pages/policies/ReturnPolicyPage";
import DeliveryPolicyPage from "@/pages/policies/DeliveryPolicyPage";
import RentalPolicyPage from "@/pages/policies/RentalPolicyPage";
import StoragePolicyPage from "@/pages/policies/StoragePolicyPage";
import PublishingPolicyPage from "@/pages/policies/PublishingPolicyPage";
import FeedbackPolicyPage from "@/pages/policies/FeedbackPolicyPage";
import CorrectionsPolicyPage from "@/pages/policies/CorrectionsPolicyPage";
import DiversityPolicyPage from "@/pages/policies/DiversityPolicyPage";
import EthicsPolicyPage from "@/pages/policies/EthicsPolicyPage";
import StaffingReportPage from "@/pages/policies/StaffingReportPage";

// New Notre Dame Municipality Pages (19 Total - 1 City + 11 Boroughs + 7 Townships)
import {
  ArchbaldPage, CarbondalePage, ChinchillaPage, ClarksSummitPage, DaltonPage,
  ElmhurstPage, FleetvillePage, JermynPage, JessupPage, LaPlumePage,
  MoosicPage, MoscowPage, OldForgePage, OlyphantPage, PeckvillePage,
  RansomPage, ScrantonPage, TaylorPage, WaverlyPage
} from "@/pages/towns/NewLackawannaCountyMunicipalityPages";

// New Notre Dame Rental Pages (19 Total)
import {
  ArchbaldRentalsPage, CarbondaleRentalsPage, ChinchillaRentalsPage, ClarksSummitRentalsPage, DaltonRentalsPage,
  ElmhurstRentalsPage, FleetvilleRentalsPage, JermynRentalsPage, JessupRentalsPage, LaPlumeRentalsPage,
  MoosicRentalsPage, MoscowRentalsPage, OldForgeRentalsPage, OlyphantRentalsPage, PeckvilleRentalsPage,
  RansomRentalsPage, ScrantonRentalsPage, TaylorRentalsPage, WaverlyRentalsPage
} from "@/pages/rentals/NewLackawannaCountyMunicipalityRentals";

// Note: Individual vehicle detail pages removed - using dynamic VehicleDetailPage instead

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

queryClient.setQueryDefaults(['get'], { queryFn: ({ queryKey }) => fetcher(queryKey[0] as string) });

export default function App() {
  useScrollToTop();

  return (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/inventory" component={NewInventoryPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/services" component={NewServicesPage} />
            <Route path="/about" component={NewAboutPage} />
            <Route path="/denago" component={DenagoPage} />
            <Route path="/evolution" component={EvolutionPage} />
            <Route path="/vehicle/:id" component={VehicleDetailPage} />
            <Route path="/vehicles/:id" component={VehicleDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/showroom" component={ShowroomPage} />
            <Route path="/eco-impact" component={EcoImpactPage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsOfServicePage} />

            {/* Policy Pages */}
            <Route path="/policies/terms-conditions" component={TermsConditionsPage} />
            <Route path="/policies/return-policy" component={ReturnPolicyPage} />
            <Route path="/policies/delivery-policy" component={DeliveryPolicyPage} />
            <Route path="/policies/rental-policy" component={RentalPolicyPage} />
            <Route path="/policies/storage-policy" component={StoragePolicyPage} />
            <Route path="/policies/publishing-policy" component={PublishingPolicyPage} />
            <Route path="/policies/feedback-policy" component={FeedbackPolicyPage} />
            <Route path="/policies/corrections-policy" component={CorrectionsPolicyPage} />
            <Route path="/policies/diversity-policy" component={DiversityPolicyPage} />
            <Route path="/policies/ethics-policy" component={EthicsPolicyPage} />
            <Route path="/policies/staffing-report" component={StaffingReportPage} />

            {/* New Notre Dame Municipality Pages - City (1) */}
            <Route path="/towns/scranton" component={ScrantonPage} />
            <Route path="/towns/scranton-city" component={ScrantonPage} />
            
            {/* New Notre Dame Municipality Pages - Boroughs (11) */}
            <Route path="/towns/archbald" component={ArchbaldPage} />
            <Route path="/towns/carbondale" component={CarbondalePage} />
            <Route path="/towns/clarks-summit" component={ClarksSummitPage} />
            <Route path="/towns/dalton" component={DaltonPage} />
            <Route path="/towns/jermyn" component={JermynPage} />
            <Route path="/towns/jessup" component={JessupPage} />
            <Route path="/towns/moosic" component={MoosicPage} />
            <Route path="/towns/moscow" component={MoscowPage} />
            <Route path="/towns/old-forge" component={OldForgePage} />
            <Route path="/towns/olyphant" component={OlyphantPage} />
            <Route path="/towns/taylor" component={TaylorPage} />

            {/* New Notre Dame Municipality Pages - Townships (7) */}
            <Route path="/towns/chinchilla-township" component={ChinchillaPage} />
            <Route path="/towns/elmhurst-township" component={ElmhurstPage} />
            <Route path="/towns/fleetville-township" component={FleetvillePage} />
            <Route path="/towns/la-plume-township" component={LaPlumePage} />
            <Route path="/towns/peckville-township" component={PeckvillePage} />
            <Route path="/towns/ransom-township" component={RansomPage} />
            <Route path="/towns/waverly-township" component={WaverlyPage} />

            {/* SEO-friendly URL routes for New Notre Dame municipalities */}
            <Route path="/scranton-golf-carts" component={ScrantonPage} />
            <Route path="/archbald-golf-carts" component={ArchbaldPage} />
            <Route path="/carbondale-golf-carts" component={CarbondalePage} />
            <Route path="/chinchilla-township-golf-carts" component={ChinchillaPage} />
            <Route path="/clarks-summit-golf-carts" component={ClarksSummitPage} />
            <Route path="/dalton-golf-carts" component={DaltonPage} />
            <Route path="/elmhurst-township-golf-carts" component={ElmhurstPage} />
            <Route path="/fleetville-township-golf-carts" component={FleetvillePage} />
            <Route path="/jermyn-golf-carts" component={JermynPage} />
            <Route path="/jessup-golf-carts" component={JessupPage} />
            <Route path="/la-plume-township-golf-carts" component={LaPlumePage} />
            <Route path="/moosic-golf-carts" component={MoosicPage} />
            <Route path="/moscow-golf-carts" component={MoscowPage} />
            <Route path="/old-forge-golf-carts" component={OldForgePage} />
            <Route path="/olyphant-golf-carts" component={OlyphantPage} />
            <Route path="/peckville-township-golf-carts" component={PeckvillePage} />
            <Route path="/ransom-township-golf-carts" component={RansomPage} />
            <Route path="/taylor-golf-carts" component={TaylorPage} />
            <Route path="/waverly-township-golf-carts" component={WaverlyPage} />

            {/* New Notre Dame Municipality Rental Pages (19 Total) */}
            <Route path="/rentals/scranton" component={ScrantonRentalsPage} />
            <Route path="/rentals/archbald" component={ArchbaldRentalsPage} />
            <Route path="/rentals/carbondale" component={CarbondaleRentalsPage} />
            <Route path="/rentals/chinchilla-township" component={ChinchillaRentalsPage} />
            <Route path="/rentals/clarks-summit" component={ClarksSummitRentalsPage} />
            <Route path="/rentals/dalton" component={DaltonRentalsPage} />
            <Route path="/rentals/elmhurst-township" component={ElmhurstRentalsPage} />
            <Route path="/rentals/fleetville-township" component={FleetvilleRentalsPage} />
            <Route path="/rentals/jermyn" component={JermynRentalsPage} />
            <Route path="/rentals/jessup" component={JessupRentalsPage} />
            <Route path="/rentals/la-plume-township" component={LaPlumeRentalsPage} />
            <Route path="/rentals/moosic" component={MoosicRentalsPage} />
            <Route path="/rentals/moscow" component={MoscowRentalsPage} />
            <Route path="/rentals/old-forge" component={OldForgeRentalsPage} />
            <Route path="/rentals/olyphant" component={OlyphantRentalsPage} />
            <Route path="/rentals/peckville-township" component={PeckvilleRentalsPage} />
            <Route path="/rentals/ransom-township" component={RansomRentalsPage} />
            <Route path="/rentals/taylor" component={TaylorRentalsPage} />
            <Route path="/rentals/waverly-township" component={WaverlyRentalsPage} />

            {/* All vehicle detail pages handled by dynamic VehicleDetailPage component */}

            {/* 404 Page */}
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  </HelmetProvider>
  );
}