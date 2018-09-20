import React, { Component } from "react";
import "../../styles/main.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <h1>
                Page not found go back to the main page <Link to="/">Home</Link>
            </h1>
        );
    }
}

export default NotFound;
