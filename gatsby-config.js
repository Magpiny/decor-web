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

    {
      resolve: "@chec/gatsby-source-chec",
      options: {
        publicKey: "pk_2831206d6e60e69c52b1be5fc21e2e9c84fbfb6b74b5d",
        downloadImageAssets: true,
      },
    },

    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve:`gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 70,
          format: ["auto", "webp", "avif"],
          placeholder: "blurred",
        }
      },
    },

  
    
  ],
};
