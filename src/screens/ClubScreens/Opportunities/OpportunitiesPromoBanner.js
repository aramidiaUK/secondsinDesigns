import React from 'react'
import './OpportunitiesPromoBannerStyles.scss';
const OpportunitiesPromoBanner = ({imageBackdrop, brand, header, subHeader}) => {

    const backdropStyles = {
        background: `url(${imageBackdrop})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="banner">
            <div className="banner__content">
                <span className="tag">Sponsored AD</span>
                <div className="banner__content-backdrop" style={{ ...backdropStyles }}/>
                <div className="banner__content-imageBox">
                    <img src={brand} alt={header}/>
                </div>
                <div className="banner__content-textContent">
                    <h1>{header} <span>{subHeader}</span></h1>
                </div>
            </div>
        </div>
    )
}

export default OpportunitiesPromoBanner
