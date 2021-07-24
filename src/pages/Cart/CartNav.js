
import React from 'react';
import { Link } from 'gatsby';
import { Row, Badge, Container } from 'react-bootstrap';
import * as CartNavStyles from "./myCart.module.css";
import { ImCart } from 'react-icons/im';

const CartNav = () => {
    return (
       
        <Row className={`${CartNavStyles.cartNav } fs-3 d-inline-flex`}>
           <span className="d-flex justify-content-start">
            <Link to="../../" style={{textDecoration:"none", color:"white"}}>
                A&N Classic Decor
            </Link>
           </span>

           <span className="d-flex justify-content-end text-white">
                Cart <ImCart /> 
                <Badge className="d-inline-flex mx-0 px-0 text-warning">0</Badge>      
           </span>

        </Row>

       
    )
}

export default CartNav;
