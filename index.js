import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router, { Route, DefaultRoute, NotFoundRoute, Redirect, Link } from 'react-router';

injectTapEventPlugin();

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const AppRoutes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home} />
    <Route name="about" handler={About} />
    <Route name="contact" handler={Contact} />
  </Route>
);

Router.run(AppRoutes, Router.HashLocation, (Root) => {
  React.render(<Root />, document.body);
});
