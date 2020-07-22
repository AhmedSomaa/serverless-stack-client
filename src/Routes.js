import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}