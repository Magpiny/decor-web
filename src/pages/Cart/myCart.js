import React from 'react';
import {Container} from 'react-bootstrap';
import CartHeader from './cartHeader';
import CartBody from './CartBody';



const myCart = () => {
    return (
        <Container>
            <CartHeader />
            <CartBody />
        </Container>
    )
}

export default myCart;
