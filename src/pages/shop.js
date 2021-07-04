import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Helmet } from "react-helmet";
import { data } from '../data/data';
import {
    Card,
    Button,
    Row,
    Container
} from 'react-bootstrap';
import ShopNavBar from '../components/shopNavBar';
import * as aboutStyles from './pagestyles/about.module.css';

    

const shop = () => {
    return(
        
     <Container className={`${aboutStyles.about}`}>
         <Row className="d-flex-inline justify-content-center text-success mb-2 mx-3 row-cols-xs-2">
             <ShopNavBar />
        </Row>
            <Row id="shop">
            {data.map(
                (item)=>(
                    <Card style={{ width: '18rem' }}  key={item.id} className="mx-3 gx-3 gy-3">

                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.title} </Card.Title>   
                        <Card.Text>
                            {item.description }.
                        </Card.Text>
                        <Button style={{backgroundColor:"#50c850"}}>{item.price}</Button>
                    </Card.Body>

                </Card>
                
                )
        
    )}
        </Row>
     </Container>
)
};

export default shop;

