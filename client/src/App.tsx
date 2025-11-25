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

// Indiana Municipality Pages
import {
  IndianapolisPage, FortWaynePage, EvansvillePage, SouthBendPage, CarmelPage, FishersPage,
  BloomingtonPage, HammondPage, GaryPage, LafayettePage, MunciePage, TerreHautePage,
  KokomoPage, NoblesvillePage, AndersonPage, GreenwoodPage, ElkhartPage, MishawakaPage,
  LawrencePage, JeffersonvillePage, ColumbusPage, PortagePage, NewAlbanyPage, RichmondPage,
  WestfieldPage, ValparaisoPage, MichiganCityPage, MarionPage, EastChicagoPage, HobartPage,
  CrownPointPage, FranklinPage, LaPortePage, GoshenPage, MerrillvillePage, SchervillePage,
  GrangerPage, PlainfieldPage, BrownsburgPage, HighlandPage, MunsterPage, ClarksvillePage,
  AvonPage, ZionsvillePage, DyerPage, CedarLakePage, StJohnPage, ShelbyvillePage, SeymourPage,
  MartinsvillePage, ConnersvillePage, LogansportPage, NewCastlePage, WashingtonPage,
  VincennesPage, BedfordPage, JasperPage, CrawfordsvillePage, HuntingtonPage, WabashPage,
  AuburnPage, PeruPage, WarsawPage, FrankfortPage, LebanonPage, GreenfieldPage, GreensburgPage,
  MadisonPage, PlymouthPage, DecaturPage, BlufftonPage, KendallvillePage, TellCityPage,
  PrincetonPage, MountVernonPage, AngolaPage, PortlandPage, HartfordCityPage, LintonPage,
  NorthVernonPage, ScottsburgPage, BrazilPage, BoonvillePage, SalemPage, BatesvillePage,
  RushvillePage, RochesterPage, MonticelloPage, SullivanPage, RensselaerPage, ElwoodPage,
  AlexandriaPage, GasCityPage, LigonierPage, NappaneePage, BremenPage, CulverPage,
  SyracusePage, WinonaLakePage, ColumbiaCityPage, GarrettPage, WaterlooPage, ButlerPage,
  KnoxPage, WalkertonPage, NorthLibertyPage, LakevillePage, OsceolaPage, NewCarlislePage,
  ChestertonPage, WhitingPage, LakeStationPage, LowellPage, GriffithPage, WinfieldPage,
  WestLafayettePage, DelphiPage, TiptonPage, CiceroPage, CovingtonPage, AtticaPage
} from "@/pages/towns/IndianaMunicipalityPages";

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

            {/* Indiana Municipality Pages - Major Cities */}
            <Route path="/indianapolis-golf-carts" component={IndianapolisPage} />
            <Route path="/fort-wayne-golf-carts" component={FortWaynePage} />
            <Route path="/evansville-golf-carts" component={EvansvillePage} />
            <Route path="/south-bend-golf-carts" component={SouthBendPage} />
            <Route path="/carmel-golf-carts" component={CarmelPage} />
            <Route path="/fishers-golf-carts" component={FishersPage} />
            <Route path="/bloomington-golf-carts" component={BloomingtonPage} />
            <Route path="/hammond-golf-carts" component={HammondPage} />
            <Route path="/gary-golf-carts" component={GaryPage} />
            <Route path="/lafayette-golf-carts" component={LafayettePage} />
            <Route path="/muncie-golf-carts" component={MunciePage} />
            <Route path="/terre-haute-golf-carts" component={TerreHautePage} />
            <Route path="/kokomo-golf-carts" component={KokomoPage} />
            <Route path="/noblesville-golf-carts" component={NoblesvillePage} />
            <Route path="/anderson-golf-carts" component={AndersonPage} />
            <Route path="/greenwood-golf-carts" component={GreenwoodPage} />
            <Route path="/elkhart-golf-carts" component={ElkhartPage} />
            <Route path="/mishawaka-golf-carts" component={MishawakaPage} />
            <Route path="/lawrence-golf-carts" component={LawrencePage} />
            <Route path="/jeffersonville-golf-carts" component={JeffersonvillePage} />
            <Route path="/columbus-golf-carts" component={ColumbusPage} />
            <Route path="/portage-golf-carts" component={PortagePage} />
            <Route path="/new-albany-golf-carts" component={NewAlbanyPage} />
            <Route path="/richmond-golf-carts" component={RichmondPage} />
            <Route path="/westfield-golf-carts" component={WestfieldPage} />
            <Route path="/valparaiso-golf-carts" component={ValparaisoPage} />
            <Route path="/michigan-city-golf-carts" component={MichiganCityPage} />
            <Route path="/marion-golf-carts" component={MarionPage} />
            <Route path="/east-chicago-golf-carts" component={EastChicagoPage} />
            <Route path="/hobart-golf-carts" component={HobartPage} />
            <Route path="/crown-point-golf-carts" component={CrownPointPage} />
            <Route path="/franklin-golf-carts" component={FranklinPage} />
            <Route path="/la-porte-golf-carts" component={LaPortePage} />
            <Route path="/goshen-golf-carts" component={GoshenPage} />
            <Route path="/merrillville-golf-carts" component={MerrillvillePage} />
            <Route path="/schererville-golf-carts" component={SchervillePage} />
            <Route path="/granger-golf-carts" component={GrangerPage} />
            <Route path="/plainfield-golf-carts" component={PlainfieldPage} />
            <Route path="/brownsburg-golf-carts" component={BrownsburgPage} />
            <Route path="/highland-golf-carts" component={HighlandPage} />
            <Route path="/munster-golf-carts" component={MunsterPage} />
            <Route path="/clarksville-golf-carts" component={ClarksvillePage} />
            <Route path="/avon-golf-carts" component={AvonPage} />
            <Route path="/zionsville-golf-carts" component={ZionsvillePage} />
            <Route path="/dyer-golf-carts" component={DyerPage} />
            <Route path="/cedar-lake-golf-carts" component={CedarLakePage} />
            <Route path="/st-john-golf-carts" component={StJohnPage} />
            <Route path="/shelbyville-golf-carts" component={ShelbyvillePage} />
            <Route path="/seymour-golf-carts" component={SeymourPage} />
            <Route path="/martinsville-golf-carts" component={MartinsvillePage} />
            <Route path="/connersville-golf-carts" component={ConnersvillePage} />
            <Route path="/logansport-golf-carts" component={LogansportPage} />
            <Route path="/new-castle-golf-carts" component={NewCastlePage} />
            <Route path="/washington-golf-carts" component={WashingtonPage} />
            <Route path="/vincennes-golf-carts" component={VincennesPage} />
            <Route path="/bedford-golf-carts" component={BedfordPage} />
            <Route path="/jasper-golf-carts" component={JasperPage} />
            <Route path="/crawfordsville-golf-carts" component={CrawfordsvillePage} />
            <Route path="/huntington-golf-carts" component={HuntingtonPage} />
            <Route path="/wabash-golf-carts" component={WabashPage} />
            <Route path="/auburn-golf-carts" component={AuburnPage} />
            <Route path="/peru-golf-carts" component={PeruPage} />
            <Route path="/warsaw-golf-carts" component={WarsawPage} />
            <Route path="/frankfort-golf-carts" component={FrankfortPage} />
            <Route path="/lebanon-golf-carts" component={LebanonPage} />
            <Route path="/greenfield-golf-carts" component={GreenfieldPage} />
            <Route path="/greensburg-golf-carts" component={GreensburgPage} />
            <Route path="/madison-golf-carts" component={MadisonPage} />
            <Route path="/plymouth-golf-carts" component={PlymouthPage} />
            <Route path="/decatur-golf-carts" component={DecaturPage} />
            <Route path="/bluffton-golf-carts" component={BlufftonPage} />
            <Route path="/kendallville-golf-carts" component={KendallvillePage} />
            <Route path="/tell-city-golf-carts" component={TellCityPage} />
            <Route path="/princeton-golf-carts" component={PrincetonPage} />
            <Route path="/mount-vernon-golf-carts" component={MountVernonPage} />
            <Route path="/angola-golf-carts" component={AngolaPage} />
            <Route path="/portland-golf-carts" component={PortlandPage} />
            <Route path="/hartford-city-golf-carts" component={HartfordCityPage} />
            <Route path="/linton-golf-carts" component={LintonPage} />
            <Route path="/north-vernon-golf-carts" component={NorthVernonPage} />
            <Route path="/scottsburg-golf-carts" component={ScottsburgPage} />
            <Route path="/brazil-golf-carts" component={BrazilPage} />
            <Route path="/boonville-golf-carts" component={BoonvillePage} />
            <Route path="/salem-golf-carts" component={SalemPage} />
            <Route path="/batesville-golf-carts" component={BatesvillePage} />
            <Route path="/rushville-golf-carts" component={RushvillePage} />
            <Route path="/rochester-golf-carts" component={RochesterPage} />
            <Route path="/monticello-golf-carts" component={MonticelloPage} />
            <Route path="/sullivan-golf-carts" component={SullivanPage} />
            <Route path="/rensselaer-golf-carts" component={RensselaerPage} />
            <Route path="/elwood-golf-carts" component={ElwoodPage} />
            <Route path="/alexandria-golf-carts" component={AlexandriaPage} />
            <Route path="/gas-city-golf-carts" component={GasCityPage} />
            <Route path="/ligonier-golf-carts" component={LigonierPage} />
            <Route path="/nappanee-golf-carts" component={NappaneePage} />
            <Route path="/bremen-golf-carts" component={BremenPage} />
            <Route path="/culver-golf-carts" component={CulverPage} />
            <Route path="/syracuse-golf-carts" component={SyracusePage} />
            <Route path="/winona-lake-golf-carts" component={WinonaLakePage} />
            <Route path="/columbia-city-golf-carts" component={ColumbiaCityPage} />
            <Route path="/garrett-golf-carts" component={GarrettPage} />
            <Route path="/waterloo-golf-carts" component={WaterlooPage} />
            <Route path="/butler-golf-carts" component={ButlerPage} />
            <Route path="/knox-golf-carts" component={KnoxPage} />
            <Route path="/walkerton-golf-carts" component={WalkertonPage} />
            <Route path="/north-liberty-golf-carts" component={NorthLibertyPage} />
            <Route path="/lakeville-golf-carts" component={LakevillePage} />
            <Route path="/osceola-golf-carts" component={OsceolaPage} />
            <Route path="/new-carlisle-golf-carts" component={NewCarlislePage} />
            <Route path="/chesterton-golf-carts" component={ChestertonPage} />
            <Route path="/whiting-golf-carts" component={WhitingPage} />
            <Route path="/lake-station-golf-carts" component={LakeStationPage} />
            <Route path="/lowell-golf-carts" component={LowellPage} />
            <Route path="/griffith-golf-carts" component={GriffithPage} />
            <Route path="/winfield-golf-carts" component={WinfieldPage} />
            <Route path="/west-lafayette-golf-carts" component={WestLafayettePage} />
            <Route path="/delphi-golf-carts" component={DelphiPage} />
            <Route path="/tipton-golf-carts" component={TiptonPage} />
            <Route path="/cicero-golf-carts" component={CiceroPage} />
            <Route path="/covington-golf-carts" component={CovingtonPage} />
            <Route path="/attica-golf-carts" component={AtticaPage} />

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
