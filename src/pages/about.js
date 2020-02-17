import React from 'react'
import Img from 'gatsby-image'

import FadeInUp from '../components/FadeInUp'
import AboutPageContainer from '../page-styles/about.css'
import { PageHead } from '../components/PageHead'
import CallToAction from '../components/CallToAction'
import { ButtonInline, Paragraph, Heading2, List } from '../utils/StyledComponents'

import Icon from '../components/Icon'
import { homeSVG, chevronSVG } from '../resources/icons/index'
import user1photo from '../resources/images/heanes-built-logo.jpg'
import user2photo from '../resources/images/steve-kerr-logo.jpg'
import user3photo from '../resources/images/user-3.jpg'
import user4photo from '../resources/images/user-4.jpg'
import Helmet from 'react-helmet'

const Hotel = ({ data }) => {
  console.log(React.version)
  return (
    <FadeInUp>
      <Helmet>
        <title>About</title>
        <meta name="More about us — Masters in the trade" content="page" />
      </Helmet>
      <AboutPageContainer>
        <div className="gallery">
          <figure className="gallery__item">
            <Img sizes={data.hotelImages.edges[0].node.sizes} alt="Hotel 1" />
          </figure>
          <figure className="gallery__item">
            <Img sizes={data.hotelImages.edges[1].node.sizes} alt="Hotel 2" />
          </figure>
          <figure className="gallery__item">
            <Img sizes={data.hotelImages.edges[2].node.sizes} alt="Hotel 3" />
          </figure>
        </div>

        <PageHead title="Premium Painting and Decorating"  icon={homeSVG} />

        <div className="detail">
          <div className="description">
            <Paragraph>
              Your choice of painting contractors is one of those important decisions you will have to make and live with for years!
            </Paragraph>
            <Paragraph>
              You are placing in their hands some of, if not the most valuable assets in your life.
            </Paragraph>
            <Paragraph>
              We offer from start to finish a discrete non intrusive approach, professional attitude, correct methods of preparation and only top quality materials.
            </Paragraph>
            <Paragraph>
              At the end you will have a living space of quality and beauty that will remain for many years.
            </Paragraph>
            <Heading2>The Difference</Heading2>
            <Paragraph>
              After 30 years in this trade we have continued to build a good reputation in the industry, now being contacted by people who have an eye for quality and wanting special finishes and unique colours.
            </Paragraph>
            <Paragraph>
              We take on more and more speciality work and clients that know the look they want but not sure how to achieve the result. It has has taken us to new areas of the trade, developing into an artistic expression of the needs and wants of our clients.
            </Paragraph>
            <Paragraph>
              Starting with the basic flawless finishes of the painting trade, into almost any direction the client wishes to travel. Asked to reproduce images from their travels or from leading trend magazines, we supply samples of differing mediums, from chalkie limes to oil glazes and the use of metals and wallpapers to fulfil the client’s wishes
            <Paragraph/>
            </Paragraph>
            <List>
              <li>
                <Icon icon={chevronSVG} />Master painters and decorators
              </li>
              <li>
                <Icon icon={chevronSVG} />Complete packages
              </li>
              <li>
                <Icon icon={chevronSVG} />Consult on colours and finishes
              </li>
              <li>
                <Icon icon={chevronSVG} />Specialised professional advice
              </li>
              <li>
                <Icon icon={chevronSVG} />Maintenance
              </li>
            </List>

            {/* <div className="recommend">
              <p className="recommend__count">
                Lucy and 3 other friends recommend this hotel
              </p>
              <div className="recommend__friends">
                <img src={user1photo} />
                <img src={user2photo} />
                <img src={user3photo} />
                <img src={user4photo} />
              </div>
            </div> */}
          </div>

          <div className="user-reviews">
            <figure className="review">
              <blockquote className="review__text">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate delectus, inventore iure aliquid aliquam.
              </blockquote>
              <figcaption className="review__user">
                <img
                  src={user1photo}
                  alt="user1photo"
                  className="review__photo"
                />
                <div className="review__user-box">
                  <p className="review__user-name">Ian Heanes</p>
                  <p className="review__user-site"><a target="_blank" href="http://heanesbuilt.com.au/">Heanesbuilt</a></p>
                </div>
                {/* <div className="review__rating">9.8</div> */}
              </figcaption>
            </figure>

            <figure className="review">
              <blockquote className="review__text">
                Corporis incidunt deserunt quae architecto voluptate delectus,
                inventore iure aliquid aliquam. Deserunt quae architecto
                voluptate delectus.
              </blockquote>
              <figcaption className="review__user">
                <img
                  src={user2photo}
                  alt="user2photo"
                  className="review__photo"
                />
                <div className="review__user-box">
                  <p className="review__user-name">Steve Kerr</p>
                  <p className="review__user-site"><a target="_blank" href="http://www.stevekerrhomes.com.au/">Steve Kerr Homes</a></p>
                </div>
                {/* <div className="review__rating">7.8</div> */}
              </figcaption>
            </figure>
          </div>
        </div>

        <CallToAction />
      </AboutPageContainer>
    </FadeInUp>
  )
}

export default Hotel

export const query = graphql`
  query imageGallery {
    hotelImages: allImageSharp(filter: { id: { regex: "/hotel/" } }) {
      edges {
        node {
          sizes(
            maxWidth: 300
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
