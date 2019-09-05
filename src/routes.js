import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Repository from './pages/Repository';
import Main from './pages/Main';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </Router>
  );
}
