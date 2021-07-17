import React from 'react'
import RippleButton from '../../../components/RippleButtons/RippleButton'
import './SIHomeStyles.scss';
const SIHome = () => {
    return (
        <div className="si-home">
           <div className="si-home__content">
                <div className="si-home__content-imgFrame">
                    <img src="./assets/images/multiSports-min.jpg" alt="multi-sport"/>
                </div>
                <div className="si-home__content-textOptions">
                    <h2>
                        No developer required. <span>Have your club website set up today.</span>
                    </h2>
                    <div className="btn-group">
                        <RippleButton buttonText="Sign up" linkTo="/"/>
                        <RippleButton buttonText="Log in" linkTo="/"/>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default SIHome
