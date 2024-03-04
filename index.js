// shape classes!
function Shape(baseTextInput, baseTextColor, baseShapeColor) {
    // setting up values to be inherited by its children
    this.baseTextInput = baseTextInput;
    this.baseTextColor = baseTextColor;
    this.baseShapeColor = baseShapeColor;
};

function Triangle(baseTextInput, baseTextColor, baseShapeColor) {
    // calling from Shape class parent
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    // string for the shape specific input into the svg file.
    this.triangleString = "<polygon points=\"40 10, 260 10, 150 185\" style=\"fill: " + baseShapeColor + "\" /> \n <text x = \"145\" y = \"90\" fill = \"" + baseTextColor + "\" text-anchor=\"middle\" class=\"tri\" > " + baseTextInput + "</text>";
};

function Circle(baseTextInput, baseTextColor, baseShapeColor) {
    // calling from Shape class parent
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    // string for the shape specific input into the svg file.
    this.circleString = "<circle cx=\"150\" cy=\"100\" r=\"90\" fill=\"" + baseShapeColor + "\" /> \n <text x = \"150\" y = \"125\" fill = \"" + baseTextColor + "\" text-anchor=\"middle\" class=\"cirsq\" >" + baseTextInput + "</text>";
};

function Square(baseTextInput, baseTextColor, baseShapeColor) {
    // calling from Shape class parent
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    // string for the shape specific input into the svg file.
    this.squareString = "<rect x=\"65\" y=\"15\" width=\"170\" height=\"170\" fill=\"" + baseShapeColor + "\" /> \n <text x=\"150\" y=\"125\" fill= \"" + baseTextColor + "\" text-anchor=\"middle\" class=\"cirsq\">" + baseTextInput + "</text>";
};


// const { Triangle } = require("./lib/shapes.js");
// const { Circle } = require("./lib/shapes.js");
// const { Square } = require("./lib/shapes.js");

const colorNames = ["AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen"];

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