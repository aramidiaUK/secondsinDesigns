import React from 'react'

const DashboardSidebar = ({brandName, logoIcon, logoImage, onclick, onsubmit, imageLink, profileName, profileOcupation, logout, children}) => {
    const toggleBtn  = () => {
        const menu  = document.querySelector('.sidebar');
        const toggleClose = document.querySelector('#menu-btn');
    
        toggleClose.classList.toggle('active');
        menu.classList.toggle('active')
      }

    return (
        <div className="sidebar">
        <div className="sidebar-logo-content">
          <div className="logo">
            {logoImage ? logoImage : logoIcon ? logoIcon : <i class="bx bxs-meteor" />}
            <div className="logo-name">{brandName}</div>
          </div>
          <span id="menu-btn" onClick={toggleBtn}>
            <i class="bx bx-menu" id="closed" />
            <i class="bx bx-x" id="opened" />
          </span>
          
        </div>
        <ul className="list">
          <li className="list-item">
            <i class="bx bx-search"  onClick={toggleBtn}/>
            <form onSubmit={onsubmit}>
                <input type="text" name="text" placeholder="Search..." onClick={onclick}/>
            </form>
            <span className="tooltip">Search</span>
          </li>
            {children}
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img src={imageLink} alt="profile" />
              <div className="name_occupation">
                <div className="name">{profileName}</div>
                <div className="occupation">{profileOcupation}</div>
              </div>
            </div>
            <i class='bx bx-log-out' id="log_out" onClick={logout}></i>
          </div>
        </div>
      </div>
    )
}

export default DashboardSidebar
