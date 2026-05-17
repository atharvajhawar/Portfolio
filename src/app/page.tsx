import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TechMarquee from "@/components/TechMarquee";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import AnimatedCounters from "@/components/AnimatedCounters";
import CodeTerminal from "@/components/CodeTerminal";
import ProjectCarousel from "@/components/ProjectCarousel";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import WorkProcess from "@/components/WorkProcess";
import GitHubHeatmap from "@/components/GitHubHeatmap";
import Achievements from "@/components/Achievements";
import ComparisonTable from "@/components/ComparisonTable";
import Advantages from "@/components/Advantages";
import CertBadges from "@/components/CertBadges";
import Testimonials from "@/components/Testimonials";
import LiveClock from "@/components/LiveClock";
import MusicWidget from "@/components/MusicWidget";
import FAQSection from "@/components/FAQSection";
import ResumeDownload from "@/components/ResumeDownload";
import FunFacts from "@/components/FunFacts";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <TechMarquee />
      <TrustedBy />
      <Services />
      <AnimatedCounters />
      <CodeTerminal />
      <ProjectCarousel />
      <CurrentlyBuilding />
      <WorkProcess />
      <GitHubHeatmap />
      <Achievements />
      <ComparisonTable />
      <Advantages />
      <CertBadges />
      <Testimonials />
      <LiveClock />
      <MusicWidget />
      <FAQSection />
      <ResumeDownload />
      <FunFacts />
      <CTABanner />
    </>
  );
}
