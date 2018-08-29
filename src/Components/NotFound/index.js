import React, { Component } from "react";
import "./NotFound.css";
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
