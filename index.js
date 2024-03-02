// code from other project; this is how we initialize the inquirer
// other project wanted an array of questions for user input like so, but i couldnt get it to work?:
// const questions = [];

function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter text (up to 3 characters):",
                name: 'character-input',
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
                name: 'shape-type',
            },
            {
                type: 'input',
                message: "Enter shape color (keyword or hexadecimal):",
                name: 'shape-color',
            },
        ])
        // .then((answers) => {
        //     // Use user feedback for... whatever!!
        // })
        .then((response) =>
            response.confirm === response.password
                ? console.log('Done!')
                : console.log('You forgot your password already?!')
        );
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