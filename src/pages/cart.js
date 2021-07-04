import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby";
import {Container,
       Row,
     } from 'react-bootstrap';
import CartHeader from '../components/CartHeader';
import CartItem from '../components/CartItem';


const cart = () => {
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cart</title>
                <meta name="description" content="A&N Decor add to cart" />
                <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
            </Helmet>
            {/* Empty space for adverts and other things like shopping suggestions etc */}
            <Row className="mb-0 mt-2 p-4 bg-white">
                
            </Row>
            
            {/* Cart header component  */}
            <Row className="mt-1 row-cols-1 row-cols-md-12">
                <CartHeader />
            </Row>

            {/* Display Cart Items */}
            <Row className="bg-light">
                <CartItem />

            </Row>

            {/* Display Saved Item or similar items to the ones in the cart */}
            <Row> </Row>
            
        </Container>
    )
}

export default cart;
