import React from 'react';
import {Container, Row, Col, Button, Table } from 'react-bootstrap';
import CartHeader from './cartHeader';
import CartBody from './CartBody';
import * as cartStyles from './myCart.module.css';



const myCart = () => {
    return (
        <Container className="bg-light mb-3">
            <CartHeader />
            <CartBody />

            <Row id ="tabulation" className="d-flex justify-content-end p-4">
                <h4 className="d-flex justify-content-end ">Purchase Summary</h4>
                <Table striped bordered hover size="sm" className="w-50 p-3 ">
                    <thead>
                        <tr>
                        
                        <th>Sub Total</th>
                        <td>Ksh.173,000</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>VAT</th>
                        <td>Ksh.4500</td>
                        </tr>
                        <tr>
    
                        <th>Shipping fee</th>
                        <td>Ksh.2500</td>
                        
                        </tr>
                        <tr>
                        <th >Total</th>
                        <td>Ksh.180,000</td>
                        
                        </tr>
                    </tbody>
                    </Table>
                </Row>

            <Row className="mt-3">

                <Col>
                    
                </Col>

                <Col className="d-flex justify-content-end ">
                    <Button className={ `${cartStyles.contShopping} px-4 mx-3` }>CONTINUE SHOPPING</Button>
                    <Button className={ `${cartStyles.checkout }`}>PROCEED TO CHECKOUT</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default myCart;
