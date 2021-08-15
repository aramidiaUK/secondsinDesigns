import React from 'react'
import "./ScheduleCardStyles.scss"
const ScheduleGameCard = ({scheduleItem}) => {
    return (
        <div className="schedule-card game">
            <div className="schedule-card__content">
                <div className="schedule-card__content-opponent">
                    <div className="schedule-card__content-opponent-imageBox">
                        <img src={ scheduleItem.opponent?.imageLink || window.$opponentsLogo } alt={scheduleItem.opponent.clubName}/>
                    </div>
                    <h2>{scheduleItem.opponent.clubName}</h2>
                </div>
                <div className="schedule-card__content-info">
                    <div className="status">{scheduleItem.matchStatus}</div>
                    <div className="location-date">
                        <span className="dateTime">{scheduleItem.dateTime}</span>
                        <span className="location">{scheduleItem.location}</span>
                        <span className="competition">{scheduleItem.competition}</span>
                    </div>
                </div>
                <div className="schedule-card__content-footer">
                    <div className="schedule-card__content-footer-imageBox">
                        <img src="/assets/images/espnSponsor.png" alt="sponsor"/>
                    </div>
                    <span className={`tag ${scheduleItem.type}`}>{scheduleItem.type}</span>
                </div>
            </div>
        </div>
    )
}

export default ScheduleGameCard
