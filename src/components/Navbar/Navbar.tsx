import React, { useState } from 'react';
import './Navbar.css';

type NavbarProps = {
    handleModal: (value: boolean) => void;
    scrollToSection: (section: string) => void;
    activeSection: string;
  };
  
  export const Navbar: React.FC<NavbarProps> = ({ handleModal, scrollToSection, activeSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(prev => !prev);
      document.body.classList.toggle("cs-open", !menuOpen);
    };

    return (
        <header id="cs-navigation" className={menuOpen ? 'cs-active' : ''}>
            <div className="cs-container">
                <a href="" className="cs-logo" aria-label="back to home">
                    <span><strong>Olena Vynohradova</strong></span>
                </a>
                <nav className="cs-nav" role="navigation">
                    <button className={`cs-toggle ${menuOpen ? 'cs-active' : ''}`} onClick={toggleMenu} aria-label="mobile menu toggle">
                        <div className="cs-box" aria-hidden="true">
                            <span className="cs-line cs-line1" aria-hidden="true"></span>
                            <span className="cs-line cs-line2" aria-hidden="true"></span>
                            <span className="cs-line cs-line3" aria-hidden="true"></span>
                        </div>
                    </button>
                     <div className="cs-ul-wrapper">
                        <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
                            <li className="cs-li">
                            <button className={`cs-li-link ${activeSection === 'home' ? 'cs-active' : ''}`}
                            onClick={() => {
                                scrollToSection("home")
                                setMenuOpen(false)
                                document.body.classList.remove("cs-open");}}>
                                    HOME
                                </button>
                            </li>
                            <li className="cs-li">
                            <button className={`cs-li-link ${activeSection === 'about' ? 'cs-active' : ''}`}
                            onClick={() => {
                                scrollToSection("about")
                                setMenuOpen(false)
                                document.body.classList.remove("cs-open");}}>
                                    ABOUT ME
                                </button>
                            </li>
                            <li className="cs-li">
                            <button className={`cs-li-link ${activeSection === 'services' ? 'cs-active' : ''}`}
                            onClick={() => {
                                scrollToSection("services")
                                setMenuOpen(false)
                                document.body.classList.remove("cs-open");}}>
                                    SERVICES
                                </button>
                            </li>
                            <li className="cs-li">
                            <button className={`cs-li-link ${activeSection === 'portfolio' ? 'cs-active' : ''}`}
                            onClick={() => {
                                scrollToSection("portfolio")
                                setMenuOpen(false)
                                document.body.classList.remove("cs-open");}}>
                                    PORTFOLIO
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <button className = "contactheader" onClick = {() => handleModal(true)}>
                                    <span>CONTACT ME</span>
                </button>
            </div>
        </header>
                                        
  );
}
