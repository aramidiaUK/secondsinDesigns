import React from 'react'
import "./PageLoader.scss";
import Loader from './Loader';

const FullPageLoader = ({message, subMessage}) => {
    return (
        <div className="loader-full-page">
            <Loader/>
            <div className="Loader-full-page__content">
                <div className="loader-full-page__content-message">
                    <h1>{message || 'Loading...'}{subMessage && <span>{subMessage}</span>}</h1>
                </div>
            </div>
        </div>
    )
}

export default FullPageLoader
