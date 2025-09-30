import React from 'react';
import './Footer.css';
import nexaDevLogo from "./nexadev_logo.png"

export const Footer = () => {
    return (
<footer id="cs-footer-272">
    <div className="cs-container">
        <ul className="cs-nav">
            <li className="cs-nav-li">
                <span className="cs-header">SITEMAP</span>
            </li>
            <li className="cs-nav-li">
                <a className="cs-nav-link" href="#">HOME</a>
            </li>
            <li className="cs-nav-li">
                <a className="cs-nav-link" href="#mission">ABOUT ME</a>
            </li>
            <li className="cs-nav-li">
                <a className="cs-nav-link" href="#services">SERVICES</a>
            </li>
            <li className="cs-nav-li">
                <a className="cs-nav-link" href="#services">PORTFOLIO</a>
            </li>
            <li className="cs-nav-li">
                <a className="cs-nav-link" href="#contact">CONTACT FORM</a>
            </li>
        </ul>
        <ul className="cs-contact">
            <li className="cs-nav-li">
                <span className="cs-header">CONTACT INFORMATION</span>
            </li>
            <li className="cs-contact-li">
                <a className="cs-contact-link cs-address" href="">
                SEATTLE, WA
                </a>
            </li>
            <li className="cs-contact-li">
                <a className="cs-contact-link" href="tel: 352-806-2695">(352) 806-2695</a>
            </li>
            <li className="cs-contact-li">
                <a className="cs-contact-link" href="mailto:info@vynohradovashoots.com">info@ellvinogradova.com</a>
            </li>
        </ul>
        <span className="brand">Powered by <div className="lilspacer"></div><img src={nexaDevLogo} className="logo" alt="" /><strong>exaDev</strong></span>
    </div>
</footer>
                                
  );
}
