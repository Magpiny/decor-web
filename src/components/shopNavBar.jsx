import React from 'react';
import { Dropdown}  from 'react-bootstrap';

function shopNavBar() {
    return (
       <div className="d-inline-flex">
        <Dropdown className="d-inline mx-2 bg-success">
            <Dropdown.Toggle id="dropdown-autoclose-true">
            Living Room
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg-success">
                <Dropdown.Item href="#">Throw Pillows</Dropdown.Item>
                <Dropdown.Item href="#">Candle holders</Dropdown.Item>
                <Dropdown.Item href="#">Corner stand </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
            Dining
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Cutlery </Dropdown.Item>
                <Dropdown.Item href="#">Table runners</Dropdown.Item>
                <Dropdown.Item href="#">Napkin rings</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2 bg-success">
            <Dropdown.Toggle id="dropdown-autoclose-true">
            Bedroom
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Throw pillows</Dropdown.Item>
                <Dropdown.Item href="#">Fur mats</Dropdown.Item>
                <Dropdown.Item href="#">Furniture</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
            Kitchen
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Kitchen mats</Dropdown.Item>
                <Dropdown.Item href="#">Kitchen organizati</Dropdown.Item>
                <Dropdown.Item href="#">Nordic ceramic set</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
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

        <Dropdown className="d-inline mx-2 bg-light">
            <Dropdown.Toggle id="dropdown-autoclose-true">
             Rugs/Mats
            </Dropdown.Toggle>
            
            <Dropdown.Menu>
                <Dropdown.Item href="#">Faux fur mats</Dropdown.Item>
                <Dropdown.Item href="#">Heart shaped mats</Dropdown.Item>
                <Dropdown.Item href="#">Kitchen mats</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        
       </div>
    )
}

export default shopNavBar;
