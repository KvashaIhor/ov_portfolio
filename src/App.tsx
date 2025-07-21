import React, { useState } from "react";
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

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Mainpage isOpenMenu={isOpenMenu} handleMenuChange={setIsOpenMenu} handleOpenModal={setIsLeadFormOpen}/>
      <Aboutsection />
      <TypesSection />
      <PortfolioSection />
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