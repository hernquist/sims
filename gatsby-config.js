/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `react-google-maps`,
      options: {
        key: process.env.GATSBY_GOOGLE_KEY,
      },
    },
    // {
    //   resolve: `gatsby-source-googlemaps-static`,
    //   options: {
    //     key: process.env.GATSBY_GOOGLE_KEY,
    //     center: lat: 33.77639, lng: -84.36926,
    //   },
    // },
  ],
}
