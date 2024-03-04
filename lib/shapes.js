const svg1 = "<svg width=\"300\" height=\"200\"> \n <style> \n .cirsq { \n font: bold 75px sans-serif; \n } .tri { \n font: bold 70px sans-serif; \n } \n </style> \n "
const svg2 = " \n </svg>"


function Shape(textinput, textcolor, shapecolor) {
    this.textinput = textinput;
    this.textcolor = textcolor;
    this.shapecolor = shapecolor;
};

// function Triangle(textinput, textcolor, shapecolor) {
//     Shape.call(this, textinput, textcolor, shapecolor);
// };

// function Square(textinput, textcolor, shapecolor) {
//     Shape.call(this, textinput, textcolor, shapecolor);
// };

function Circle(textinput, textcolor, shapecolor, circleString) {
    Shape.call(this, textinput, textcolor, shapecolor);
    this.circleString = "<circle cx=\"150\" cy=\"100\" r=\"90\" fill=\"" + shapecolor + "\" /> \n <text x = \"150\" y = \"125\" fill = \"" + textcolor + "\" text-anchor=\"middle\" class=\"cirsq\" >" + textinput + "</text>";
};


const newCircle = new Circle("EXA", "#123123", "#789789");

const fullString = svg1 + newCircle.circleString + svg2;

console.log(fullString);



function createFile() {
    const fs = require("fs");

    fs.appendFile('logo.svg', fullString, (err) =>
        err ? console.error(err) : console.log("Generated logo.svg")
    );
}

createFile();
































