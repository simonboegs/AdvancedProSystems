module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "AdvancedProSystems",
  },
  plugins: [
    "react",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Heebo`],
        display: "swap",
      },
    },
  ],
  pathPrefix: "/AdvancedProSystems",
};
