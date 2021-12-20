import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import Main from './pages/Main';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default Router;
