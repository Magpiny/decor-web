import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
       <Container className="text-white mt-2 mb-2" id="about">
           <Row>
               <h1 className="text-center text-decoration-underline bg-light text-dark p-3">About US</h1>
           </Row>
           <Row>
               <Col>
               <h3>
               A&N Classic Décor is an online store that aims at 
               providing our clientele with different styles of high quality, 
               stylish, chic, functional home décor and home improvement products 
               at great prices. 

               

              
               </h3>
               </Col>

               <Col>
                <h3>
                We have 2 pick-up points in the Nariobi and Eldoret CBD to enable our
                clients have access to check and vet products before buying.

                We endeavor to keep things simple so that we can pass on the benefits 
                of great prices to our customers – hence the reason why we are primarily
                online. By simple, we mean we have no fancy shops, fixtures or 
                decorations at our pick up points so we can pass more savings on to 
                our customers.
                </h3>
               </Col>

               <Col>
               <h3>
               We target the opportunistic and entrepreneurial buyers with unique home
               fashion assortments for every room in the home — including kitchen, 
               decorative accessories and pillows, wall art, bedding and bath, kids’ 
               decor and toys and storage.
               </h3>
               </Col>
           </Row>
       </Container>
    )
};

export default About;
