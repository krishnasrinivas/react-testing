import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router, { Route, DefaultRoute, NotFoundRoute, Redirect, Link } from 'react-router';

injectTapEventPlugin();

import App from './components/App';
import Home from './components/Home';
import Servers from './components/Servers';

const AppRoutes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route path="/servers" handler={Servers} />
  </Route>
);

Router.run(AppRoutes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});
