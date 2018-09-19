import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from "../assets/imgs/banner1.jpg";
import banner2 from "../assets/imgs/banner4.jpg";
import banner3 from "../assets/imgs/banner3.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplayspeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src ={banner1} className="banner" alt = "Yeezy Orginals banner" />
          </div>
          <div>
            <img src ={banner2} className="banner" alt = "Off-white banner" />
          </div>
          <div>
            <img src={banner3} className="banner" alt = "Adidas Boost banner" />
          </div>
        </Slider>
      </div>
    );
  }
}