import React from 'react'

import FadeInUp from '../components/FadeInUp'
import { PageContainer, PageContentContainer } from '../page-styles/PageComponents'
import { PageHead } from '../components/PageHead'
import { paintSVG } from '../resources/icons/index'
import Gallery from '../components/Gallery'
import ServicesPageContainer from '../page-styles/services.css'

const Services = ({ data }) => (
  <FadeInUp>
    <PageContainer>
      <PageHead title="Services" icon={ paintSVG } />
      <PageContentContainer>
        <div>
          <h1>Services</h1>
          <Gallery photos={ data.galleryImages.images } />
        </div>
      </PageContentContainer> 
    </PageContainer>
  </FadeInUp>
)

export default Services

export const query = graphql`
  query galleryImages {
    galleryImages: contentfulImageCollections(title: { eq: "Hero Image Slider" }) {
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
