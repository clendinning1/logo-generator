
























// inquirer funct
function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter text (up to 3 characters):",
                name: 'characterinput',
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
                name: 'textcolor',
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
                name: 'shapetype',
            },
            {
                type: 'input',
                message: "Enter shape color:",
                name: 'shapecolor',
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
            // running shapes.js
            require('./lib/shapes.js');

            const svg1 = "<svg width=\"300\" height=\"200\"> \n <style> \n .cirsq { \n font: bold 75px sans-serif; \n } .tri { \n font: bold 70px sans-serif; \n } \n </style> \n "
            const svg2 = " \n </svg>"

            let shapecolor = "white"
            let textcolor = "black"
            let textinput = "EXA"

            const circleString = "<circle cx=\"150\" cy=\"100\" r=\"90\" fill=\"" + shapecolor + "\" /> \n <text x = \"150\" y = \"125\" fill = \"" + textcolor + "\" text-anchor=\"middle\" class=\"cirsq\" >" + textinput + "</text>"

            const logoData = svg1 + circleString + svg2

            if (response.shapetype == "circle") {
                console.log("Building your circle...");
            } else if (response.shapetype == "triangle") {
                console.log("Building your triangle...");
            } else if (response.shapetype == "square") {
                console.log("Building your square...");
            } else {
                console.log("Bad input, defaulting to circle. Building your circle...");
            }

            function createFile() {
                const fs = require("fs");

                fs.appendFile('logo.svg', logoData, (err) =>
                    err ? console.error(err) : console.log("Generated logo.svg")
                );
            }

            createFile();

            return;
        });
}

// calling funct
init();