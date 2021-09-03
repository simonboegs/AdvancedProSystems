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
  ],
  pathPrefix: "/AdvancedProSystems",
};
