require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "decor-web",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    /* 

    {
      resolve: "@chec/gatsby-source-chec",
      options: {
        publicKey: `pk_28312b6fce15e73441d19455a13d9a4d6e36e1f3428b9`,
        downloadImageAssets: true,
      },
    },

     */

  
    
  ],
};
