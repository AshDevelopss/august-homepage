/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `August Health Assistant`,
    description: `Your personal health assistant, helping you understand your symptoms and guiding you to the right care.`,
    author: `Ashwin Manohar`,
    siteUrl: `https://www.meetaugust.ai/`,
  },
  plugins: [
    // ...other plugins
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `August Health Assistant`,
        short_name: `August`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#206d55`, // Your brand color
        display: `standalone`,
        icon: `src/images/icon.png`, // Path to your favicon image
      },
    },
  ],
}
