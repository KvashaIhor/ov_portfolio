import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
<footer id="cs-footer-272">
    <div className="cs-container">
        <ul className="cs-nav">
            <li className="cs-nav-li">
                <span className="cs-header">Sitemap</span>
            </li>
            <li className="cs-nav-li">
                <a className="cs-nav-link" href="#">Home</a>
            </li>
            <li className="cs-nav-li">
                <a className="cs-nav-link" href="#mission">About Me</a>
            </li>
            <li className="cs-nav-li">
                <a className="cs-nav-link" href="#services">Services</a>
            </li>
            <li className="cs-nav-li">
                <a className="cs-nav-link" href="#services">Portfolio</a>
            </li>
            <li className="cs-nav-li">
                <a className="cs-nav-link" href="#contact">Contact form</a>
            </li>
        </ul>
        <ul className="cs-contact">
            <li className="cs-nav-li">
                <span className="cs-header">Contact</span>
            </li>
            <li className="cs-contact-li">
                <a className="cs-contact-link cs-address" href="">
                Seattle, WA
                </a>
            </li>
            <li className="cs-contact-li">
                <a className="cs-contact-link" href="tel: 352-806-2695">(352) 806-2695</a>
            </li>
            <li className="cs-contact-li">
                <a className="cs-contact-link" href="mailto:info@vynohradovashoots.com">info@vynohradovashoots.com</a>
            </li>
        </ul>
    </div>
</footer>
                                
  );
}
