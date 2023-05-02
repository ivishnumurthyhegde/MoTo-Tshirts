import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../index.css";
import Image from 'react-bootstrap/Image';
import img from "../images/shiva_lightcoffee-removebg-preview.png";
import ThreeSixty from 'react-360-view';



function Home() {
  function changeBackground(e) {
    e.target.style.background = '#CD5C5C';
  }
  function comeBack(e) {
    e.target.style.background = '#4E92DC ';
  }
  return (
    <>

      <div className='homeContainer'>
        <Row >
          <Col>
            <h1 className='title-h1'>We offer high-quality T-shirts and customizable
              designs to cater to your unique preferences</h1>
            <Button variant="primary" size="lg" active className='mt-3'
              onMouseLeave={comeBack} onMouseOver={changeBackground}
              target='blank' href='https://moto-tshirts.myinstamojo.com/'>
              Our Store
            </Button>
          </Col>
          <Col className='homeImg'>
            <Image src={img} rounded />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;