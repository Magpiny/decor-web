import React from 'react';
import { Row, Card, Button, } from 'react-bootstrap';
import ShopNavBar from "../../components/shopNavBar";
import { data } from '../../data/data';
import {AiTwotoneDelete} from 'react-icons/ai'

const CartBody = () => {
    return (
        <Row className="mb-3">
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
                        <Button style={{backgroundColor:"#50c850"}} className="mx-2 my-1">{item.price}</Button>
                        <Button style={{backgroundColor:"#50c850"}}>
                           Remove <AiTwotoneDelete style={{backgroundColor:"#50c850"}}/>
                        </Button>

                    </Card.Body>

                    <Card.Footer>
                        <span>Quantity: 6 </span>
                    </Card.Footer>

                </Card>
                
                )
        
               )
          }
        </Row>

            
        </Row>
    )
}

export default CartBody;
