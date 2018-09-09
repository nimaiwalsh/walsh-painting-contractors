import React from 'react'

import FadeInUp from '../components/FadeInUp'
import { PageContainer, PageContentContainer } from '../page-styles/PageComponents'
import { PageHead } from '../components/PageHead'
import { paintSVG } from '../resources/icons/index'
import ServicesPageContainer from '../page-styles/services.css';

const Services = () => (
  <FadeInUp>
    <PageContainer>
      <PageHead title="Services" icon={ paintSVG } />
      <PageContentContainer>
        <div>
          <h1>Services</h1>
          <p>Services Page</p>
        </div>
      </PageContentContainer> 
    </PageContainer>
  </FadeInUp>
)

export default Services
