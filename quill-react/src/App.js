import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
