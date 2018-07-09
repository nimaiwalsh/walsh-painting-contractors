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
