import React from 'react';
import Navbar1 from '../components/Navbar1';
import { Container } from 'react-bootstrap';
import MyCarousel from '../components/Carousel';
import { Helmet } from 'react-helmet';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Shop from './shop';
import Advert from '../components/Advert';
import About from './About';
import Contacts from './contacts';
import Footer from '../components/Footer';
// import WhatsappChat from '../components/WhatsappChat';

//import Contacts from './contacts';

const index = () => {
      return (
            
		<Container fluid='sm' className="bg-dark" >
			<Helmet>
				<title>A&N Classic Decor</title>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
					integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
					crossorigin="anonymous"
				/>
			
			</Helmet>
			    <Advert />
				<Navbar1 /> 
				<br />

				<Header />
				<br />
				<MyCarousel />

				<br />
				<Shop />
				<br />

				<About />
				<br />

				<Contacts />

			{/* 	<WhatsappChat /> */}
				<br />
				<Footer />

				<br />
				<div>
				 
				</div>
		</Container>
      )
}

export default index;
