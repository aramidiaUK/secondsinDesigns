import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import FullPageLoader from '../../components/Loader/FullPageLoader';
import { setStylesVars } from '../../utils/helpers';
import ClubHome from './Home/ClubHome'
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
        </div>
    )
}

export default ClubRoutes
