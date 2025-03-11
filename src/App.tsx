
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";

// Pages
import Index from "./pages/Index";
import BookDetails from "./pages/BookDetails";
import Explore from "./pages/Explore";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Categories from "./pages/Categories";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import Bestsellers from "./pages/Bestsellers";

// Category Pages
import Fiction from "./pages/categories/Fiction";
import NonFiction from "./pages/categories/NonFiction";
import Mystery from "./pages/categories/Mystery";
import MysteryThriller from "./pages/categories/MysteryThriller";
import SciFi from "./pages/categories/SciFi";
import Fantasy from "./pages/categories/Fantasy";
import Romance from "./pages/categories/Romance";
import Horror from "./pages/categories/Horror";
import Biography from "./pages/categories/Biography";
import History from "./pages/categories/History";
import Business from "./pages/categories/Business";
import SelfHelp from "./pages/categories/SelfHelp";
import Technology from "./pages/categories/Technology";
import Cookbooks from "./pages/categories/Cookbooks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/bestsellers" element={<Bestsellers />} />
            
            <Route path="/categories/fiction" element={<Fiction />} />
            <Route path="/categories/non-fiction" element={<NonFiction />} />
            <Route path="/categories/mystery" element={<Mystery />} />
            <Route path="/categories/mystery-thriller" element={<MysteryThriller />} />
            <Route path="/categories/sci-fi" element={<SciFi />} />
            <Route path="/categories/fantasy" element={<Fantasy />} />
            <Route path="/categories/romance" element={<Romance />} />
            <Route path="/categories/horror" element={<Horror />} />
            <Route path="/categories/biography" element={<Biography />} />
            <Route path="/categories/history" element={<History />} />
            <Route path="/categories/business" element={<Business />} />
            <Route path="/categories/self-help" element={<SelfHelp />} />
            <Route path="/categories/technology" element={<Technology />} />
            <Route path="/categories/cookbooks" element={<Cookbooks />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
