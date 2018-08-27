import React, { Component } from "react";
import ReactDOM from "react-dom";
import arrays from "./arrays.js";

class Header extends Component {
    render() {
        return <div className="header" />;
    }
}
class Nav extends Component {
    render() {
        return <div className="nav" />;
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: this.props.array
        };
    }

    render() {
        let list = this.state.array.map(e => {
            return (
                <div className="mainItem">
                    <h2>Array {e.name}</h2>
                    <p>{e.example}</p>
                    <pre>
                        <code className="language-javascript">
                            {e.definition.join("\r\n")}
                        </code>
                    </pre>
                </div>
            );
        });
        return <div className="main">{list}</div>;
    }
}

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

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(<App />, document.getElementById("app"));
});
