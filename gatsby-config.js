module.exports = {
  siteMetadata: {
    title: 'Walsh Painting Contractors',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-svg-sprite',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `q8hlcgok0v3o`,
        accessToken: `1177c563536d2d7c60d82a4ad949639aef131aae5e4b49d145b9bd32502d995f`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'carousel-images',
        path: `${__dirname}/src/resources/images/carousel`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/resources/images`,
      }
    },
  ],
}
