import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Timeline from './components/Timeline';
import Hashtag from './components/Hashtag';
import {UserProvider} from './context/UserContext';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/timeline'>
            <Timeline />
          </Route>
          <Route path='/hashtag/:hashtag'>
            <Hashtag />
          </Route>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
}
