import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router
} from 'react-router-dom';

import Container from './Container';

import ClickableMarkers from './components/clickableMarkers';
import Basic from './components/basic';

const routes = [
  {
    path: '/clickable_markers',
    name: 'Show issues reported',
    component: ClickableMarkers
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Basic
  }
];

const createElement = (Component, route) => {
  // const pathname = props.location.pathname.replace('/', '');
  // const routeDef = routes[pathname];

  const newProps = {
    key: route.name,
    route,
    routes,
    // pathname,
    routeDef: route
    // routeDef
  };

  return <Component {...newProps} />;
};

const Routing = (
  <Router>
    <Container routes={routes} />
  </Router>
);

// <Route render={routeProps => createElement(Container, routeProps)} path="/">
//     {Object.keys(routes).map(key => {
//       const r = routes[key];
//     })}
//     </Route>
const mountNode = document.querySelector('#root');

if (mountNode) ReactDOM.render(Routing, mountNode);
else {
  const hljs = require('highlight.js');

  const codes = document.querySelectorAll('pre code');

  for (let i = 0; i < codes.length; i += 1) {
    const block = codes[i];
    hljs.highlightBlock(block);
  }
}
