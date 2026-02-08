import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveStats from "@/components/LiveStats";
import BrandsMarquee from "@/components/BrandsMarquee";
import Services from "@/components/Services";
import ProjectCarousel from "@/components/ProjectCarousel";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LiveStats />
      <BrandsMarquee />
      <Services />
      <ProjectCarousel />
      <Stats />
      <Features />
      <Portfolio />
      <Process />
      <TechStack />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <CTA />
      <Footer />
    </div>
  </PageTransition>
);

export default Index;
