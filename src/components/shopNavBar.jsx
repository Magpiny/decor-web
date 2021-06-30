import React from 'react';
import { Dropdown}  from 'react-bootstrap';

function shopNavBar() {
    return (
       <div className="d-inline-flex">
        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline mx-2 bg-light">
            <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        
       </div>
    )
}

export default shopNavBar;
