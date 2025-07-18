import React, { useEffect, useState } from "react"
import './Mainpage.scss'
import iconMenu from '../../icons/icon-menu.png';
import iconPhone  from '../../icons/icon-phone-call.png';
import iconClose  from '../../icons/close.png';
import iconBattery from '../../icons/battery.png'
import {startTimer} from '../../utils/timer';
import useFixVH from "../../utils/useFixVH";
import { ContainerTextFlip } from "../ui/containter-text-flip";

interface MenuProps {
  isOpenMenu: boolean;
  handleMenuChange: (value: boolean) => void;
}

export const Mainpage = ({isOpenMenu, handleMenuChange}: MenuProps) => {
    const vhRef = useFixVH();
    useEffect(() => {
        startTimer('timer');
      }, []);

    return (
    <>
        <a id="close"></a>
        <section ref={vhRef} className="header">
          <div className="header__icons">
            <a href="#" className="header__icon header__icon--main">
                Olena Vynohradova
            </a>
            <div className="header__icons--right">
    
              <div className="header__numbers-wrapper">
                <div className="header__addresses">
                  <div className="header__address">
                    <p className="header__names">The MET Fifth Avenue</p>
                    <a
                      href="tel:+12125357710"
                      className="header__phone"
                    >
                      +1 212-535-7710
                    </a>
                  </div>
                  <div className="header__address">
                    <p className="header__names">The MET Cloisters</p>
                    <a
                      href="tel:+12129233700"
                      className="header__phone"
                    >
                      +1 212-923-3700
                    </a>
                  </div>
                </div>
                <a href="phone_number">
                  <img
                    src={iconPhone}
                    className="header__icon header__icon--phone"
                    alt="phone"
                  />
                </a>
              </div>
                <img
                  src={iconMenu}
                  className="header__icon header__icon--menu"
                  alt="menu icon"
                  onClick={() => handleMenuChange(true)}
                />
            </div>
          </div>
          <div className="hero__container">
            <div className="rec">
                    <div className="rec__circle"></div>
                    <p className="rec__rec">REC</p>
            </div>
            <div className="battery">
            </div>
            <div className="hero__photographer"></div>
            <div className="header__titles">
                <div className="header__title"><ContainerTextFlip/></div>
                <div className="header__subtitle">that you need</div>
                <div className="header__description">Unique style, inspired by the best trends.<br/> Shots, that will become a part of your personal or professional story</div>
                <div className="header__spacer"></div>
                <button className = "contactme">
                    <span> CONTACT ME
                    </span>
                </button>
            </div>
            <div className="frame frame--tl" />
            <div className="frame frame--tr" />
            <div className="frame frame--br" />
            <div className="frame frame--bl" />
            <div id="timer">00:00:00</div>
          </div>
        </section>
    
        <aside className={`menu ${isOpenMenu ? 'menu--open' : ''}`}>
          <div className="menu__icons">
            <a href="#" className="header__icon header__icon--main__menu">
                Olena Vynohradova
            </a>
              <img
                src={iconClose}
                onClick={() => handleMenuChange(false)}
                className="menu__icon menu__icon--close"
                alt="close"
              />
          </div>
    
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__section">
                <a
                  href="#"
                  className="nav__link"
                >
                  Home
                </a>
              </li>
              <li className="nav__section">
                <a
                  href="#hours"
                  className="nav__link"
                >
                  About us
                </a>
              </li>
              <li className="nav__section">
                <a
                  href="#onview"
                  className="nav__link"
                >
                  Now on view
                </a>
              </li>
              <li className="nav__section">
                <a
                  href="#explore"
                  className="nav__link"
                >
                  Explore online
                </a>
              </li>
              <li className="nav__section">
                <a
                  href="#contacts"
                  className="nav__link"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
    
          <div className="menu__addresses">
            <div className="menu__address">
              <p className="menu__names">The MET Fifth Avenue</p>
              <a
                href="tel:+12125357710"
                className="menu__phone"
              >
                +1 212-535-7710
              </a>
            </div>
            <div className="menu__address">
              <p className="menu__names">The MET Cloisters</p>
              <a
                href="tel:+12129233700"
                className="menu__phone"
              >
                +1 212-923-3700
              </a>
            </div>
          </div>
    
          <a
            href="tel:12125357710"
            className="menu__call"
          >
            Call to Order
          </a>
        </aside>
    </>
    )
}