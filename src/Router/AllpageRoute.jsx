import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";

export default function AllpageRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
