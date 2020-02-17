import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import IndexPageContainer from '../page-styles/index.css'
import Carousel from 'nuka-carousel'

const IndexPage = ({ data }) => {
  return (
    <IndexPageContainer>
      <Helmet>
        <title>Home</title>
        <meta name="See our opening splash page for some inspiring projects and work" content="slideshow" />
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
  }
`
