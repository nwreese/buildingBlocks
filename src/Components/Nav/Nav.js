import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
function Nav2() {

    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#agenda">Agenda</Nav.Link>
          <Nav.Link href="#Registration">Registration</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}
export default Nav2;