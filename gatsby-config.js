require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "A And N Classic Decor",
    description:"A classic decor website for all your decor needs"
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
        publicKey: `process.env.CHEC_PUBLIC_KEY`,
        downloadImageAssets: true,
      },
    },

     */

  
    
  ],
};
