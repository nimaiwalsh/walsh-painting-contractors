import React from 'react'
import Link from 'gatsby-link'
import HeaderContainer from './Header.css'

import Logo from '../resources/wpc-logo.svg'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Link to="/">
      <svg className="logo">
        <title>Logo - Walsh Painting Contractors</title>
        <use xlinkHref={`#${Logo.id}`} />
      </svg>
    </Link>
  </HeaderContainer>
)

export default Header
