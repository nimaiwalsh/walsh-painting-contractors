import React from 'react'
import Img from 'gatsby-image'

import FadeInUp from '../components/FadeInUp'
import AboutPageContainer from '../page-styles/about.css'
import { PageHead } from '../components/PageComponents'
import CallToAction from '../components/CallToAction'
import { ButtonInline, Paragraph, List } from '../utils/StyledComponents'

import Icon from '../components/Icon'
import { homeSVG, chevronSVG } from '../resources/icons/index'
import user1photo from '../resources/images/user-1.jpg'
import user2photo from '../resources/images/user-2.jpg'
import user3photo from '../resources/images/user-3.jpg'
import user4photo from '../resources/images/user-4.jpg'

const Hotel = ({ data }) => {
  console.log(React.version)
  return (
    <FadeInUp>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              nisi dignissimos debitis ratione sapiente saepe. Accusantium
              cumque, quas, ut corporis incidunt deserunt quae architecto
              voluptate.
            </Paragraph>
            <Paragraph>
              Accusantium cumque, quas, ut corporis incidunt deserunt quae
              architecto voluptate delectus, inventore iure aliquid aliquam.
            </Paragraph>
            <List>
              <li>
                <Icon icon={chevronSVG} />Close to the beach
              </li>
              <li>
                <Icon icon={chevronSVG} />Breakfast included
              </li>
              <li>
                <Icon icon={chevronSVG} />Free airport shuttle
              </li>
              <li>
                <Icon icon={chevronSVG} />Free wifi in all rooms
              </li>
              <li>
                <Icon icon={chevronSVG} />Pets allowed
              </li>
            </List>

            <div className="recommend">
              <p className="recommend__count">
                Lucy and 3 other friends recommend this hotel
              </p>
              <div className="recommend__friends">
                <img src={user1photo} />
                <img src={user2photo} />
                <img src={user3photo} />
                <img src={user4photo} />
              </div>
            </div>
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
                  <p className="review__user-name">Ballbag</p>
                  <p className="review__user-date">23 May 2018</p>
                </div>
                <div className="review__rating">9.8</div>
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
                  <p className="review__user-name">Miss Petty</p>
                  <p className="review__user-date">28 May 2018</p>
                </div>
                <div className="review__rating">7.8</div>
              </figcaption>
            </figure>
            <ButtonInline>
              View more <span>&rarr;</span>
            </ButtonInline>
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
