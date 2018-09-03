import React, { Component } from "react";
import "./Nav.css";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";

class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse1: false,
            collapse2: false,
            collapse3: false
        };
    }

    getCollapseState(id) {
        const objToReturn = {};
        for (const i in this.state) {
            console.log(i, id, i !== id);
            if (i !== id) {
                objToReturn[i] = false;
            } else {
                objToReturn[i] = true;
            }
        }

        return objToReturn;
    }

    toggle = e => {
        console.log(this.getCollapseState(e.target.id));
        if (e.target.id === false) {
            // this.setState({
            //     [e.target.id]: true
            // });
            this.setState(this.getCollapseState(e.target.id));
        } else {
            this.setState(this.getCollapseState(e.target.id));
        }
    };

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <a
                        color="primary"
                        onClick={this.toggle}
                        style={{ marginBottom: "1rem" }}
                        id="collapse2"
                    >
                        Array
                    </a>
                    <Collapse isOpen={this.state.collapse2}>
                        <Card>
                            <CardBody>
                                <ul>
                                    <li>
                                        <Link to="/addremove">
                                            Add/remove items
                                        </Link>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <a color="primary" onClick={this.toggle} id="collapse3">
                        React
                    </a>
                    <Collapse isOpen={this.state.collapse3}>
                        <Card>
                            <CardBody>
                                <Link to="component">React Components</Link>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>
        );
    }
}

class Navig extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="navig">
                    <div className="navig__logo">Nub DOSC</div>
                    <Example />

                    <ul>
                        <li>
                            <a href="/">obj</a>
                        </li>
                        <li>
                            <a href="/">string</a>
                        </li>
                        <li>
                            <a href="/">iteraive</a>
                        </li>
                        <li>
                            <a href="/">mutableenable</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Navig;
