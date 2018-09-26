import React, { Component } from "react";
import Prism from "prismjs/";
import "../../styles/main.scss";
import arrays from "../../data/react";

class ReactComponents extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        let list = arrays.map(e => {
            return (
                <div className="mainItem">
                    <p className="mainItem__heading">{e.name}</p>
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
                    <p className="mainHeading__heading">
                        Components let you split the UI into independent,
                        reusable pieces, and think about each piece in
                        isolation.
                    </p>
                </div>
                <div>{list}</div>
            </div>
        );
    }
}

export default ReactComponents;
