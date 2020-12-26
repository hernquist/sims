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
        key: "AIzaSyA9ayOJLDfctfkr1hukXY-oITZoCFSvUl0",
        center:
          "J D Sims Recreation Center, 544 Angier Ave NE, Atlanta, GA 30308",
        markers: [
          {
            location: `J D Sims Recreation Center, 544 Angier Ave NE, Atlanta, GA 30308`,
            label: `A_SINGLE_ALPHANUMERIC_CHARACTER`,
          },
        ],
        zoom: 15,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
