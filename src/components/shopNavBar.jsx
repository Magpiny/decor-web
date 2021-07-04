import React from 'react';
import { Row,Col, Dropdown}  from 'react-bootstrap';
import * as dropdownStyles from './styles/shopNavbar.module.css';

function shopNavBar() {
    return (
       <Row className={`${dropdownStyles.drop} d-inline-flex row-cols-xs-2`}>
           <Col>
            <Dropdown className={`${dropdownStyles.drop} d-inline mx-2`}>
                <Dropdown.Toggle id="dropdown-autoclose-true" variant="#50c878" >
                Living Room
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Throw Pillows</Dropdown.Item>
                    <Dropdown.Item href="#">Candle holders</Dropdown.Item>
                    <Dropdown.Item href="#">Corner stand </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
           </Col>
       

        <Col>
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true" variant="#50c878" >
                Dining
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Cutlery </Dropdown.Item>
                    <Dropdown.Item href="#">Table runners</Dropdown.Item>
                    <Dropdown.Item href="#">Napkin rings</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>

       <Col>
        <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true" variant="#50c878">
                Bedroom
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Throw pillows</Dropdown.Item>
                    <Dropdown.Item href="#">Fur mats</Dropdown.Item>
                    <Dropdown.Item href="#">Furniture</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
       </Col>

        <Col>
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true" variant="#50c878">
                Kitchen
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Kitchen mats</Dropdown.Item>
                    <Dropdown.Item href="#">Kitchen organizati</Dropdown.Item>
                    <Dropdown.Item href="#">Nordic ceramic set</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </Col>
        
        <Col>
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true" variant="#50c878">
                Storage and Organization
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#">Laundry basket</Dropdown.Item>
                    <Dropdown.Item href="#">Washing machine covers</Dropdown.Item>
                    <Dropdown.Item href="#">Floor standing hangers</Dropdown.Item>
                    <Dropdown.Item href="#">Over the door hangers</Dropdown.Item>
                    <Dropdown.Item href="#">Cosmetics organizers</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>

        <Col>
            <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true" variant="#50c878">
                Rugs/Mats
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Faux fur mats</Dropdown.Item>
                    <Dropdown.Item href="#">Heart shaped mats</Dropdown.Item>
                    <Dropdown.Item href="#">Kitchen mats</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>
        
       </Row>
    )
}

export default shopNavBar;
