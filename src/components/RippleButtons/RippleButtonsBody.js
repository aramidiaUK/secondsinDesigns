import React from 'react'
import RippleButton from './RippleButton'
import "./RippleButtonStyles.scss";
const RippleButtonsBody = () => {

    return (
        <div className="rippleButtonsBody">
            <RippleButton
                linkTo={'/#'}
                buttonText={'Read Less'}
            />
            <RippleButton
                linkTo={'/#'}
                buttonText={'Read More'}
            />
        </div>
    )
}

export default RippleButtonsBody
