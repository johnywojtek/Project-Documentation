import React, { Component } from "react";
import Prism from "prismjs";
import "./Main.css";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: this.props.array
        };
    }
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        let list = this.state.array.map(e => {
            return (
                <div className="mainItem">
                    <p className="mainItem__heading">Array {e.name}</p>
                    <p className="mainItem__def">{e.example}</p>
                    <pre>
                        <code className="language-javascript">
                            {e.definition.join("\r\n")}
                        </code>
                    </pre>
                </div>
            );
        });

        return (
            <div className="main">
                <div className="mainHeading">
                    <p className="mainHeading__heading">
                        metody iteracyjne siala sialaa
                    </p>
                    <p className="mainHeading__def">Ty i ja ty i ja sialalaa</p>
                </div>

                <div>{list}</div>
            </div>
        );
    }
}

export default Main;
