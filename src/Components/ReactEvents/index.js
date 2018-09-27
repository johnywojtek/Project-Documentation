import React, { Component } from "react";
import Prism from "prismjs";
import prismJs from "prismjs/components/prism-jsx";
import "../../styles/main.scss";
import arrays from "../../data/events";
import arraysExample from "../../data/eventsExample";

class ReactEvents extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        let list = arrays.map(e => {
            return (
                <div className="mainItem">
                    <p className="mainItem__heading">{e.name}</p>
                    <pre>
                        <code className="language-javascript">
                            {e.example.join("\r\n")}
                        </code>
                    </pre>
                </div>
            );
        });

        let list2 = arraysExample.map(e => {
            return (
                <div className="mainItem">
                    <pre className="mainItem__pre">
                        <p className="mainItem__def ">{e.name}</p>
                    </pre>
                    <pre>
                        <code className="language-jsx">
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
                        Quick reminder of events
                    </p>
                </div>
                <div className="mainItem--event">{list}</div>
                <div className="mainHeading">
                    <p className="mainHeading__heading">Examples</p>
                </div>
                <div className="mainItem--event">{list2}</div>
            </div>
        );
    }
}

export default ReactEvents;
