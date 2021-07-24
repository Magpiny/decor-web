import React from 'react';
import {Row } from 'react-bootstrap';
import * as myCartStyles from "./myCart.module.css";
import CartNav from './CartNav';

const CartHeader = () => {
    return (
        <Row className={`${ myCartStyles.row } bg-light`}>

            <Row className={ `${ myCartStyles.advert } bg-white`}> </Row>
            <CartNav />
            <Row>
                <p>Your cart has 4 items </p>
            </Row>
            <br /> <br />
        </Row>
    )
}

export default CartHeader;
