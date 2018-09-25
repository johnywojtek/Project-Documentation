import React from "react";
import "../../styles/main.scss";
import { Link } from "react-router-dom";

const NotFound = () => (
    <h1>
        Page not found go back to the main page
        <Link to="/">Home</Link>
    </h1>
);

export default NotFound;
