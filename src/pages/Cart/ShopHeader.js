import React from 'react';
import {Row } from 'react-bootstrap';
import * as myCartStyles from "./myCart.module.css";
import CartNav from './CartNav';

const ShopHeader = () => {
    return (
        <Row className={`${ myCartStyles.row } bg-light`}>

            <Row className={ `${ myCartStyles.advert } bg-white`}> </Row>
            <CartNav />
           
        </Row>
    )
}

export default ShopHeader;
