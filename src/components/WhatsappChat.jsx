import React from 'react';
import FloatingWhatsApp from 'react-floating-whatsapp';
import 'react-floating-whatsapp/dist/index.css';

const WhatsappChat = () => {
    return (
        <FloatingWhatsApp phoneNumber="254773812899" 
                                    accountName="A&N Classic Decor" 
                                    avatar="https://ik.imagekit.io/magpiny21/A_N_Decor/A_N_gqq2m6nj1.png" 
                                    darkMode={true} 
                                    className="floating-whatsapp"
          
          />
    )
}

export default WhatsappChat;
