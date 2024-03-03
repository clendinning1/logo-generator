
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
                message: "Enter text color (keyword or hexadecimal):",
                name: 'text-color',
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
                message: "Enter shape color (keyword or hexadecimal):",
                name: 'shape-color',
            },
        ])
        .then(() => {
            // put "answers" in the blue parantheses later
            // save answers
            console.log("Generated logo.svg")
            return;
            // generate file
        });
    // .catch((error) => {
    //     if (error.isTtyError) {
    //         // Prompt couldn't be rendered in the current environment
    //     } else {
    //         // Something else went wrong
    //     }
    // });
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