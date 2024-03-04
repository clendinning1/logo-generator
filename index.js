// importing classes
const { Triangle, Circle, Square } = require('./lib/shapes.js');

const colorNames = ["aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgrey",
    "darkgreen",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "grey",
    "green",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgrey",
    "lightgreen",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"];

// inquirer funct
function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter text (up to 3 characters):",
                name: 'inqTextInput',
                // validating character input length
                validate: function (input) {
                    if (input.length >= 4) {
                        return "Must enter 1-3 characters";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                message: "Enter text color:",
                name: 'inqTextColor',
                validate: function (input) {
                    const isValidColor = color => {
                        // using regex to make sure the hex code is valid
                        const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                        return hexPattern.test(color);
                    }
                    const testInput = isValidColor(input);
                    if (testInput === false) {
                        // if the hex code isn't valid, check to see if the input is a css color name instead.
                        // .toLowerCase ensures case insensitivity for the check :)
                        if (colorNames.includes(input.toLowerCase())) {
                            return true;
                        } else {
                            // if not, error
                            return "Must enter a valid color";
                        }
                    } else {
                        // if the hex code is valid, return "true" for the validator
                        return true;
                    }
                }
            },
            {
                type: 'checkbox',
                message: "Choose your shape (will default to circle):",
                choices: ["triangle", "circle", "square"],
                default: "circle",
                name: 'inqShapeType',
            },
            {
                type: 'input',
                message: "Enter shape color:",
                name: 'inqShapeColor',
                validate: function (input) {
                    const isValidColor = color => {
                        // All notes here are the same as the previous color input
                        const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                        return hexPattern.test(color);
                    }
                    const testInput = isValidColor(input);
                    if (testInput === false) {
                        if (colorNames.includes(input.toLowerCase())) {
                            return true;
                        } else {
                            return "Must enter a valid color";
                        }
                    } else {
                        return true;
                    }
                }
            },
        ])
        .then((response) => {
            // svg strings that are the same for each shape
            const svg1 = "<svg width=\"300\" height=\"200\"> \n <style> \n .cirsq { \n font: bold 75px sans-serif; \n } .tri { \n font: bold 70px sans-serif; \n } \n </style> \n "
            const svg2 = " \n </svg>"

            if (response.inqShapeType == "triangle") {
                // if the chosen shape was a triangle...
                console.log("Building your triangle...");

                // plugging in inputs from inquirer into svg file string
                const newTriangle = new Triangle(response.inqTextInput, response.inqTextColor, response.inqShapeColor);
                const fullTriangleString = svg1 + newTriangle.triangleString + svg2;

                // creating the svg file
                function createTriangle() {
                    const fs = require("fs");

                    fs.appendFile('logo.svg', fullTriangleString, (err) =>
                        err ? console.error(err) : console.log("Generated logo.svg")
                    );
                }

                createTriangle();

            } else if (response.inqShapeType == "square") {
                // if square... (same as above)
                console.log("Building your square...");

                const newSquare = new Square(response.inqTextInput, response.inqTextColor, response.inqShapeColor);
                const fullSquareString = svg1 + newSquare.squareString + svg2;

                function createSquare() {
                    const fs = require("fs");

                    fs.appendFile('logo.svg', fullSquareString, (err) =>
                        err ? console.error(err) : console.log("Generated logo.svg")
                    );
                }

                createSquare();

            } else {
                // if circle... (same as above)
                console.log("Building your circle...");

                const newCircle = new Circle(response.inqTextInput, response.inqTextColor, response.inqShapeColor);
                const fullCirString = svg1 + newCircle.circleString + svg2;

                function createCircle() {
                    const fs = require("fs");

                    fs.appendFile('logo.svg', fullCirString, (err) =>
                        err ? console.error(err) : console.log("Generated logo.svg")
                    );
                }

                createCircle();
            }

            return;
        });
}

// calling funct
init();