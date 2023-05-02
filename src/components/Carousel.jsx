import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/drifit_shivachant_coffee-removebg-preview1.png";
import img2 from "../images/ganesha-removebg-preview.png";
import img3 from "../images/kannadakampu_skyblue-removebg-preview.png";
import img4 from "../images/yakshagana_red-removebg-preview.png";
import img5 from "../images/jaikarnataka_lightblue-removebg-preview.png";

import "../index.css";

function ControlledCarousel(){

    return (
        <div className="gallery">
        <h2 className="gallery-h2"> Tshirt Gallery</h2>
      <Carousel variant="dark" >
      <Carousel.Item className="sliders">
        <img
          className="d-block w-65"
          src={img2}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item className="sliders">
        <img
          className="d-block w-65"
          src={img3}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item className="sliders">
        <img
          className="d-block w-65"
          src={img4}
          alt="Third slide"
        />
      
      </Carousel.Item>
      <Carousel.Item className="sliders">
        <img
          className="d-block w-65"
          src={img1}
          alt="Fourth Slide"
        />
        </Carousel.Item>
        <Carousel.Item className="sliders">
        <img
          className="d-block w-65"
          src={img5}
          alt="Fifth Slide"
        />
        </Carousel.Item>
    </Carousel>
    </div>
    );
}

export default ControlledCarousel;