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
                name: 'text-color',
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
                name: 'shape-type',
            },
            {
                type: 'input',
                message: "Enter shape color:",
                name: 'shape-color',
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
            const fs = require("fs");
            const testArg = "sillay"
            // need to make inputs into vars?
            fs.appendFile('logo.svg', response.characterinput, (err) =>

                err ? console.error(err) : console.log("Generated logo.svg")
            );

            // put "answers" in the blue parantheses later
            // save answers
            // if no shape type given, default to circle
            console.log()
            return;
            // generate file
        });
}

// calling funct
init();




// code from other project; i think this is how we add files?:
// const fs = require('fs');
// fs.appendFile('log.txt', "sillymode", (err) =>
//     err ? console.error(err) : console.log('Commit logged!')
// );
// function writeToFile(fileName, data) {
// }