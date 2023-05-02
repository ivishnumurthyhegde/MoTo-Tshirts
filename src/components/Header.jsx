import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header(){
    return (
        <>
      <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home"> <img
              src="https://storeassets.im-cdn.com/media-manager/moto-tshirts/BQSDA6LBRlKbnAsgE9xT_logo-moto-tshirt.png"
              width="80"
              height="40"
              className="d-inline-block align-top container-fluid"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/buynow">Buy now</Nav.Link>
            <Nav.Link as={Link} to="/design">Design Tool</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}
export default Header;