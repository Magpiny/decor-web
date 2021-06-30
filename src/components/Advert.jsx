import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Advert = () => {
    return (
        <div className="d-inline-flex mx-3 p-2">
            <div>
                <StaticImage src="https://ik.imagekit.io/magpiny21/A_N_Decor/A_N_gqq2m6nj1.png"
                   width={80}
                   height={80}
                 />
            </div>
            
        </div>
    )
}

export default Advert;
