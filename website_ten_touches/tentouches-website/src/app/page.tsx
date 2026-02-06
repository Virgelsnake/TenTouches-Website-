import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { MethodologySection } from "@/components/sections/methodology";
import { ProblemSection } from "@/components/sections/problem";
import { SearchByMemorySection } from "@/components/sections/search-by-memory";
import { SolutionSection } from "@/components/sections/solution";
import { FeaturesSection } from "@/components/sections/features";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { UseCasesSection } from "@/components/sections/use-cases";
import { DownloadSection } from "@/components/sections/download";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MethodologySection />
        <ProblemSection />
        <SearchByMemorySection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UseCasesSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
