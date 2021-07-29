import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import FullPageLoader from '../../components/Loader/FullPageLoader';
import { setStylesVars } from '../../utils/helpers';
import ClubHome from './Home/ClubHome'
import ClubMedia from './Media/ClubMedia';
import ClubVideos from './Media/Videos/ClubVideos';
import ClubNews from './News/ClubNews';
import ClubTeams from './Teams/ClubTeams';

const ClubRoutes = () => {
    const [pageLoading, setPageLoading] = useState(true);
    useEffect(() => {
        const updateTeamsStyles = async() => {
            await setStylesVars();
            setPageLoading(false);
        }
        updateTeamsStyles();
    }, [])

    return pageLoading  ? <FullPageLoader message="Loading club app" subMessage="Redirecting you to SecondsIn United"/> : 
    (
        <div>
            <Route exact path={`/club/home`} component={ClubHome}/>
            <Route exact path={`/club/lineups`} component={ClubTeams}/>
            <Route exact path={`/club/news`} component={ClubNews}/>
            <Route exact path={`/club/media`} component={ClubMedia}/>
            <Route exact path={`/club/media/videos`} component={ClubVideos}/>
        </div>
    )
}

export default ClubRoutes
