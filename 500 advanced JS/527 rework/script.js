"use strict";

const data = [
    {
        id: "box",
        tag: "div",
    },
    {
        id: "nav",
        tag: "nav",
    },
    {
        id: "circle",
        tag: "",
    },
];

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id)
            throw new SyntaxError(`In data ${i + 1} not found id`);

        block.setAttribute("id", blockObj.id);
        document.body.append(block);
    });
} catch (error) {
    if (error.name == "SyntaxError") {
        console.log(error.message);
    } else throw error
}

const err = new Error("Some error");
console.log(err.name, err.message, err.stack);
