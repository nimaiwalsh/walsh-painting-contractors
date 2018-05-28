import React from 'react'
import Link from 'gatsby-link'
import HeaderContainer from './Header.css'

import logo from '../resources/images/logo.png'
import userpic from '../resources/images/user.jpg'
import magnifying_glass from '../resources/icons/magnifying-glass.svg'
import bookmark from '../resources/icons/bookmark.svg'
import chat from '../resources/icons/chat.svg'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Link to="/">
      <img src={logo} alt="" className="logo" />
    </Link>
  </HeaderContainer>
)

export default Header
