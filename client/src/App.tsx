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
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";

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

// St. Joseph County Municipality Pages (22 Total - 2 Cities + 7 Towns + 13 Townships)
import {
  SouthBendCityPage, MishawakaCityPage,
  IndianVillageTownPage, LakevilleTownPage, NewCarlisleTownPage, NorthLibertyTownPage,
  OsceolaTownPage, RoselandTownPage, WalkertonTownPage,
  CentreTownshipPage, ClayTownshipPage, GermanTownshipPage, GreeneTownshipPage,
  HarrisTownshipPage, LibertyTownshipPage, LincolnTownshipPage, MadisonTownshipPage,
  OliveTownshipPage, PennTownshipPage, PortageTownshipPage, UnionTownshipPage, WarrenTownshipPage
} from "@/pages/towns/StJosephCountyMunicipalityPages";

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

            {/* Blog Pages */}
            <Route path="/blog" component={BlogPage} />
            <Route path="/blog/:slug" component={BlogPostPage} />

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

            {/* St. Joseph County Municipality Pages - Cities (2) */}
            <Route path="/south-bend-city-golf-carts" component={SouthBendCityPage} />
            <Route path="/mishawaka-city-golf-carts" component={MishawakaCityPage} />
            
            {/* St. Joseph County Municipality Pages - Towns (7) */}
            <Route path="/indian-village-town-golf-carts" component={IndianVillageTownPage} />
            <Route path="/lakeville-town-golf-carts" component={LakevilleTownPage} />
            <Route path="/new-carlisle-town-golf-carts" component={NewCarlisleTownPage} />
            <Route path="/north-liberty-town-golf-carts" component={NorthLibertyTownPage} />
            <Route path="/osceola-town-golf-carts" component={OsceolaTownPage} />
            <Route path="/roseland-town-golf-carts" component={RoselandTownPage} />
            <Route path="/walkerton-town-golf-carts" component={WalkertonTownPage} />

            {/* St. Joseph County Municipality Pages - Townships (13) */}
            <Route path="/centre-township-golf-carts" component={CentreTownshipPage} />
            <Route path="/clay-township-golf-carts" component={ClayTownshipPage} />
            <Route path="/german-township-golf-carts" component={GermanTownshipPage} />
            <Route path="/greene-township-golf-carts" component={GreeneTownshipPage} />
            <Route path="/harris-township-golf-carts" component={HarrisTownshipPage} />
            <Route path="/liberty-township-golf-carts" component={LibertyTownshipPage} />
            <Route path="/lincoln-township-golf-carts" component={LincolnTownshipPage} />
            <Route path="/madison-township-golf-carts" component={MadisonTownshipPage} />
            <Route path="/olive-township-golf-carts" component={OliveTownshipPage} />
            <Route path="/penn-township-golf-carts" component={PennTownshipPage} />
            <Route path="/portage-township-golf-carts" component={PortageTownshipPage} />
            <Route path="/union-township-golf-carts" component={UnionTownshipPage} />
            <Route path="/warren-township-golf-carts" component={WarrenTownshipPage} />

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