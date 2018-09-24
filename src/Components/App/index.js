import React, { Component } from "react";
import "../../styles/main.css";
import "../prism/prism.css";
import Header from "../Header";
import AandR from "../AandR";
import Navig from "../Nav";
import ReactComponents from "../ReactComponents";
import Home from "../Home";
import ReactEvents from "../ReactEvents";
import NotFound from "../NotFound";
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
                            <Route path="/addremove" render={() => <AandR />} />
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
export default App;
