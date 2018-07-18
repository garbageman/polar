import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";
import AppliedRoute from "./components/AppliedRoute";
import logo from './logo.svg';
import './App.css';

const AsyncHome = asyncComponent(() => import("./pages/HomePage"));
const AsyncNotFound = asyncComponent(() => import("./pages/NotFound"));

export default ({ childProps }) =>
    <Switch>
    <AppliedRoute
      path="/"
      exact
      component={AsyncHome}
      props={childProps}
    />
    <Route component={AsyncNotFound} />
    </Switch>
;
