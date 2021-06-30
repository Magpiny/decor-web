
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as carouselStyles from './styles/caraousel.module.css';

const MyCarousel = () => {
    return(

        <div  >

        <StaticImage src="https://ik.imagekit.io/magpiny21/A_N_Decor/Pic_4_Ggi6Ea-rv.jpg"
                     alt="decor-sofa"
                     placeholder="blurred"
                     loading="eager"
                     layout="fullWidth"
                     
                     className={`${carouselStyles.mycarousel} mb-3`}

          />

    </div>
    )
};

export default MyCarousel;
