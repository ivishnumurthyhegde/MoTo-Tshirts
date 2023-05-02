import React from "react";
import "../index.css";
import Button from 'react-bootstrap/Button';

function Design(){

    function changeBackground(e) {
        e.target.style.background = 'red';
      }
    function comeBack(e){
        e.target.style.background = 'blue';
    }

    return (
<div className="customdesign">

     <h3 className="custom-h3">We provide custom Tshirts too</h3>
     <h2 className="custom-h2">Make your own design and send us, we will make it ready for you</h2>

     <Button variant="primary" onMouseLeave={comeBack}  onMouseOver={changeBackground} active className="mt-3 " target="blank" href="https://moto-design-tshirt.vercel.app/">Start Designing</Button>
  
</div>
    );
}

export default Design;