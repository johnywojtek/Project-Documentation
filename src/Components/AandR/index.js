import React, { Component } from "react";
import Prism from "prismjs";
import "../../styles/main.scss";
import arrays from "../../data/arrays";

class AandR extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        let list = arrays.map(e => {
            return (
                <div className="mainItem">
                    <p className="mainItem__heading">Array {e.name}</p>
                    <p className="mainItem__def">{e.definition}</p>
                    <pre>
                        <code className="language-javascript">
                            {e.example.join("\r\n")}
                        </code>
                    </pre>
                </div>
            );
        });

        return (
            <div>
                <div className="mainHeading">
                    <p className="mainHeading__heading">Add/remove items</p>
                    <p className="mainHeading__def">
                        .pop() .push() .reverse() .shift() .unshift()
                    </p>
                </div>
                <div>{list}</div>
            </div>
        );
    }
}

export default AandR;
