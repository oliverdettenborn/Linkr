import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import {UserProvider} from './context/UserContext';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
}
