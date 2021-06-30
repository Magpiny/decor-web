import React from 'react';
import * as footerStyles from './styles/footer.module.css';

const Footer = () => {
    let year = new Date().getFullYear();
    return (
       <footer className={`${footerStyles.myfooter} text-center p-3 mb-1`}>
           <h3>A&N Classic Decor &copy; { year }</h3>
       </footer>
    )
}

export default Footer;
