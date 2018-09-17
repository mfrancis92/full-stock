import React from 'react'
import "../assets/css/App.css";
import Slider from './SimpleSlider';
import img1 from '../assets/imgs/bin6.jpg';
import img2 from '../assets/imgs/bin7.jpg';
import img3 from '../assets/imgs/uptown.jpg';

const Index = () => {
    return(
        <div>
            <Slider />
            <div className="index-container">
                <img src={img1} className="img1" alt="" />
                <img src={img3} className="img3" alt="" />
                <img src={img2} className="img2" alt="" />
            </div>
        </div>
           
    )
}


export default Index;