import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedModels from "@/components/FeaturedModels";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import FeatureCards from "@/components/FeatureCards";
import QuickLinks from "@/components/QuickLinks";

const Index = () => {
  return (
    <div className="tabular-nums min-h-screen">
      <Header />
      
      <main className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
        <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
          {/* Hero Section */}
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
            <HeroSection />
            <FeaturedModels />
          </div>
          
          {/* Stats Section */}
          <div className="flex flex-col gap-8 md:gap-12">
            <StatsSection />
          </div>
          
          {/* How It Works */}
          <HowItWorks />
          
          {/* Feature Cards */}
          <FeatureCards />
          
          {/* Quick Links & Announcements */}
          <QuickLinks />
        </div>
      </main>
    </div>
  );
};

export default Index;