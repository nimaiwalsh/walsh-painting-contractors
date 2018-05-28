import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import globalStyles from './global.css'
import { Container, Content, SideBar, MainContent } from './components.css'
import Header from '../components/header'
import SideNav from '../components/SideBarNav'

const Layout = ({ children, data }) => (
  <Container >
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Content>
      <SideNav />
      <MainContent>
        {children()}
      </MainContent>
    </Content>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
