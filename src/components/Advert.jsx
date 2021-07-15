import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { BsPersonFill } from 'react-icons/bs'; 
import { ImCart } from 'react-icons/im';
import { Container, Col, Badge, } from 'react-bootstrap';
import { Link } from 'gatsby';
import Login from '../pages/Login';

const Advert = () => {
    return (
        <Container className="d-flex mx-3 p-2 text-white">
            <Col>
                <StaticImage src="https://ik.imagekit.io/magpiny21/A_N_Decor/A_N_gqq2m6nj1.png"
                   width={70}
                   height={70}
                 />

            </Col>

            <Col className="d-inline-flex justify-content-end" >  

                <div >
                    <Link to="/">
                        Cart <ImCart /> 
                        <Badge className="d-inline-flex mx-0 px-0 text-warning">9</Badge>
                    </Link>
                    
                </div>

                <div className="px-4 bd-highlight">
                    <Link to='../Login/' >
                        Login <BsPersonFill  />
                    </Link>
                    
                </div>
            </Col>
            
        </Container>
    )
}

export default Advert;
