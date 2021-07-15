import React from 'react'

const MegaMenuItem = ({title, children}) => {
    return (
        <li id="services">
        <a href="/">
          {title}
        </a>
        <div className="sub-nav">
          <div className="sub-nav__col">
            {children}
          </div>
        </div>
      </li>
    )
}

export default MegaMenuItem
