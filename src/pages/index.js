import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel';

const IndexPage = ({ data }) => (
  <div>
    <Carousel
      autoplay={true}
      autoplayInterval={3000}
      wrapAround={true}
    >
      <Img sizes={data.hotelImages.edges[0].node.sizes} alt="Hotel 1" style={{ height: '90vh' }} />
      <Img sizes={data.hotelImages.edges[1].node.sizes} alt="Hotel 1" style={{ height: '90vh' }} />
    </Carousel>
  </div>
)

export default IndexPage

export const query = graphql`
  query imageCarousel {
    hotelImages: allImageSharp(filter: { id: { regex: "/carousel/" } }) {
      edges {
        node {
          sizes(
            maxWidth: 800
            quality: 80
            traceSVG: { background: "#f2f8f3", color: "#d6ebd9" }
          ) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
