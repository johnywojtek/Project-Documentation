import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Components/Routes/index";

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(<Routes />, document.getElementById("root"));
});
