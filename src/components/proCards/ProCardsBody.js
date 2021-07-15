import React from 'react'
import ProCard from './ProCard'

const ProCardsBody = () => {
    return (
        <div className="proCardsBody">
            <ProCard
                imageLink={`./assets/images/d_wade.jpg`}
                name={`Dwayne Wade`}
                title={`Shooting Guard`}
                linkedIn={`/#`}
                linkTo={`/#`}
            />
        </div>
    )
}

export default ProCardsBody
