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
      <PageHead title="Gallery" icon={ paintSVG } />
      <PageContentContainer>
        <Gallery photos={ data.galleryImages.images } />
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
