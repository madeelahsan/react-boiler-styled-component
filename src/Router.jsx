import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import { Main, Demo, Login } from './pages';
import {
  Typography,
  Buttons,
  Forms,
  Table,
  Modal,
  Alerts,
  Toast,
  Notifications,
  Pagination,
  Tooltips,
  Dropdown,
} from './pages/ui';
import Ui from './pages/ui/Ui';

function Router() {
  return (
    <Switch>
      <Route exact path="/demo" component={Demo} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/ui" component={Ui} />
      <Route exact path="/ui/typography" component={Typography} />
      <Route exact path="/ui/forms" component={Forms} />
      <Route exact path="/ui/buttons" component={Buttons} />
      <Route exact path="/ui/table" component={Table} />
      <Route exact path="/ui/modal" component={Modal} />
      <Route exact path="/ui/alerts" component={Alerts} />
      <Route exact path="/ui/toast" component={Toast} />
      <Route exact path="/ui/notifications" component={Notifications} />
      <Route exact path="/ui/pagination" component={Pagination} />
      <Route exact path="/ui/tooltips" component={Tooltips} />
      <Route exact path="/ui/dropdown" component={Dropdown} />
      <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default Router;
