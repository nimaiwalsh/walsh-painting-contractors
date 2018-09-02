import React from 'react'

import FadeInUp from '../components/FadeInUp'
import { PageHead } from '../components/PageComponents'
import { paintSVG } from '../resources/icons/index'

const Services = () => (
  <FadeInUp>
    <div>
      <PageHead title="Services" icon={ paintSVG } />
      <h1>Services</h1>
      <p>Services Page</p>
    </div>
  </FadeInUp>
)

export default Services
