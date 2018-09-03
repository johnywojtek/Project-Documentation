module.exports = [
    {
        name:
            "Functional Component - The simplest way to define a component is to write a JavaScript function:",
        definition:
            "This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “functional” because they are literally JavaScript functions.",
        example: [
            "function Welcome(props) {",
            "  return <h1>Hello, {props.name}</h1>;",
            "}"
        ]
    },
    {
        name: "Class Component",
        definition: "Remove and return element from last index of array",
        example: [
            "class Welcome extends React.Component {",
            "  render() {",
            "    return <h1>Hello, {this.props.name}</h1>;",
            "  }",
            "}"
        ]
    }
];
