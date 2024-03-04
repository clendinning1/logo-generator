// Shape Classes!
function Shape(baseTextInput, baseTextColor, baseShapeColor) {
    this.baseTextInput = baseTextInput;
    this.baseTextColor = baseTextColor;
    this.baseShapeColor = baseShapeColor;
};

function Circle(baseTextInput, baseTextColor, baseShapeColor) {
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    this.circleString = "<circle cx=\"150\" cy=\"100\" r=\"90\" fill=\"" + baseShapeColor + "\" /> \n <text x = \"150\" y = \"125\" fill = \"" + baseTextColor + "\" text-anchor=\"middle\" class=\"cirsq\" >" + baseTextInput + "</text>";
};



// inquirer funct
function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter text (up to 3 characters):",
                name: 'inqTextInput',
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
                        const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                        return hexPattern.test(color);
                    }
                    const testInput = isValidColor(input);
                    if (testInput === false) {
                        return "Must enter a valid color";
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'checkbox',
                message: "Choose your shape:",
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
                        const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
                        return hexPattern.test(color);
                    }
                    const testInput = isValidColor(input);
                    if (testInput === false) {
                        return "Must enter a valid color";
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
                 console.log("Building your triangle...");
             } else if (response.inqShapeType == "square") {
                console.log("Building your square...");
             } else {
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