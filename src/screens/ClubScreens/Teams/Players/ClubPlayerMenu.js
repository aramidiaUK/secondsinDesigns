import React from 'react'
import { NavLink } from 'react-router-dom'
import "./ClubPlayerMenuStyles.scss"
const ClubPlayerMenu = () => {
    return (
        <div className="player-menu">
        <div className="player-menu__content">
          <div className="btn-wrap">
            <NavLink exact to="/club/lineups/teams/offensive" className="btn-alt">
                Offensive Lineup
            </NavLink>
          </div>
          <div className="btn-wrap">
            <NavLink exact to="/club/lineups/teams/deffensive" className="btn-alt">
                Defensive Lineup
            </NavLink>
          </div>
        </div>
      </div>
    )
}

export default ClubPlayerMenu
