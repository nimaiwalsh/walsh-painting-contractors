import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel';

const IndexPage = ({ data }) => (
  <div style={{ width: '100%' }}>
    <Carousel>
      <Img sizes={data.hotelImages.edges[0].node.sizes} alt="Hotel 1" style={{ height: '100vh' }} />
      <Img sizes={data.hotelImages.edges[1].node.sizes} alt="Hotel 1" style={{ height: '100vh' }} />
    </Carousel>
  </div>
)

export default IndexPage

export const query = graphql`
  query imageGallery1 {
    hotelImages: allImageSharp(filter: { id: { regex: "/hotel/" } }) {
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
