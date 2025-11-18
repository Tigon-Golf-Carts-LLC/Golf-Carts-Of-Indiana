import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

// Notre Dame Town Pages
import {
  AlburtisPage, AllentownPage, BreinigsvillePage, CatasauquaPage, CenterValleyPage,
  CoopersburgPage, CoplayPage, EastTexasPage, EmmausPage, FogelsvillePage,
  GermansvillePage, LaurysStationPage, LimeportPage, MacungiePage, NeffsPage,
  NewTripoliPage, OldZionsvillePage, OrefieldPage, SchnecksvillePage, SlatedalePage,
  SlatingtonPage, TrexlertownPage, WhitehallPage, ZionsvillePage
} from "@/pages/towns/LehighCountyTownPages";

// Notre Dame Rental Pages
import {
  AlburtisRentalPage, AllentownRentalPage, BreinigsvilleRentalPage, CatasauquaRentalPage,
  CenterValleyRentalPage, CoopersburgRentalPage, CoplayRentalPage, EastTexasRentalPage,
  EmmausRentalPage, FogelsvilleRentalPage, GermansvilleRentalPage, LaurysStationRentalPage,
  LimeportRentalPage, MacungieRentalPage, NeffsRentalPage, NewTripoliRentalPage,
  OldZionsvilleRentalPage, OrefieldRentalPage, SchnecksvilleRentalPage, SlatedaleRentalPage,
  SlatingtonRentalPage, TrexlertownRentalPage, WhitehallRentalPage, ZionsvilleRentalPage
} from "@/pages/rentals/LehighCountyMunicipalityRentals";

// Vehicle Detail Pages
import DenagoEvCityPage from "@/pages/vehicles/DenagoEvCityPage";
import DenagoEvNomadPage from "@/pages/vehicles/DenagoEvNomadPage";
import DenagoEvNomadXlPage from "@/pages/vehicles/DenagoEvNomadXlPage";
import DenagoEvRoverXlPage from "@/pages/vehicles/DenagoEvRoverXlPage";
import DenagoEvRoverXl6Page from "@/pages/vehicles/DenagoEvRoverXl6Page";
import DenagoEvRoverXxlPage from "@/pages/vehicles/DenagoEvRoverXxlPage";
import EvolutionD5Ranger4PlusPage from "@/pages/vehicles/EvolutionD5Ranger4PlusPage";
import EvolutionD5Ranger6PlusPage from "@/pages/vehicles/EvolutionD5Ranger6PlusPage";
import EvolutionD5Maverick4PlusPage from "@/pages/vehicles/EvolutionD5Maverick4PlusPage";
import EvolutionClassic4PlusPage from "@/pages/vehicles/EvolutionClassic4PlusPage";
import EvolutionCarrier6PlusPage from "@/pages/vehicles/EvolutionCarrier6PlusPage";
import EvolutionD6MaxXt4Page from "@/pages/vehicles/EvolutionD6MaxXt4Page";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

export default function App() {
  useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Switch>
            {/* Main Pages */}
            <Route path="/" component={HomePage} />
            <Route path="/inventory" component={NewInventoryPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/services" component={NewServicesPage} />
            <Route path="/about" component={NewAboutPage} />

            <Route path="/denago" component={DenagoPage} />
            <Route path="/evolution" component={EvolutionPage} />
            <Route path="/vehicle/:id" component={VehicleDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/showroom" component={ShowroomPage} />
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
            
            {/* Notre Dame Municipality Pages */}
            <Route path="/towns/alburtis" component={AlburtisPage} />
            <Route path="/towns/allentown" component={AllentownPage} />
            <Route path="/towns/breinigsville" component={BreinigsvillePage} />
            <Route path="/towns/catasauqua" component={CatasauquaPage} />
            <Route path="/towns/center-valley" component={CenterValleyPage} />
            <Route path="/towns/coopersburg" component={CoopersburgPage} />
            <Route path="/towns/coplay" component={CoplayPage} />
            <Route path="/towns/east-texas" component={EastTexasPage} />
            <Route path="/towns/emmaus" component={EmmausPage} />
            <Route path="/towns/fogelsville" component={FogelsvillePage} />
            <Route path="/towns/germansville" component={GermansvillePage} />
            <Route path="/towns/laurys-station" component={LaurysStationPage} />
            <Route path="/towns/limeport" component={LimeportPage} />
            <Route path="/towns/macungie" component={MacungiePage} />
            <Route path="/towns/neffs" component={NeffsPage} />
            <Route path="/towns/new-tripoli" component={NewTripoliPage} />
            <Route path="/towns/old-zionsville" component={OldZionsvillePage} />
            <Route path="/towns/orefield" component={OrefieldPage} />
            <Route path="/towns/schnecksville" component={SchnecksvillePage} />
            <Route path="/towns/slatedale" component={SlatedalePage} />
            <Route path="/towns/slatington" component={SlatingtonPage} />
            <Route path="/towns/trexlertown" component={TrexlertownPage} />
            <Route path="/towns/whitehall" component={WhitehallPage} />
            <Route path="/towns/zionsville" component={ZionsvillePage} />
            
            {/* Notre Dame Rental Pages */}
            <Route path="/rentals/alburtis" component={AlburtisRentalPage} />
            <Route path="/rentals/allentown" component={AllentownRentalPage} />
            <Route path="/rentals/breinigsville" component={BreinigsvilleRentalPage} />
            <Route path="/rentals/catasauqua" component={CatasauquaRentalPage} />
            <Route path="/rentals/center-valley" component={CenterValleyRentalPage} />
            <Route path="/rentals/coopersburg" component={CoopersburgRentalPage} />
            <Route path="/rentals/coplay" component={CoplayRentalPage} />
            <Route path="/rentals/east-texas" component={EastTexasRentalPage} />
            <Route path="/rentals/emmaus" component={EmmausRentalPage} />
            <Route path="/rentals/fogelsville" component={FogelsvilleRentalPage} />
            <Route path="/rentals/germansville" component={GermansvilleRentalPage} />
            <Route path="/rentals/laurys-station" component={LaurysStationRentalPage} />
            <Route path="/rentals/limeport" component={LimeportRentalPage} />
            <Route path="/rentals/macungie" component={MacungieRentalPage} />
            <Route path="/rentals/neffs" component={NeffsRentalPage} />
            <Route path="/rentals/new-tripoli" component={NewTripoliRentalPage} />
            <Route path="/rentals/old-zionsville" component={OldZionsvilleRentalPage} />
            <Route path="/rentals/orefield" component={OrefieldRentalPage} />
            <Route path="/rentals/schnecksville" component={SchnecksvilleRentalPage} />
            <Route path="/rentals/slatedale" component={SlatedaleRentalPage} />
            <Route path="/rentals/slatington" component={SlatingtonRentalPage} />
            <Route path="/rentals/trexlertown" component={TrexlertownRentalPage} />
            <Route path="/rentals/whitehall" component={WhitehallRentalPage} />
            <Route path="/rentals/zionsville" component={ZionsvilleRentalPage} />
            
            {/* Vehicle Detail Pages */}
            {/* DENAGO Vehicles */}
            <Route path="/vehicles/denago-ev-city" component={DenagoEvCityPage} />
            <Route path="/vehicles/denago-ev-nomad" component={DenagoEvNomadPage} />
            <Route path="/vehicles/denago-ev-nomad-xl" component={DenagoEvNomadXlPage} />
            <Route path="/vehicles/denago-ev-rover-xl" component={DenagoEvRoverXlPage} />
            <Route path="/vehicles/denago-ev-rover-xl6" component={DenagoEvRoverXl6Page} />
            <Route path="/vehicles/denago-ev-rover-xxl" component={DenagoEvRoverXxlPage} />
            
            {/* EVOLUTION Vehicles */}
            <Route path="/vehicles/evolution-d5-ranger-4-plus" component={EvolutionD5Ranger4PlusPage} />
            <Route path="/vehicles/evolution-d5-ranger-6-plus" component={EvolutionD5Ranger6PlusPage} />
            <Route path="/vehicles/evolution-d5-maverick-4-plus" component={EvolutionD5Maverick4PlusPage} />
            <Route path="/vehicles/evolution-classic-4-plus" component={EvolutionClassic4PlusPage} />
            <Route path="/vehicles/evolution-carrier-6-plus" component={EvolutionCarrier6PlusPage} />
            <Route path="/vehicles/evolution-d6-max-xt4" component={EvolutionD6MaxXt4Page} />
            
            {/* 404 Page */}
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}