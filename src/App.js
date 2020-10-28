import React from 'react';
import {BrowserRouter,Switch } from 'react-router-dom';

import Route from './authentication/Route';
import Login from './components/Login';
import Timeline from './components/Timeline';
import Hashtag from './components/Hashtag';
import UserTimeline from './components/UserTimeline';
import LikesTimeline from './components/LikesTimeline';
import {UserProvider} from './context/UserContext';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/timeline' exact component={Timeline} isPrivate />
          <Route path='/hashtag/:hashtag' exact component={Hashtag} isPrivate />
          <Route path='/user/:id' exact component={UserTimeline} isPrivate />
          <Route path='/my-posts/:id' exact component={UserTimeline} isPrivate />
          <Route path='/my-likes/:id' exact component={LikesTimeline} isPrivate />
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
}
