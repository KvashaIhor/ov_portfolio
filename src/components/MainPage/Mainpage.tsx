import React, { useEffect, useState } from "react"
import './Mainpage.scss'
import {startTimer} from '../../utils/timer';
import useFixVH from "../../utils/useFixVH";
import { ContainerTextFlip } from "../ui/containter-text-flip";
import { Navbar } from "../Navbar/Navbar";

interface MenuProps {
  isOpenMenu: boolean;
  handleMenuChange: (value: boolean) => void;
  handleOpenModal: (value: boolean) => void;
}

export const Mainpage = ({isOpenMenu, handleMenuChange, handleOpenModal}: MenuProps) => {
    const vhRef = useFixVH();
    useEffect(() => {
        startTimer('timer');
      }, []);

    return (
    <>
        <a id="close"></a>
        <section ref={vhRef} className="header">
          <div className="navbar-sticky"><Navbar handleModal={handleOpenModal}/></div>
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
                <button className = "contactme" onClick={() => handleOpenModal(true)}>
                    <span> LEAVE A REQUEST
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
    </>
    )
}