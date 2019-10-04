module.exports = {
  siteMetadata: {
    title: `Leunes Media Portfolio`,
    description: `Portfolio of Michiel Leunens, founder of Leunes Media`,
    author: `@LeunensMichiel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio Michiel Leunens`,
        short_name: `Leunes Media`,
        description: `Portfolio of Michiel Leunens, founder of Leunes Media.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#FF5858`,
        theme_color: `#212121`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require('path').resolve(__dirname, 'node_modules')],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}