import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Timeline from './components/Timeline';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/timeline' exact>
          <Timeline />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
