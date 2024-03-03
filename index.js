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

            if (response.shapetype == "circle") {
                console.log("issa circle");
            } else if (response.shapetype == "triangle") {
                console.log("issa triangle");
            } else if (response.shapetype == "square") {
                console.log("issa square");
            } else {
                console.log("bad input, defaulting to circle");
            }

            function createFile() {
                const fs = require("fs");
                let inputs = "sigh";

                fs.appendFile('logo.svg', inputs, (err) =>

                    err ? console.error(err) : console.log("Generated logo.svg")
                );
            }

            return;
        });
}

// calling funct
init();