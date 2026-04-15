import { useEffect, useState } from "react";
import ContatoSection from "./components/contatoSection";
import EventosSection from "./components/eventosSection";
import FooterSection from "./components/footerSection";
import HeaderSection from "./components/headerSection";
import HeroSection from "./components/heroSection";
import ParceriasSection from "./components/parceriasSection";
import TickerSection from "./components/tickerSection";
import VendedoresSection from "./components/vendedoresSection";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <HeaderSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <TickerSection />
      <EventosSection />
      <VendedoresSection />
      <ParceriasSection />
      <ContatoSection />
      <FooterSection />
    </>
  );
}

export default App;
