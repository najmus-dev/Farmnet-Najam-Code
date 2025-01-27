import React from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//userside pages
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import Stories from "./Stories";
import Subscription from "./Subscription";
import NewsSection from "./NewsSection";
import HomePage from "./HomePage";
import NewsPage1 from "../NewsPages/NewsPage1";
import NewsPage2 from "../NewsPages/NewsPage2";
import NewsPage3 from "../NewsPages/NewsPage3";
import FarmersStories1 from "../FarmersStoriesPages/FarmersStories1";
import FarmersStories2 from "../FarmersStoriesPages/FarmersStories2";
import FarmersStories3 from "../FarmersStoriesPages/FarmersStories3";
import FarmersStories4 from "../FarmersStoriesPages/FarmersStories4";
import FarmersStories5 from "../FarmersStoriesPages/FarmersStories5";
import FarmersStories6 from "../FarmersStoriesPages/FarmersStories6";
import FarmersStories7 from "../FarmersStoriesPages/FarmersStories7";
import FarmersStories8 from "../FarmersStoriesPages/FarmersStories8";
import FarmersStories9 from "../FarmersStoriesPages/FarmersStories9";
import ServicesPage from "../ServicesPages/ServicesPage";
import ReportPage from "../ReportsPages/ReportPage";
import TermsandConditions from "../Components/TermsandCondtions";
import DataProtection from "../Components/DataProtection";
import Faqs from "../Components/Faqs";
import ContactUs from "./ContactUs";
import LogIn from "../SignUpPages/LogIn";
import SignUp1 from "../SignUpPages/SignUp1";
import SignUp2 from "../SignUpPages/SignUp2";
import Recover from "../SignUpPages/Recover";

import ResetPassword from "../SignUpPages/ResetPassword";
import PrivacyPolicy from "./PrivacyPolicy";
import CommunitiesPage from "../Communities/CommunitiesPage";
import SeedOverview from "../Communities/Seed/SeedOverview";
import SeedDashboard from "../Communities/Seed/SeedDashboard";
import SeedInvestmentTracker from "../Communities/Seed/SeedInvestmentTracker";
import SeedDonationPage from "../Communities/Seed/SeedDonationPage";
import SeedDonationConfirmation from "../Communities/Seed/SeedDonationConfirmation";
import BuyPage from "../Communities/BuyPage";
import CartPage from "../Communities/CartPage";
import PayPage from "../Communities/PayPage";
import EnvironmentalSocialGovernanceMainPage from "../EnvironmentalSocialGovernancePages/EnvironmentalSocialGovernanceMainPage";
import EnvironmentalPage1 from "../EnvironmentalSocialGovernancePages/Environmental/EnvironmentalPage1";
import EnvironmentalPage2 from "../EnvironmentalSocialGovernancePages/Environmental/EnvironmentalPage2";
import EnvironmentalPage3 from "../EnvironmentalSocialGovernancePages/Environmental/EnvironmentalPage3";
import SocialPage1 from "../EnvironmentalSocialGovernancePages/Social/SocialPage1";
import SocialPage2 from "../EnvironmentalSocialGovernancePages/Social/SocialPage2";
import SocialPage3 from "../EnvironmentalSocialGovernancePages/Social/SocialPage3";
import GovernancePage1 from "../EnvironmentalSocialGovernancePages/Governance/GovernancePage1";
import GovernancePage2 from "../EnvironmentalSocialGovernancePages/Governance/GovernancePage2";
import GovernancePage3 from "../EnvironmentalSocialGovernancePages/Governance/GovernancePage3";
import CropsPage1 from "../ResourcesPages/CropsPage1";
import LivestockPage1 from "../ResourcesPages/LivestockPage1";
import ResourcesMainPage from "../ResourcesPages/ResourcesMainPage";
import Gallery from "./Gallery";
import Register from "./Register";
import CountriesPage from "./Coutriespage";
import ReportsViewMorePage from "../ReportsPages/ReportsViewMorePage";
import ChatBot from "./ChatBot";
import ProductionOverview from "../Communities/Production/ProductionOverview";
import Shop from "../Communities/Production/Shop";
import ValueAdditionOverview from "../Communities/ValueAddition/ValueAdditionOverview";
import ValueAdditionDashboard from "../Communities/ValueAddition/ValueAdditionDashboard";
import ValueAdditionInvestmentTracker from "../Communities/ValueAddition/ValueAdditionInvestmentTracker";
import ValueAdditionDonationPage from "../Communities/ValueAddition/ValueAdditionDonationPage";
import ValueAdditionDonationConfirmation from "../Communities/ValueAddition/ValueAdditionDonationConfirmation";
import ESGOverview from "../Communities/ESG/ESGOverview";
import ESGDashboard from "../Communities/ESG/ESGDashboard";
import ESGInvestmentTracker from "../Communities/ESG/ESGInvestmentTracker";
import ESGDonationPage from "../Communities/ESG/ESGDonationPage";
import ESGDonationConfirmation from "../Communities/ESG/ESGDonationConfirmation";
import CattlesShop from "../Communities/Production/CattlesShop";
import VegetablesOverview from "../Communities/Vegetables/VegetablesOverview";
import VegetablesDashboard from "../Communities/Vegetables/VegetablesDashboard";
import VegetablesInvestmentTracker from "../Communities/Vegetables/VegetablesInvestmentTracker";
import VegetablesDonationPage from "../Communities/Vegetables/VegetablesDonationPage";
import VegetablesDonationConfirmation from "../Communities/Vegetables/VegetablesDonationConfirmation";
import HorticultureOverview from "../Communities/Horticulture/HorticultureOverview";
import HorticultureDashboard from "../Communities/Horticulture/HorticultureDashboard";
import HorticultureInvestmentTracker from "../Communities/Horticulture/HorticultureInvestmentTracker";
import HorticultureDonationPage from "../Communities/Horticulture/HorticultureDonationPage";
import HorticultureDonationConfirmation from "../Communities/Horticulture/HorticultureDonationConfirmation";
import CattlesOverview from "../Communities/Cattles/CattlesOverview";
import CattlesDashboard from "../Communities/Cattles/CattlesDashboard";
import CattlesInvestmentTracker from "../Communities/Cattles/CattlesInvestmentTracker";
import CattlesDonationPage from "../Communities/Cattles/CattlesDonationPage";
import CattlesDonationConfirmation from "../Communities/Cattles/CattlesDonationConfirmation";
import Environmental1a from "../EnvironmentalSocialGovernancePages/Environmental/Environmental1a";
import Environmental1b from "../EnvironmentalSocialGovernancePages/Environmental/Environmental1b";
import Environmental2a from "../EnvironmentalSocialGovernancePages/Environmental/Environmental2a";
import Environmental2b from "../EnvironmentalSocialGovernancePages/Environmental/Environmental2b";
import Social1a from "../EnvironmentalSocialGovernancePages/Social/Social1a";
import Social1b from "../EnvironmentalSocialGovernancePages/Social/Social1b";
import Social2a from "../EnvironmentalSocialGovernancePages/Social/Social2a";
import Social2b from "../EnvironmentalSocialGovernancePages/Social/Social2b";
import Governance1a from "../EnvironmentalSocialGovernancePages/Governance/Governance1a";
import Governance1b from "../EnvironmentalSocialGovernancePages/Governance/Governance1b";
import Governance2a from "../EnvironmentalSocialGovernancePages/Governance/Governance2a";
import Governance2b from "../EnvironmentalSocialGovernancePages/Governance/Governance2b";
import GalleryPage1 from "../GalleryPages/GalleryPage1";
import GalleryPage2 from "../GalleryPages/GalleryPage2";
import GalleryPage3 from "../GalleryPages/GalleryPage3";
import GalleryPage4 from "../GalleryPages/GalleryPage4";
import GalleryPage5 from "../GalleryPages/GalleryPage5";
import GalleryPage6 from "../GalleryPages/GalleryPage6";
import GalleryPage7 from "../GalleryPages/GalleryPage7";
import GalleryPage8 from "../GalleryPages/GalleryPage8";
import GalleryPage9 from "../GalleryPages/GalleryPage9";
import GalleryPage10 from "../GalleryPages/GalleryPage10";
import GalleryPage11 from "../GalleryPages/GalleryPage11";
import GalleryPage12 from "../GalleryPages/GalleryPage12";
// admin pages
import AdminServicesPage from "../AdminPortal/ServicesPages/ServicesPage";
import Sidebar from "../AdminPortal/Components/Sidebar";
import Homepage from "../AdminPortal/Components/Homepage";
import Footer2 from "../AdminPortal/Components/Footer";
import Overview from "../AdminPortal/Components/Overview";
import Dashboards from "../AdminPortal/Components/Dashboards";
import Countriespage from "../AdminPortal/Components/Countriespage";
import UserAccount from "../AdminPortal/UserAccounts/UserAccount";
import TopBannerMainPage from "../AdminPortal/TopBanner/TopBannerMainPage";
import TopBanner1 from "../AdminPortal/TopBanner/TopBanner1";
import TopBanner2 from "../AdminPortal/TopBanner/TopBanner2";
import AboutUsMainPage from "../AdminPortal/AboutUs/AboutUsMainPage";
import AboutUsPage1 from "../AdminPortal/AboutUs/AboutUsPage1";
import AboutUsPage2 from "../AdminPortal/AboutUs/AboutUsPage2";
import NewsMainPage from "../AdminPortal/News/NewsMainPage";
import AdminNewsPage1 from "../AdminPortal/News/NewsPage1";
import AdminNewsPage2 from "../AdminPortal/News/NewsPage2";
import VoiceOfFarmersMainPage from "../AdminPortal/VoiceOfFarmers/VoiceOfFarmersMainPage";
import VoiceOfFarmers1 from "../AdminPortal/VoiceOfFarmers/VoiceOfFarmers1";
import VoiceOfFarmers2 from "../AdminPortal/VoiceOfFarmers/VoiceOfFarmers2";
import VoiceOfFarmers3 from "../AdminPortal/VoiceOfFarmers/VoiceOfFarmers3";
import VoiceOfFarmers4 from "../AdminPortal/VoiceOfFarmers/VoiceOfFarmers4";
import VoiceOfFarmers5 from "../AdminPortal/VoiceOfFarmers/VoiceOfFarmers5";
import AdminResourcesMainPage from "../AdminPortal/Resources/ResourcesMainPage";
import ResourcesPage1 from "../AdminPortal/Resources/ResourcesPage1";
import ResourcesPage2 from "../AdminPortal/Resources/ResourcesPage2";
import AdminCommuinitesmainPage from "../AdminPortal/CommunitiesPages/AdminCommuinitesmainPage";
import CommunitiesPage1 from "../AdminPortal/CommunitiesPages/CommunitiesPage1";
import CommunitiesPage1b from "../AdminPortal/CommunitiesPages/CommuniteisPage1b";
import CommunitiesPage2 from "../AdminPortal/CommunitiesPages/CommunitiesPage2";
import AdminReportMainPage from "../AdminPortal/ReportsPages/AdminReportMainPage";
import AdminBuyPage from "../AdminPortal/Components/AdminBuyPage";
import AdminProfile from "../AdminPortal/ServicesPages/AdminProfile";
import FarmingDemoPage1 from "../AdminPortal/ServicesPages/FarmingDemoPage1";

// Layout Component for Main Routes
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ChatBot />
      <Outlet />
      <Footer />
    </>
  );
};

// Layout Component for Admin Routes
const AdminLayout = () => {
  const location = useLocation();
  const isAdminProfilePage = location.pathname === "/admin/profile-page";
  const isCommunitiesPage1 = location.pathname === "/admin/communities-page-1";
  const isCommunitiesPage1b =
    location.pathname === "/admin/communities-page-1b";
  const isAdminBuyPage = location.pathname === "/admin/buy-page";
  const FarmingDemoPage1 = location.pathname === "/admin/farming-demo-page-1";

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        {/* Sidebar */}
        {!isAdminProfilePage &&
          !isCommunitiesPage1 &&
          !isCommunitiesPage1b &&
          !isAdminBuyPage &&
          !FarmingDemoPage1 && (
            <div className="w-full md:w-[400px] bg-white flex-shrink-0">
              <Sidebar />
            </div>
          )}

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <main className="flex-1">
            <Outlet />
          </main>
          <footer>
            <Footer2 />
          </footer>
        </div>
      </div>
    </div>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Homepage />} /> {/* Default admin page */}
          <Route path="overview" element={<Overview />} />
          <Route path="dashboards" element={<Dashboards />} />
          <Route path="countries-page" element={<Countriespage />} />
          <Route path="user-account" element={<UserAccount />} />
          <Route path="top-banner-main-page" element={<TopBannerMainPage />} />
          <Route path="top-banner-1" element={<TopBanner1 />} />
          <Route path="top-banner-2" element={<TopBanner2 />} />
          <Route path="about-us-main-page" element={<AboutUsMainPage />} />
          <Route path="about-us-page-1" element={<AboutUsPage1 />} />
          <Route path="about-us-page-2" element={<AboutUsPage2 />} />
          <Route path="services-main-page" element={<AdminServicesPage />} />
          <Route path="news-main-page" element={<NewsMainPage />} />
          <Route path="news-page-1" element={<AdminNewsPage1 />} />
          <Route path="news-page-2" element={<AdminNewsPage2 />} />
          <Route
            path="voice-of-farmaers-main-page"
            element={<VoiceOfFarmersMainPage />}
          />
          <Route
            path="voice-of-farmaers-page-1"
            element={<VoiceOfFarmers1 />}
          />
          <Route
            path="voice-of-farmaers-page-2"
            element={<VoiceOfFarmers2 />}
          />
          <Route
            path="voice-of-farmaers-page-3"
            element={<VoiceOfFarmers3 />}
          />
          <Route
            path="voice-of-farmaers-page-4"
            element={<VoiceOfFarmers4 />}
          />
          <Route
            path="voice-of-farmaers-page-5"
            element={<VoiceOfFarmers5 />}
          />
          <Route
            path="resources-main-page"
            element={<AdminResourcesMainPage />}
          />
          <Route path="resources-page-1" element={<ResourcesPage1 />} />
          <Route path="resources-page-2" element={<ResourcesPage2 />} />
          <Route
            path="commuities-main-page"
            element={<AdminCommuinitesmainPage />}
          />
          <Route path="communities-page-1" element={<CommunitiesPage1 />} />
          <Route path="communities-page-1b" element={<CommunitiesPage1b />} />
          <Route path="communities-page-2" element={<CommunitiesPage2 />} />
          <Route path="reports-main-page" element={<AdminReportMainPage />} />
          <Route path="buy-page" element={<AdminBuyPage />} />
          <Route path="profile-page" element={<AdminProfile />} />
          <Route path="farming-demo-page-1" element={<FarmingDemoPage1 />} />
        </Route>

        {/* Main routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<NewsSection />} />
          <Route path="/stories" element={<Stories />} />

          <Route path="/subscription" element={<Subscription />} />
          <Route path="/newspage1" element={<NewsPage1 />} />
          <Route path="/newspage2" element={<NewsPage2 />} />
          <Route path="/newspage3" element={<NewsPage3 />} />
          <Route path="/farmerstories1" element={<FarmersStories1 />} />
          <Route path="/farmerstories2" element={<FarmersStories2 />} />
          <Route path="/farmerstories3" element={<FarmersStories3 />} />
          <Route path="/farmerstories4" element={<FarmersStories4 />} />
          <Route path="/farmerstories5" element={<FarmersStories5 />} />
          <Route path="/farmerstories6" element={<FarmersStories6 />} />
          <Route path="/farmerstories7" element={<FarmersStories7 />} />
          <Route path="/farmerstories8" element={<FarmersStories8 />} />
          <Route path="/farmerstories9" element={<FarmersStories9 />} />
          <Route path="/signup1" element={<SignUp1 />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/recover" element={<Recover />} />

          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/ReportPage" element={<ReportPage />} />
          <Route path="/about" element={<TermsandConditions />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/data-policy" element={<DataProtection />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsandConditions />}
          />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/buy-page" element={<BuyPage />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/pay-page" element={<PayPage />} />
          {/* seed pages */}
          <Route path="/seed-overview" element={<SeedOverview />} />
          <Route path="/seed-dashboard" element={<SeedDashboard />} />
          <Route
            path="/seed-investment-tracker"
            element={<SeedInvestmentTracker />}
          />
          <Route path="/seed-donation-page" element={<SeedDonationPage />} />
          <Route
            path="/seed-donation-confirmation"
            element={<SeedDonationConfirmation />}
          />
          {/* Environmental Social Governance Pages */}
          <Route
            path="/environmental-social-governance-main-page"
            element={<EnvironmentalSocialGovernanceMainPage />}
          />
          {/* Environmental pages */}
          <Route path="/environmental-1a" element={<Environmental1a />} />
          <Route path="/environmental-1b" element={<Environmental1b />} />
          <Route path="/environmental-2a" element={<Environmental2a />} />
          <Route path="/environmental-2b" element={<Environmental2b />} />
          <Route path="/environmental-page1" element={<EnvironmentalPage1 />} />
          <Route path="/environmental-page2" element={<EnvironmentalPage2 />} />
          <Route path="/environmental-page3" element={<EnvironmentalPage3 />} />
          {/* Social pages */}
          <Route path="/social-1a" element={<Social1a />} />
          <Route path="/social-1b" element={<Social1b />} />
          <Route path="/social-2a" element={<Social2a />} />
          <Route path="/social-2b" element={<Social2b />} />
          <Route path="/social-page1" element={<SocialPage1 />} />
          <Route path="/social-page2" element={<SocialPage2 />} />
          <Route path="/social-page3" element={<SocialPage3 />} />
          {/* Governance pages */}
          <Route path="/governance-1a" element={<Governance1a />} />
          <Route path="/governance-1b" element={<Governance1b />} />
          <Route path="/governance-2a" element={<Governance2a />} />
          <Route path="/governance-2b" element={<Governance2b />} />
          <Route path="/governance-page1" element={<GovernancePage1 />} />
          <Route path="/governance-page2" element={<GovernancePage2 />} />
          <Route path="/governance-page3" element={<GovernancePage3 />} />
          {/* gallery and resouces pages */}
          <Route path="/resources-main-page" element={<ResourcesMainPage />} />
          <Route path="/crops-page1" element={<CropsPage1 />} />
          <Route path="/livestock-page1" element={<LivestockPage1 />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/register" element={<Register />} />
          <Route path="/countries-page" element={<CountriesPage />} />
          <Route
            path="/reports-view-more-page"
            element={<ReportsViewMorePage />}
          />
          {/* Production pages */}
          <Route path="/production-overview" element={<ProductionOverview />} />
          <Route path="/shop" element={<Shop />} />
          {/* Value addition pages */}
          <Route
            path="/valueaddition-overview"
            element={<ValueAdditionOverview />}
          />
          <Route
            path="/valueaddition-dashboard"
            element={<ValueAdditionDashboard />}
          />
          <Route
            path="/valueaddition-investment-tracker"
            element={<ValueAdditionInvestmentTracker />}
          />
          <Route
            path="/valueaddition-donation-page"
            element={<ValueAdditionDonationPage />}
          />
          <Route
            path="/valueaddition-donation-confirmation"
            element={<ValueAdditionDonationConfirmation />}
          />
          {/* ESG pages */}
          <Route path="/esg-overview" element={<ESGOverview />} />
          <Route path="/esg-dashboard" element={<ESGDashboard />} />
          <Route
            path="/esg-investment-tracker"
            element={<ESGInvestmentTracker />}
          />
          <Route path="/esg-donation-page" element={<ESGDonationPage />} />
          <Route
            path="/esg-donation-confirmation"
            element={<ESGDonationConfirmation />}
          />
          {/* cattles shop */}
          <Route path="/cattles-shop" element={<CattlesShop />} />
          {/* Vegetables pages */}
          <Route path="/vegetables-overview" element={<VegetablesOverview />} />
          <Route
            path="/vegetables-dashboard"
            element={<VegetablesDashboard />}
          />
          <Route
            path="/vegetables-investment-tracker"
            element={<VegetablesInvestmentTracker />}
          />
          <Route
            path="/vegetables-donation-page"
            element={<VegetablesDonationPage />}
          />
          <Route
            path="/vegetables-donation-confirmation"
            element={<VegetablesDonationConfirmation />}
          />
          {/* Horticulture pages */}
          <Route
            path="/horticulture-overview"
            element={<HorticultureOverview />}
          />
          <Route
            path="/horticulture-dashboard"
            element={<HorticultureDashboard />}
          />
          <Route
            path="/horticulture-investment-tracker"
            element={<HorticultureInvestmentTracker />}
          />
          <Route
            path="/horticulture-donation-page"
            element={<HorticultureDonationPage />}
          />
          <Route
            path="/horticulture-donation-confirmation"
            element={<HorticultureDonationConfirmation />}
          />
          {/* Cattles pages */}
          <Route path="/cattles-overview" element={<CattlesOverview />} />
          <Route path="/cattles-dashboard" element={<CattlesDashboard />} />
          <Route
            path="/cattles-investment-tracker"
            element={<CattlesInvestmentTracker />}
          />
          <Route
            path="/cattles-donation-page"
            element={<CattlesDonationPage />}
          />
          <Route
            path="/cattles-donation-confirmation"
            element={<CattlesDonationConfirmation />}
          />
          {/* gallery pages */}
          <Route path="/gallery-page-1" element={<GalleryPage1 />} />
          <Route path="/gallery-page-2" element={<GalleryPage2 />} />
          <Route path="/gallery-page-3" element={<GalleryPage3 />} />
          <Route path="/gallery-page-4" element={<GalleryPage4 />} />
          <Route path="/gallery-page-5" element={<GalleryPage5 />} />
          <Route path="/gallery-page-6" element={<GalleryPage6 />} />
          <Route path="/gallery-page-7" element={<GalleryPage7 />} />
          <Route path="/gallery-page-8" element={<GalleryPage8 />} />
          <Route path="/gallery-page-9" element={<GalleryPage9 />} />
          <Route path="/gallery-page-10" element={<GalleryPage10 />} />
          <Route path="/gallery-page-11" element={<GalleryPage11 />} />
          <Route path="/gallery-page-12" element={<GalleryPage12 />} />
        </Route>

        {/* Standalone pages */}
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
