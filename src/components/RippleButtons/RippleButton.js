import React from 'react'
import { NavLink } from 'react-router-dom';

const RippleButton = ({buttonText, linkTo}) => {
    return (
        <NavLink to={linkTo || '#'} 
        alt="test" 
        className="btn ripple" 
        onMouseMove={(e) => {
            const x = e.pageX - e.currentTarget.offsetLeft;
            const y = e.pageY - e.currentTarget.offsetTop;
            
            e.currentTarget.style.setProperty('--x', `${x}px`);
            e.currentTarget.style.setProperty('--y', `${y}px`);
        }}
    >
        <span>{buttonText}</span>
    </NavLink>
    )
}

export default RippleButton
