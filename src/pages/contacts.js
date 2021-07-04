import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import * as contactStyles from "./pagestyles/contacts.module.css";
//import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { MdPhoneIphone, MdMail } from 'react-icons/md';

const contacts = () => {


    return (
       <Container id="contacts" className={`${contactStyles.footer}`}>
           <Row className="text-dark bg-light mb-2">
               <h1 className="fs-1 text-center">Contacts</h1>
           </Row>
           <Row>
               <Col className="p-3 text-light"> 
                 <p>
                    <span className="fs-3">Address</span>: Shop E3,1st Floor, Ebrahim's Shopping Mall, Moi Ave, Nairobi
                 </p>

                 <p>
                    <span className="fs-3">Open</span> : Monday - Saturday, 9:00am - 6:30pm 
                 </p>
               </Col>

               <Col className="p-4">
               <h2>Social Media</h2>
               <Button 
                size="lg"
                togle
                tag="a"
                style={{ backgroundColor: "#50c850" }}
                href="tel:+254723265369"
               >
                <MdPhoneIphone /> Call US
               </Button>
               <br />

               
                <a
                className={`${contactStyles.whatsapp}`}
                href="https://wa.me/254723265369"
                title="click to chat A&N Classic Decor"
                >
                WhatsApp
                </a>
               <br />

               <Button
                    size="lg"
                    togle
                    tag="a"
                    style={{ backgroundColor: "#50c850" }}
                    href="mailto:anclassicdecor@gmail.com"
               >
                   <MdMail /> Send an email
               </Button>

               </Col>

               <Col></Col>
           </Row>
       </Container>
    )
}

export default contacts;

