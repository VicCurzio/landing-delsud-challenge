import ContentSection from "./components/ContentSection/ContentSection";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import InfoBanner from "./components/InfoBanner/InfoBanner";
import Navbar from "./components/Navbar/Navbar";
import Sponsors from "./components/Sponsors/Sponsors";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ContentSection />
        <Sponsors />
        <Testimonials />
        <FAQ />
        <InfoBanner />
        <Footer />
      </main>
    </>
  );
}