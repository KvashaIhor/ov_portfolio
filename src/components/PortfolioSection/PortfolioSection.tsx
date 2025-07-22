import { useState } from 'react';
import './PortfolioSection.scss';
import { MasonryPhotoAlbum } from "react-photo-album";
import { Card, CardContent } from "../ui/card";

import img1 from '../../assets/img1.png'
import personal_2 from '../../assets/personal/personal_1.jpeg'
import personal_1 from '../../assets/personal/personal_2.jpg'
import personal_3 from '../../assets/personal/personal_3.jpg'
import personal_4 from '../../assets/personal/personal_4.jpg'
import personal_5 from '../../assets/personal/personal_5.jpg'
import personal_6 from '../../assets/personal/personal_6.jpg'

import commercial_1 from '../../assets/commercial/commercial_1.jpg'
import commercial_2 from '../../assets/commercial/commercial_2.jpg'
import commercial_3 from '../../assets/commercial/commercial_3.jpg'
import commercial_4 from '../../assets/commercial/commercial_4.jpg'
import commercial_5 from '../../assets/commercial/commercial_5.jpg'
import commercial_6 from '../../assets/commercial/commercial_6.jpg'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

type photoType = 'personal' | 'commercial' | 'weddings'

const personalSet = [personal_6, personal_2, personal_3, personal_4, personal_1, personal_5];
const commercialSet = [commercial_2, commercial_3, commercial_1, commercial_4, commercial_5, commercial_6];
const weddingsSet = [img3, img3, img3, img3, img3, img3];

export const PortfolioSection = () => {
    const [currentType, setCurrentType] = useState('commercial');
    const [currentPhotosDisplay, setCurrentPhotosDisplay] = useState(commercialSet);

    return (
        <div className="portfolio" id="portfolio">
        <div className="headerport">
            <h1>PORTFOLIO</h1>
            <div className="nav-tabs">
                <div className={currentType === 'personal' ? "nav-tab nav-tab--active" : 'nav-tab'} 
                onClick ={() => {
                    setCurrentType('personal');
                    setCurrentPhotosDisplay(personalSet);
                }} >PERSONAL PHOTO SESSIONS</div>
                <div className={currentType === 'commercial' ? "nav-tab nav-tab--active" : 'nav-tab'}  onClick ={() => {
                    setCurrentType('commercial')
                    setCurrentPhotosDisplay(commercialSet);
                }}>COMMERCIAL PHOTOGRAPHY</div>
                {/*<div className={currentType === 'weddings' ? "nav-tab nav-tab--active" : 'nav-tab'} 
                onClick ={() => {
                    setCurrentType('weddings')
                    setCurrentPhotosDisplay(weddingsSet);
                }}>WEDDINGS</div>*/}
            </div>
        </div>
        {/* Mobile Block */}
        <div className="gallerymobile w-full max-w-screen-xl mx-auto space-y-2 p-4">
  {/* Full Width Block */}
  <div className="image-large">
  <img src={currentPhotosDisplay[0]} className="absolute inset-0 w-full h-full object-cover" alt="" />
  </div>

  {/* Two Half Widths */}
  <div className="flex flex-row md:flex-row gap-4">
    <div className="w-full md:w-1/2 h-64 bg-gray-400 relative overflow-hidden">
    <img src={currentPhotosDisplay[1]} className="absolute inset-0 w-full h-full object-cover" alt="" />
    </div>
    <div className="w-full md:w-1/2 h-64 bg-gray-400 relative overflow-hidden">
    <img src={currentPhotosDisplay[2]} className="absolute inset-0 w-full h-full object-cover" alt="" />
    </div>
  </div>

  {/* Full Width Block */}
  <div className="image-large">
  <img src={currentPhotosDisplay[3]} className="absolute inset-0 w-full h-full object-cover" alt="" />
  </div>

  {/* Two Half Widths */}
  <div className="flex flex-row md:flex-row gap-4">
    <div className="w-full md:w-1/2 h-64 bg-gray-400 relative overflow-hidden">
    <img src={currentPhotosDisplay[4]} className="absolute inset-0 w-full h-full object-cover" alt="" />
    </div>
    <div className="w-full md:w-1/2 h-64 bg-gray-400 relative overflow-hidden">
    <img src={currentPhotosDisplay[5]} className="absolute inset-0 w-full h-full object-cover" alt="" />
    </div>
  </div>
</div>
        {/* Desktop Block */}
        <div className="galleryfull">
  {/* Full Width Block */}
  <div className="image-large">
  <img src={currentPhotosDisplay[0]} className="picture" alt="" />
  </div>

  <div className="image-medium-1">
  <img src={currentPhotosDisplay[1]} className="picture" alt="" />
  </div>

  <div className="image-small-1">
  <img src={currentPhotosDisplay[2]} className="picture" alt="" />
  </div>

  <div className="image-small-2">
  <img src={currentPhotosDisplay[3]} className="picture" alt="" />
  </div>

  <div className="image-medium-3">
  <img src={currentPhotosDisplay[4]} className="picture" alt="" />
  </div>

  <div className="image-medium-4">
  <img src={currentPhotosDisplay[5]} className="picture" alt="" />
  </div>
  
</div>




    </div>
    )
}