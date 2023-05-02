import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "../images/drifit_kannadagari_black-removebg-preview (1).png";
import img2 from "../images/bg_NamahShivaay_blue-removebg-preview.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../index.css";



function Buynow(){
    return (
        <>
    <h2 className="gallery-h2">Buy now</h2>
<Container>
      <Row>
        <Col>   
        <div className="BuynowDiv">
        <Card style={{ width: '25rem' }} >
        <Card.Img variant="top" className="card-img" src={img1} />
        <Card.Body>
          <Card.Title>Kannada Tshirt</Card.Title>
          <Card.Text>
          Best quality dark drifit tshirt for proud kannadigas. Wear it for years with Pride. 180gsm tshirt suitable for casual wear and functions too.
          </Card.Text>
          <Button variant="outline-danger" target="blank" href="https://moto-tshirts.myinstamojo.com/product/3345519/drifit-t-shirts-best-quality-180-gsm">Buy Now</Button>
        </Card.Body>
      </Card>
      </div></Col>
        <Col>
        <div className="BuynowDiv">
        <Card style={{ width: '25rem' }} >
        <Card.Img variant="top" className="card-img"  src={img2} />
        <Card.Body>
          <Card.Title>Namah-Shivaay</Card.Title>
          <Card.Text>
          Best quality dark drifit tshirt. Wear it for years with belive in God. 180gsm tshirt suitable for casual wear and functions too.
          </Card.Text>
          <Button variant="outline-danger" target="blank" href="https://moto-tshirts.myinstamojo.com/product/3345519/drifit-t-shirts-best-quality-180-gsm">Buy Now</Button>
        </Card.Body>
      </Card>
      </div>
        </Col>
      </Row>
     
    </Container>





     
      
      </>
    );
}
export default Buynow;