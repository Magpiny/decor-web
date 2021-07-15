import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import * as headerStyles from './styles/header.module.css';


const Header = () => {
	return (
		<Container >
			<Row className={`${headerStyles.header} text-white px-3 mt-3`}>
				<br />
				<p className=" text-center fs-1">Make your home,</p>
				<p className="text-center f2">A Dream Home with A&N Classic Decor.</p>
				<p className="h1 text-center">Home is where the heart belongs and so make it reflect what's in your heart</p>

				<Button variant="50c850" size='sm' className={`${ headerStyles.button } fs-3 text-light`}>
					<span className={`${ headerStyles.button } p-3`}>Shop Now</span>
				</Button>
				
			</Row>
			
		</Container>
	)
}

export default Header;

