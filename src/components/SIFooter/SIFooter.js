import React from 'react'
import { NavLink } from 'react-router-dom'
import "./SIFooterStyles.scss"
const SIFooter = () => {
    return (
        <footer className="si-footer">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/opportunities">Opportunities</NavLink></li>
                <li><NavLink to="/clubs">Clubs</NavLink></li>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
                <li><NavLink to="/register">Sign up</NavLink></li>
                <li><NavLink to="/login">Log in</NavLink></li>
            </ul>
            <div className="legal">
                All rights reserverd &copy; SecondsIn.
                <ul>
                    <li><NavLink to="/terms">Terms of use</NavLink></li>
                    <li><NavLink to="/privacy">Privacy</NavLink></li>
                </ul>
            </div>
        </footer>
    )
}

export default SIFooter
