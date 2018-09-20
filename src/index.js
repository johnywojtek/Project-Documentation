import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Components/App/_App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./Components/App/App";
import registerServiceWorker from "./registerServiceWorker";

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(<App />, document.getElementById("root"));
});
