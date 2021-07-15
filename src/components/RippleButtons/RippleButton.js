import React from 'react'

const RippleButton = ({buttonText, linkTo}) => {
    return (
        <a href={linkTo || '#'} 
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
    </a>
    )
}

export default RippleButton
