module.exports = {
  siteMetadata: {
    title: `Walsh Painting Contractors`,
    siteUrl: `https://walshpainting.com.au`,
    description: `Master painters and decorators. Walsh Painting Contractors operate near Byron Bay, Northern NSW and specialise in luxury homes and specialised projects.`,
    image: `/wpc-logo-small.png` // image must be in static folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-svg-sprite`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `q8hlcgok0v3o`,
        accessToken: `1177c563536d2d7c60d82a4ad949639aef131aae5e4b49d145b9bd32502d995f`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/resources/images`,
      }
    },
  ],
}
