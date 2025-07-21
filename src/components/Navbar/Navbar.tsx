import React, { useState } from 'react';
import logo from '../../images/renuit_logo.png'
import './Navbar.css';

type NavbarProps = {
    handleModal: (value: boolean) => void;
  };
  
  export const Navbar: React.FC<NavbarProps> = ({ handleModal }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(prev => !prev);
      document.body.classList.toggle("cs-open", !menuOpen); // prevents scrolling when menu is open
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
                                <a href="#" className="cs-li-link cs-active">
                                    HOME
                                </a>
                            </li>
                            <li className="cs-li">
                                <a href="#aboutme" className="cs-li-link">
                                    ABOUT ME
                                </a>
                            </li>
                            <li className="cs-li">
                                <a href="#services" className="cs-li-link">
                                    SERVICES
                                </a>
                            </li>
                            <li className="cs-li">
                                <a href="#portfolio" className="cs-li-link">
                                    PORTFOLIO
                                </a>
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
