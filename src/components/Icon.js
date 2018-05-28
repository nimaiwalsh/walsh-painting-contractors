import React from 'react';

/*
uses SVG icons with 'gatsby-plugin-svg-sprite' by:
<svg className="side-nav__icon">
 <use xlinkHref={`#${magnifying_glass.id}`} />
</svg>

Recieves the imported SVG prop
*/

export const Icon = ({className, icon}) => {
  return( 
    <svg className={className}>
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  )
}

export default Icon