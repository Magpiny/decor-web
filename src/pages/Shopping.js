import React from 'react';
import { Row, Card, Button, Container, } from 'react-bootstrap';
import ShopNavBar from "../components/shopNavBar";
import { data } from '../data/data';
import ShopHeader from './Cart/ShopHeader';
import  { MdAddShoppingCart } from 'react-icons/md';

const Shopping = () => {
    return (
     <Container>
         <Row>
            <ShopHeader />
         </Row>
         <Row>.</Row>
            <Row>
            <ShopNavBar />
            <Row id="shop">
            {data.map(
                (item)=>(
                    <Card style={{ width: '25rem' }}  key={item.id} className="mx-3 gx-3 gy-3">

                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.title} </Card.Title>   
                        <Card.Text>
                            {item.description }.
                        </Card.Text>
                        <Button style={{backgroundColor:"#50c850"}} className="mx-3 my-2">{item.price}</Button>

                        <Button style={{backgroundColor:"#50c850"}}>
                            Add to Cart <MdAddShoppingCart /> 
                        </Button>
                    </Card.Body>

                </Card>
                
                )
        
               )
          }
        </Row>

            
        </Row>
     </Container>
    )
}

export default Shopping;
