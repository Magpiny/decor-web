import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Table, TableHead, TableBody, Card, Ripple, CardBody, CardTitle, CardText, CardImage, CardFooter, Button } from 'react-bootstrap';
import './styles/cart_item.css';

const CartItem = () => {

    return (
        <Container className="mt-3 mb-3">

<h4 className="px-4 py-3 bg-white shadow-5 mx-4" style={ {color:'#50c850'} } >Your Cart has 4 items</h4>

<Row className='row-cols-1 row-cols-md-3 g-4 mb-3'>
    
    <Col>
        <Card  border='success' background='light'  className='h-100 mb-3 shadow-5' style={{ maxWidth: '22rem' }}>
            <Ripple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <CardImage src='https://ik.imagekit.io/magpiny21/A_N_Decor/homepageImage_qCju9YLji.jpg?tr=w-1080,h-1080,fo-auto' fluid alt='...' className="hover-shadow" />
                <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </Ripple>

            <CardBody>
                <CardTitle>Sofa</CardTitle>
                <CardText>
                Very comfortable 3 seater sofa...
                </CardText>
                <Button style={ {backgroundColor:'#50c850'} } className="mx-3" >Buy</Button>
                <Button style={ {backgroundColor:'#50c850'} } className="float-right" >Ksh 23000</Button>
            </CardBody>

            <CardFooter className='text-muted'>2 days ago</CardFooter>
        </Card>
    </Col>
    <h4 variant='h1' className='py-4'></h4>
</Row>

      {/* All computations goes in this row */}
                <Row className="mt-3 mb-3 mx-4 row-cols-12">
                    <Table responsive borderless className="caption-top mytable p-3" size='md'>
                    <caption>
                        <h2 > Your Purchase Summary</h2>
                    </caption>
                        <TableHead light>
                            <tr>
                            <th scope='col'>Type</th>
                            <th scope='col'>Price</th>
                            </tr>
                        </TableHead>

                          <TableBody>
                            <tr>
                            <th scope='row'>
                                <h3> Subtotal</h3>
                            
                            </th>
                            <td>KSH. 23,000</td>
                            
                            </tr>

                            <tr>
                            <th scope='row'>
                                <h4 variant='h3'>VAT</h4>
                                
                            </th>
                            <td>KSH. 120</td>
                            </tr>

                            <tr>
                            <th scope='row'>
                                <h4 variant='h3'>TOTAL</h4>
                            </th>
                            <td colSpan={2}>KSH.23,120</td> 
                            </tr>
                          </TableBody>
                        </Table>
                        
                </Row>

            <Row className="mb-3 px-4 mx-3 row-cols-1 row-cols-md-3">

                <Col></Col>
                <Col className='mb-3'>
                    <Link to="/shop">
                        <Button size='md' className='me-2' style={ {backgroundColor:'#50c850', color:'#ffd700'} } >
                            <h4  className='p-1'>CONTINUE SHOPPING</h4>
                        </Button>
                    </Link>
                    
                    <span></span>
                </Col>

                <Col>
                    <Button size='md' style={ {backgroundColor:'#ffd700', color:'white'} }>
                        <h4 className='p-1' >PROCEED TO CHECKOUT</h4>
                    </Button>
                </Col>
            
            </Row>
 </Container>
    )
};

export default CartItem;
