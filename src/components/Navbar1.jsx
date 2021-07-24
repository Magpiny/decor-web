import React from 'react';
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
 } from 'react-bootstrap';
 import * as navStyles from './styles/navbar.module.css';
import { Link } from 'gatsby';
import Contacts from '../pages/contacts'

const Navbar1 = () => {
  return (
    
    <Container className={`${navStyles.mynav}`}>
        <Navbar bg="dark" expand="lg" className="text-light">
         
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0 text-light"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="./" className="text-white fs-2">Home</Nav.Link>
              
              <Nav.Link href="#shop" className="text-white fs-2">
                <Link to="../Shopping/" style={{textDecoration:"none", color:"white" }}>
                  Shop
                </Link>
              </Nav.Link>
              
              {/* 
                    <NavDropdown title="Our services" id="navbarScrollingDropdown" className="text-white fs-2" >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
              */}

              <Nav.Link href="#contacts" className="text-white">
                <Link to='../contact_us/' style={{textDecoration:"none", color:"white" }}>
                Contacts
                </Link>
                
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
          <Nav >
            <Form className="d-flex justify-content-end mx-3">
                <FormControl
                  type="search"
                  placeholder="Search..."
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
          </Nav>
        </Navbar>
    </Container>
  )
}

export default Navbar1;

