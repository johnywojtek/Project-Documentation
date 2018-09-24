module.exports = [
    {
        name: "push()",
        definition: "Add element in last index of array",
        example: [
            "var foo = [1, 2, 3];",
            "var newLength = foo.push(5);",
            "console.log(foo); /* [ 1, 2, 3, 5] */",
            "console.log(newLength); /* 4 */"
        ]
    },
    {
        name: "pop()",
        definition: "Remove and return element from last index of array",
        example: [
            "var foo = [1, 2, 3, 4];",
            "var lastElem = foo.pop();",
            "console.log(foo); /* [ 1, 2, 3] */",
            "console.log(lastElem); /* 4 */"
        ]
    },
    {
        name: "reverse()",
        definition: "Reverse array",
        example: [
            "var foo = [1, 2, 3];",
            "var newArray = foo.reverse();",
            "console.log(foo); /* [3, 2, 1] */",
            "console.log(newArray); /* [3, 2, 1] */"
        ]
    },
    {
        name: "shift()",
        definition: "Remove and return first element of array",
        example: [
            "var foo = [2, 3, 12];",
            "var firstElem = foo.shift();",
            "console.log(foo); /* [3, 12] */",
            "console.log(firstElem); /* 2 */"
        ]
    },
    {
        name: "unshift()",
        definition: "Add element in front of array and return new array",
        example: [
            "var foo = [2, 3, 12];",
            "var newLength = foo.unshift(5);",
            "console.log(foo); /* [5, 2, 3, 12] */",
            "console.log(newLength); /* 4 */"
        ]
    }
];
