import React from 'react';
import { Row, Card, Button, Container, } from 'react-bootstrap';
import ShopNavBar from "../components/shopNavBar";
import { data } from '../data/data';
import ShopHeader from './Cart/ShopHeader';

const Shopping = () => {
    return (
     <Container>
         <Row>
            <ShopHeader />
         </Row>
            <Row>
            <ShopNavBar />
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
        
               )
          }
        </Row>

            
        </Row>
     </Container>
    )
}

export default Shopping;
