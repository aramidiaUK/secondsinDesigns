import React from 'react'
import "./PricingCardStyles.scss"
const PricingCard = ({currencySymbol, price, packageName, primaryColor, ribbon, ribbonText, children}) => {
    return (
        <div className="si-pricingCard">
            {ribbon &&
                <div className="ribbon">
                    <span className="ribbon-text">{ribbonText}</span>
                </div>
            }
            <div className="si-pricingCard__content">
                <div className="si-pricingCard__content-price">
                    <div className="si-pricingCard__content-price-area" style={{background: primaryColor}}>
                        <div className="inner-area" style={{background: primaryColor}}>
                            <span className="text">{currencySymbol}</span>
                            <span className="price">{price}</span>
                            <span className="period">monthly</span>
                        </div>
                    </div>
                </div>
                <div className="si-pricingCard__content-packageName" style={{background: primaryColor}}><span>{packageName}</span></div>
                <ul className="si-pricingCard__content-features">
                    {children}
                </ul>
                <div className="si-pricingCard__content-btn">
                    <button type="button" className="btn" style={{background: primaryColor}}>Select Plan</button>
                </div>
            </div>
        </div>
    )
}

export default PricingCard
