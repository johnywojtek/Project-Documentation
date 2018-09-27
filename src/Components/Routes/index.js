import React, { Component } from "react";
import "../../styles/main.css";
import "../prism/prism2.css";
import Header from "../Header";
import AandR from "../AandR";
import Navig from "../Nav";
import ReactComponents from "../ReactComponents";
import Home from "../Home";
import ReactEvents from "../ReactEvents";
import StringMethods from "../StringMethods";
import Objects from "../Objects";
import NotFound from "../NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Navig />
                    <div className="main">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                path="/jsAddAndRemove"
                                render={() => <AandR />}
                            />
                            <Route
                                path="/jsStringMethods"
                                component={StringMethods}
                            />
                            <Route path="/jsObjects" component={Objects} />
                            <Route
                                path="/reactComponent"
                                component={ReactComponents}
                            />
                            <Route
                                path="/reactEvents"
                                component={ReactEvents}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Routes;
