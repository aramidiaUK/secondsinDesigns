import React from 'react'
import FoldOutCard from './FoldOutCard'
import './FoldOutCardsStyles.css';

const FoldOutCardsBody = () => {
    return (
        <div className="foldOutCardsBody">
            <FoldOutCard
                imageLink={`https://img.icons8.com/dotty/80/ffffff/launched-rocket.png`}
                title={`Start Up`}
                text={`In publishing and graphic design, Lorem ipsum may be used as a placeholder before final copy is available.`}
                linkText={`Read More`}
                linkTo={`/#`}
            />
            <FoldOutCard
                imageLink={`https://img.icons8.com/ios-filled/50/ffffff/laptop-coding.png`}
                title={`Development`}
                text={`In publishing and graphic design, Lorem ipsum may be used as a placeholder before final copy is available.`}
                linkText={`Read More`}
                linkTo={`/#`}
            />
        </div>
    )
}

export default FoldOutCardsBody
