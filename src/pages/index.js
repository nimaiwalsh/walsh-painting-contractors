import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'

const IndexPage = ({ data }) => {
  return (
    <div>
      <Carousel autoplay={true} autoplayInterval={4000} wrapAround={true}>
        {data.carouselImages.edges.map(({ node }, num) => {
          return (
            <Img
              key={num}
              sizes={node.sizes}
              alt={`Image of house number ${num}`}
              style={{ height: 'calc(100vh - 56px)' }}
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
    carouselImages: allImageSharp(filter: { id: { regex: "/carousel/" } }) {
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
