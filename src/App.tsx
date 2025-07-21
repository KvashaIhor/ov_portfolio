import React, { useState } from "react";
import modelImg from './model.png';
import './output.css';
import { Mainpage } from "./components/MainPage/Mainpage";
import { Aboutsection } from "./components/Aboutsection/AboutSection";
import { TypesSection } from "./components/TypesSection/TypesSection";
import { PortfolioSection } from "./components/PortfolioSection/PortfolioSection";
import PortfolioLeadForm from "./components/LeadSection/LeadSection"

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Mainpage isOpenMenu={isOpenMenu} handleMenuChange={setIsOpenMenu}/>
      <Aboutsection />
      <TypesSection />
      <PortfolioSection />
      <PortfolioLeadForm />
    </div>
);}

export default App;