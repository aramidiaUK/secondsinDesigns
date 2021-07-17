import React from 'react'
import GlassCard from './GlassCard'
import "./GlassCardStyles.css";
const GlassCardsBody = () => {
    return (
        <div className="glassCardsBody">
            <GlassCard
                header={'01'}
                title={'Card One'}
                text={'In publishing and graphic design, Lorem ipsum may be used as a placeholder before final copy is available.'}
                linkText={'Read More'}
                linkTo={'/#'}
            />
        </div>
    )
}

export default GlassCardsBody
