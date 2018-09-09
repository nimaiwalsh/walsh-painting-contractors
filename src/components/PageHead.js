import React from 'react'

import { pageHeadStyles } from './PageHead.css'
import Icon from '../components/Icon'
import { starSVG } from '../resources/icons/index'

export const PageHead = ({ title, icon }) => {
  return (
    <div className={pageHeadStyles}>
      <h1 className="heading">{ title }</h1>

      <div className="stars">
        <Icon className="icon-star" icon={starSVG} />
        <Icon className="icon-star" icon={starSVG} />
        <Icon className="icon-star" icon={starSVG} />
        <Icon className="icon-star" icon={starSVG} />
        <Icon className="icon-star" icon={starSVG} />
      </div>

      <div className="tab">
        <Icon className="icon-tab" icon={icon} />
      </div>
    </div>
  )
}
