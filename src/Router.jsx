import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import { Main, Demo, Login } from './pages';

function Router() {
  return (
    <Switch>
      <Route exact path="/demo" component={Demo} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default Router;
