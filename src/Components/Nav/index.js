import React, { Component } from "react";
import "../../styles/main.scss";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse3: false,
            collapse4: false,
            collapse5: false
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
                    <a onClick={this.toggle} id="collapse3">
                        React
                    </a>
                    <Collapse isOpen={this.state.collapse3}>
                        <Card>
                            <Link to="reactComponent">Components</Link>
                            <Link to="reactEvents">Events</Link>
                            <Link to="cra">Create React App</Link>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <a onClick={this.toggle} id="collapse4">
                        JavaScript
                    </a>
                    <Collapse isOpen={this.state.collapse4}>
                        <Card>
                            <Link to="addremove">Array Methods</Link>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <a onClick={this.toggle} id="collapse5">
                        CSS
                    </a>
                    <Collapse isOpen={this.state.collapse5}>
                        <Card>
                            <Link to="sass">Sass</Link>
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
                    <Navigation />
                </div>
            </div>
        );
    }
}
export default Navig;
