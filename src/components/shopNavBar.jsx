import React from 'react';
import { categories } from '../data/data';
import { Row, Col, Dropdown}  from 'react-bootstrap';
import * as dropdownStyles from '../components/styles/shopNavbar.module.css'


const shopNavBar = () => {
    console.log(categories) 
    return (
        <Row className={`${dropdownStyles.drop} d-inline-flex row-cols-xs-2`} id="shopNavBar">
    
            
            {
                categories.map((item, index)=>{
                    return(
                    <Col key={index}>
                        <Dropdown className={`${dropdownStyles.drop} mx-2`}>
                        <Dropdown.Toggle id="dropdown-autoclose-true" variant="#50c878" >
                            {item.category}
                        </Dropdown.Toggle>
                        <Dropdown.Menu >
                        {item.subcategories.map((cat)=>(
                            
                            <Dropdown.Item href="#" key={cat.id}>{cat.name}</Dropdown.Item>
                    
                       
                        ))}
                         </Dropdown.Menu>

                    </Dropdown> 
                    </Col>
                    )
                })
            }
           
        </Row>
    )
}

export default shopNavBar;
