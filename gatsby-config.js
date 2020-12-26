/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
        key: `${process.env.GATSBY_GOOGLE_KEY}`,
        center:
          "J D Sims Recreation Center, 544 Angier Ave NE, Atlanta, GA 30308",
        markers: [
          {
            location: `J D Sims Recreation Center, 544 Angier Ave NE, Atlanta, GA 30308`,
            label: `A_SINGLE_ALPHANUMERIC_CHARACTER`,
          },
        ],
        zoom: 16,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
