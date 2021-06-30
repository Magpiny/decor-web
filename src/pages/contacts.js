import React from 'react';
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { Col, Container, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import * as contactStyles from "./pagestyles/contacts.module.css";
//import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { MdMail, MdPhoneIphone } from 'react-icons/md';

init("user_uNzfN1oRLDBl29kn1Cxeu");

const contacts = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_ce4xc11",
            "template_ce2ckuo",
            e.target,
            "user_uNzfN1oRLDBl29kn1Cxeu"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    

    return (
       <Container>
           <Row className="text-dark bg-light mb-2">
               <h1 className="fs-1 text-center">Contacts</h1>
           </Row>
           <Row>
               <Col className="p-3"> 
                 <h1 className="text-dark bg-light mb-2" >
                     Write to us ...
                </h1>
                    <Form className="contact-form" onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Tommy" />
                        </Form.Group>

                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="tom@gmail.com" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        

                        
                        
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
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
                    href="mailto:daisywwachira@gmail.com"
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

