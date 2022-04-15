import { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';


export default function App() {

  const [loggedInStatus, setloggedInStatus] = useState("NOT_LOGGED_IN");
  
  const handleLogin = () => {
    setloggedInStatus('LOGGED_IN');
  }
  
  return (
        <BrowserRouter>
          <Switch>
            <Route 
            exact 
            path="/" 
            render = {props => (
              <Home {...props} loggedInStatus={loggedInStatus} handleLogin={handleLogin} />
            )}
            />
            <Route 
            exact 
            path="/dashboard/"
            render = {props => (
              <Dashboard {...props} loggedInStatus={loggedInStatus} />
            )}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
  )
}

