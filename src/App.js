import React from 'react';
import {BrowserRouter,Switch } from 'react-router-dom';

import Transitions from './Transitions';
import Route from './authentication/Route';
import Login from './components/Login';
import Timeline from './components/Timeline';
import Hashtag from './components/Hashtag';
import UserTimeline from './components/UserTimeline';
import LikesTimeline from './components/LikesTimeline';
import { UserProvider } from './context/UserContext';

export default function App({ location }) {
  return (
    <BrowserRouter>
      <UserProvider>
        <Transitions>
          <Switch location={location}>
            <Route path='/' exact component={Login} />
            <Route path='/timeline' exact component={Timeline} isPrivate />
            <Route path='/hashtag/:hashtag' exact component={Hashtag} isPrivate />
            <Route path='/user/:id' exact component={UserTimeline} isPrivate />
            <Route path='/my-posts/' exact component={UserTimeline} isPrivate />
            <Route path='/my-likes/' exact component={LikesTimeline} isPrivate />
          </Switch>
        </Transitions>
      </UserProvider>
    </BrowserRouter>
  );
}
