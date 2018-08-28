import React, { Component } from "react";
import "./Nav.css";
class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="logo">Nub DOSC</div>
                <ul>
                    <li>
                        <a href="/">Array</a>
                    </li>
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
        );
    }
}
export default Nav;
