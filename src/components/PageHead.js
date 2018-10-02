import React from 'react'

import { pageHeadStyles } from './PageHead.css'
import Icon from '../components/Icon'

export const PageHead = ({ title, icon }) => {
  return (
    <div className={pageHeadStyles}>
      <h1 className="heading">{ title }</h1>

      <div className="tab">
        <Icon className="icon-tab" icon={icon} />
      </div>
    </div>
  )
}
