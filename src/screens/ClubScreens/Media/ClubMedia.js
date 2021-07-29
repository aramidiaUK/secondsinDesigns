import React from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs'
import DisplayedFooter from '../../../components/ClubFooter/DisplayedFooter'
import ClubNavbar from '../../../components/ClubNavbar/ClubNavbar'
import ClubVideosTop from './Videos/ClubVideosTop'
import './ClubMediaStyles.scss';
import ClubMediaMenu from './ClubMediaMenu'

const ClubMedia = () => {
    return (
        <div className="club media">
        <ClubNavbar />
        <Breadcrumbs />
        <div className="mid">
            <ClubMediaMenu/>
            <ClubVideosTop/>
        </div>
        <DisplayedFooter />
      </div>
    )
}

export default ClubMedia
