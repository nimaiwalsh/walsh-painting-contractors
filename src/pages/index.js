import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'
import styles from './index.css'

const IndexPage = ({ data }) => {
  return (
    <div className={styles}>
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
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query imageCarousel {
    contentfulImage: contentfulImageCollections(title: { eq: "Hero Image Slider" }) {
      images {
        sizes(maxWidth: 800) {
          base64
          tracedSVG
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
