/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      "gatsby-plugin-preact",
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
  ],
}
