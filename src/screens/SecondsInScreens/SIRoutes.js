import React from 'react'
import { Route } from 'react-router-dom'
import SIHome from './Home/SIHome'
import SILoginScreen from './Auth/Login/SILoginScreen'
import SIPricingScreen from './Pricing/SIPricingScreen'
import SIRegisterBrandScreen from './Auth/Register/SIRegisterBrandScreen'
import SIRegisterBuildClubScreen from './Auth/Register/SIRegisterBuildClubScreen'
import SIRegisterColorsScreen from './Auth/Register/SIRegisterColorsScreen'
import SIRegisterScreen from './Auth/Register/SIRegisterScreen'
import SIRegisterSubscriptionScreen from './Auth/Register/SIRegisterSubscriptionScreen'
import SIComponents from './SIComponents'

const SIRoutes = () => {
    return (
        <div>
            <Route exact path='/' component={SIHome}/>
            <Route exact path='/login' component={SILoginScreen}/>
            <Route exact path='/register' component={SIRegisterScreen}/>
            <Route exact path='/register-brand' component={SIRegisterBrandScreen}/>
            <Route exact path='/register-theme' component={SIRegisterColorsScreen}/>
            <Route exact path='/register-plan' component={SIRegisterSubscriptionScreen}/>
            <Route exact path='/register-build' component={SIRegisterBuildClubScreen}/>
            <Route exact path='/pricing' component={SIPricingScreen}/>
            <Route exact path='/components' component={SIComponents}/>
        </div>
    )
}

export default SIRoutes
