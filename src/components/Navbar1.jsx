import React from 'react';
import {
  Navbar,
  NavDropdown,
  Nav,
  Badge
 } from 'react-bootstrap';
 import * as navStyles from './styles/navbar.module.css';
 import { BsPersonFill } from 'react-icons/bs'; 
 import { ImCart } from 'react-icons/im';

const Navbar1 = () => {
  return (
    <div className={`${navStyles.mynav} `}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={`${navStyles.mynav} `}>
        <Navbar.Brand href="./">A&N Classic Decor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Kitchen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
             {"                                          "}
          <Nav className="mx-4">
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link href="#deets">
              <BsPersonFill />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <ImCart /><Badge bg="secondary" className="mx-0">9</Badge>
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      
    </div>
  )
}

export default Navbar1;

