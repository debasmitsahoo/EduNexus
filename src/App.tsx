import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./lib/auth-context";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Features from "./pages/Features";
import Benefits from "./pages/Benefits";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import K12Schools from "./pages/solutions/K12Schools";
import HigherEducation from "./pages/solutions/HigherEducation";
import CoachingCenters from "./pages/solutions/CoachingCenters";
import VocationalInstitutes from "./pages/solutions/VocationalInstitutes";
import LanguageSchools from "./pages/solutions/LanguageSchools";
import InternationalSchools from "./pages/solutions/InternationalSchools";
import K12Education from "./pages/solutions/K12Education";
import CorporateTraining from "./pages/solutions/CorporateTraining";
import FeeManagement from "./pages/solutions/FeeManagement";
import AdminDashboard from "./pages/solutions/AdminDashboard";
import StudentApp from "./pages/solutions/StudentApp";
import StaffApp from "./pages/solutions/StaffApp";
import RequestDemo from "./pages/request-demo";
import ContactSales from "./pages/contact-sales";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import PlanFeatures from "./pages/plan-features";
import FreePlan from "./pages/plans/FreePlan";
import StandardPlan from "./pages/plans/StandardPlan";
import EnterprisePlan from "./pages/plans/EnterprisePlan";
import AuthCallback from "./pages/AuthCallback";

// Admin Components
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Students from "./pages/admin/Students";
import Classes from "./pages/admin/Classes";
import Teachers from "./pages/admin/Teachers";
import Subjects from "./pages/admin/Subjects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router basename="/">
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
            <Route path="/solutions" element={<Solutions />} />
            
            {/* Solutions */}
            <Route path="/solutions/k12-schools" element={<K12Schools />} />
            <Route path="/solutions/higher-education" element={<HigherEducation />} />
            <Route path="/solutions/coaching-centers" element={<CoachingCenters />} />
            <Route path="/solutions/vocational-institutes" element={<VocationalInstitutes />} />
            <Route path="/solutions/language-schools" element={<LanguageSchools />} />
            <Route path="/solutions/international-schools" element={<InternationalSchools />} />
            <Route path="/solutions/k12-education" element={<K12Education />} />
            <Route path="/solutions/corporate-training" element={<CorporateTraining />} />
            <Route path="/solutions/fee-management" element={<FeeManagement />} />
            <Route path="/solutions/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/solutions/student-app" element={<StudentApp />} />
            <Route path="/solutions/staff-app" element={<StaffApp />} />
            
            {/* Feature Pages */}
            <Route path="/request-demo" element={<RequestDemo />} />
            <Route path="/contact-sales" element={<ContactSales />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            
            {/* Plan Pages */}
            <Route path="/plans/free" element={<FreePlan />} />
            <Route path="/plans/standard" element={<StandardPlan />} />
            <Route path="/plans/enterprise" element={<EnterprisePlan />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="students" element={<Students />} />
              <Route path="classes" element={<Classes />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="subjects" element={<Subjects />} />
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
