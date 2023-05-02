import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";




function Feature(){
    return(      <>
        <Container className="features" >    
        <Row>
            <Col className="featureCol">
            <div className="col-lg-8 features-box"> 
            <FontAwesomeIcon icon={faCheck} className="faIcons" />
            <h3 className="features-h3">Quality</h3>
        <p>We offer the best quality Tshirts</p>
        </div>
            </Col>
            <Col className="featureCol">
            <div className="col-lg-8 features-box">
            <FontAwesomeIcon icon={faHeart} className="faIcons" />
            <h3 className="features-h3">Customers satisfaction</h3>
             <p>We give more importantance to customers</p>
            
            </div>
            </Col>
            <Col className="featureCol">
            <div className="col-lg-8 features-box "> 
            <FontAwesomeIcon icon={faPen} className="faIcons" />
         <h3 className="features-h3">Custom design .</h3>
        <p>Creat your design and we will make it custom ready for you.</p>
         </div>
          </Col>
          </Row>
       
        </Container>
            </>);
}
export default Feature;