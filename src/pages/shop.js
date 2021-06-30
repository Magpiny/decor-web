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

    

const shop = () => {
    return(
        
     <Container>
         <Row className="d-flex-inline justify-content-center text-success bg-white mb-2 p-3 mx-3">
             <ShopNavBar />
        </Row>
            <Row id="shop">
            {data.map(
                (item)=>(
                    <Card style={{ width: '18rem' }}  key={item.id} className="mx-3">

                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.title} </Card.Title>   
                        <Card.Text>
                            {item.description }.
                        </Card.Text>
                        <Button variant="success">{item.price}</Button>
                    </Card.Body>

                </Card>
                
                )
        
    )}
        </Row>
     </Container>
)
};

export default shop;

