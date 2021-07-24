import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CartHeader from './cartHeader';
import CartBody from './CartBody';
import * as cartStyles from './myCart.module.css';



const myCart = () => {
    return (
        <Container>
            <CartHeader />
            <CartBody />
            <Row>
                <Col></Col>

                <Col>
                    <span className={ `${cartStyles.contShopping}` }>CONTINUE SHOPPING</span>
                </Col>

                <Col>
                    <span className={ `${cartStyles.checkout }`}>PROCEED TO CHECKOUT</span>
                </Col>
            </Row>
        </Container>
    )
}

export default myCart;
