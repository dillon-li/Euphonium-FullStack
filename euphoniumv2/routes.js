/** @jsx React.DOM */
// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from 'src/components/Homepage';

const routes = (
  <Route path="/">
    <IndexRoute component={Home}/>
  </Route>
);

export default routes;
