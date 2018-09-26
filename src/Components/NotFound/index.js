import React from "react";
import "../../styles/main.scss";
import { Link } from "react-router-dom";

const NotFound = () => (
    <div>
        <h1>Page not found go back to the main page</h1>
        <Link to="/">Home</Link>
    </div>
);

export default NotFound;
