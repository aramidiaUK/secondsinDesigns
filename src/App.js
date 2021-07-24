import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';
import ClubAdminRoutes from './screens/ClubAdminScreens/ClubAdminRoutes';
import ClubRoutes from './screens/ClubScreens/ClubRoutes';
import SIRoutes from './screens/SecondsInScreens/SIRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/club/admin/:slug" component={ClubAdminRoutes} />
            <Route path='/club/:slug' component={ClubRoutes} />
            <Route path="/" component={SIRoutes}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
