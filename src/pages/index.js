import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import IndexPageContainer from '../page-styles/index.css'
import Carousel from 'nuka-carousel'

const IndexPage = ({ data }) => {
  return (
    <IndexPageContainer>
      <Helmet>
        <Helmet title={data.site.siteMetadata.title}>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="image" content={data.site.siteMetadata.image} />
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:description" content={data.site.siteMetadata.description} />
    </Helmet>
      </Helmet>
      <Carousel autoplay={true} autoplayInterval={3000} wrapAround={true}>
        {data.contentfulImage.images.map((image, num) => {
          return (
            <Img
              className="image"
              key={image}
              sizes={image.sizes}
              alt={`Image of house number ${num}`}
            />
          )
        })}
      </Carousel>
    </IndexPageContainer>
  )
}

export default IndexPage

export const query = graphql`
  query imageCarousel {
    contentfulImage: contentfulImageCollections(title: { eq: "Hero Image Slider" }) {
      images {
        sizes(maxWidth: 800) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        image
        siteUrl
      }
    }
  }
`
