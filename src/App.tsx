import React, { useEffect, useRef, useState } from "react";
import modelImg from './model.png';
import './output.css';
import { Mainpage } from "./components/MainPage/Mainpage";
import { Aboutsection } from "./components/Aboutsection/AboutSection";
import { TypesSection } from "./components/TypesSection/TypesSection";
import { PortfolioSection } from "./components/PortfolioSection/PortfolioSection";
import PortfolioLeadForm from "./components/LeadSection/LeadSection"
import { Play, Square, Clock, Calendar, X, Save, Target } from "lucide-react"
import { Button } from "../src/components/ui/button"
import { Footer } from "./components/Footer/Footer";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const mainRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (section: any) => {
    if (section === "home" && mainRef.current) mainRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "about" && aboutRef.current) aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "services" && servicesRef.current) servicesRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "portfolio" && portfolioRef.current) portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // You might want to tweak these based on your actual layout
      const sectionOffsets = [
        { name: 'home', ref: mainRef },
        { name: 'about', ref: aboutRef },
        { name: 'services', ref: servicesRef },
        { name: 'portfolio', ref: portfolioRef },
      ];
  
      const scrollPos = window.scrollY + window.innerHeight / 4; // Trigger a bit before center
  
      let current = 'home';
      for (let i = 0; i < sectionOffsets.length; i++) {
        const section = sectionOffsets[i];
        if (section.ref.current) {
          const { top } = section.ref.current.getBoundingClientRect();
          if (top + window.scrollY - 80 <= scrollPos) { // 80px offset for sticky nav, adjust if needed
            current = section.name;
          }
        }
      }
      setActiveSection(current);
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div ref={mainRef}>
        <Mainpage 
        scrollToSection={scrollToSection} 
        isOpenMenu={isOpenMenu} 
        handleMenuChange={setIsOpenMenu} 
        handleOpenModal={setIsLeadFormOpen}
        activeSection={activeSection}/>
      </div >
      <div ref={aboutRef}>
      <Aboutsection />
      </div>
      <div ref={servicesRef}>
      <TypesSection />
      </div>
      <div ref={portfolioRef}>
      <PortfolioSection />
      </div>
      <PortfolioLeadForm />
      <Footer/>
      {isLeadFormOpen && (
        <div className="fixed inset-0 z-[10050] flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
            onClick={() => setIsLeadFormOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white shadow-2xl max-w-xl w-full max-h-[80vh] h-auto overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300" id="modal">
          <Button variant="ghost" onClick={() => setIsLeadFormOpen(false)} className="h-16 w-16 p-0 hover:bg-white/50 closebutton">
                <span className="x">✕</span>
              </Button>
            {/* Header */}
            <PortfolioLeadForm/>
          </div>
        </div>
      )}
    </div>
);}

export default App;