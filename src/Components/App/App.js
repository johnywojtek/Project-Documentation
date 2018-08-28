import React, { Component } from "react";
import arrays from "../Arrays/arrays";

import "../prism/prism.css";
import Header from "../Header";
import Main from "../Main";
import Nav from "../Nav";
import Prism from "prismjs";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="mainContener">
                    <Nav />
                    <Main array={arrays} />
                </div>
            </div>
        );
    }
}
export default App;
