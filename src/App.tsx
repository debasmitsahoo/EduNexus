import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Features from "./pages/Features";
import Benefits from "./pages/Benefits";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import K12Schools from "./pages/solutions/K12Schools";
import HigherEducation from "./pages/solutions/HigherEducation";
import CoachingCenters from "./pages/solutions/CoachingCenters";
import VocationalInstitutes from "./pages/solutions/VocationalInstitutes";
import LanguageSchools from "./pages/solutions/LanguageSchools";
import InternationalSchools from "./pages/solutions/InternationalSchools";
import K12Education from "./pages/solutions/K12Education";
import CorporateTraining from "./pages/solutions/CorporateTraining";
import AutopayFeatures from "./pages/autopay-features";
import RequestDemo from "./pages/request-demo";
import ContactSales from "./pages/contact-sales";
import Login from "./pages/login";
import PlanFeatures from "./pages/plan-features";
import FreePlan from "./pages/plans/FreePlan";
import StandardPlan from "./pages/plans/StandardPlan";
import EnterprisePlan from "./pages/plans/EnterprisePlan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Policy Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          {/* Quick Links */}
          <Route path="/features" element={<Features />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Solutions */}
          <Route path="/solutions/k12-schools" element={<K12Schools />} />
          <Route path="/solutions/higher-education" element={<HigherEducation />} />
          <Route path="/solutions/coaching-centers" element={<CoachingCenters />} />
          <Route path="/solutions/vocational-institutes" element={<VocationalInstitutes />} />
          <Route path="/solutions/language-schools" element={<LanguageSchools />} />
          <Route path="/solutions/international-schools" element={<InternationalSchools />} />
          <Route path="/solutions/k12-education" element={<K12Education />} />
          <Route path="/solutions/corporate-training" element={<CorporateTraining />} />
          
          {/* Feature Pages */}
          <Route path="/autopay-features" element={<AutopayFeatures />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/login" element={<Login />} />
          
          {/* Plan Pages */}
          <Route path="/plans/free" element={<FreePlan />} />
          <Route path="/plans/standard" element={<StandardPlan />} />
          <Route path="/plans/enterprise" element={<EnterprisePlan />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
