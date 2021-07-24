import { Link } from 'gatsby';
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

				
					<span className={`${ headerStyles.shopNow }`}>
						<Link to="../Shopping/" style={{textDecoration:"none"}}>
							<span className={`${ headerStyles.button } p-3 text-light`}>Shop Now</span>
						</Link>
					</span>
				
				
			</Row>
			
		</Container>
	)
}

export default Header;

