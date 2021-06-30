import React from 'react';
import { Button, Container, Row } from 'react-bootstrap'
import * as headerStyles from './styles/header.module.css';


const Header = () => {
	return (
		<Container className={`${headerStyles.header} bg-dark text-white px-3 mt-3`}>
			<Row>
				<br />
				<p className=" text-center fs-1">Make your home</p>
				<p className="text-center f2">Dream Home with homely Decor</p>
				<p className="h1 text-center">Home is where the heart belongs and so make it reflect what's in your heart</p>

				<Button size='sm' variant='success' className="fs-3">Shop Now</Button>
				
			</Row>
		</Container>
	)
}

export default Header;

