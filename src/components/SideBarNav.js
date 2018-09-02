import React from 'react'
import SideBarContainer from './SideBarNav.css'
import Link from 'gatsby-link'

//ICONS
import home from '../resources/icons/home.svg'
import paint from '../resources/icons/paint-format.svg'
import contact from '../resources/icons/new-message.svg'
import map from '../resources/icons/map.svg'
// use SVG icons with 'gatsby-plugin-svg-sprite' by:
//<svg className="side-nav__icon">
//  <use xlinkHref={`#${magnifying_glass.id}`} />
//</svg>

const SideNav = () => {
  return (
    <SideBarContainer>
      <ul className="side-nav">
        <li className="side-nav__item">
          <Link to="/about" className="side-nav__link" activeClassName={'side-nav__link--active'}>
            <svg className="side-nav__icon">
              <use xlinkHref={`#${home.id}`} />
            </svg>
            <span>About</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/services" className="side-nav__link" activeClassName={'side-nav__link--active'}>
            <svg className="side-nav__icon">
              <use xlinkHref={`#${paint.id}`} />
            </svg>
            <span>Services</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/contact" className="side-nav__link" activeClassName={'side-nav__link--active'}>
            <svg className="side-nav__icon">
              <use xlinkHref={`#${contact.id}`} />
            </svg>
            <span>Contact</span>
          </Link>
        </li>
      </ul>

      <div className="legal">&copy; 2018 by Walsh Painting Contractors</div>
    </SideBarContainer>
  )
}

export default SideNav
