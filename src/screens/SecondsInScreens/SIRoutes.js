import React from 'react'
import { Route } from 'react-router-dom'
import SIHome from './Home/SIHome'
import SILoginScreen from './Login/SILoginScreen'
import SIComponents from './SIComponents'

const SIRoutes = () => {
    return (
        <div>
            <Route exact path='/' component={SIHome}/>
            <Route exact path='/login' component={SILoginScreen}/>
            <Route exact path='/components' component={SIComponents}/>
        </div>
    )
}

export default SIRoutes
