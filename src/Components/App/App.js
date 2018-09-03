import React, { Component } from "react";
import NotFound from "../NotFound";
import "./App.css";
import "../prism/prism.css";
import Header from "../Header";
import AandR from "../AandR";
import Navig from "../Nav";
import ReactComp from "../ReactComp";
import Home from "../Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
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
                                exact
                                path="/addremove"
                                render={() => <AandR />}
                            />
                            <Route
                                exact
                                path="/component"
                                component={ReactComp}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
