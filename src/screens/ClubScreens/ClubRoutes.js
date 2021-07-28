import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import FullPageLoader from '../../components/Loader/FullPageLoader';
import { setStylesVars } from '../../utils/helpers';
import ClubHome from './Home/ClubHome'

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
            <Route exact path={`/club/test`} component={ClubHome}/>
        </div>
    )
}

export default ClubRoutes
