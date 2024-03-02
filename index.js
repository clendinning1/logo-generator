// code from other project; this is how we initialize the inquirer
// other project wanted an array of questions for user input like so, but i couldnt get it to work?:
// const questions = [];

function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Give a description of your project:",
                name: 'description',
            },
            {
                type: 'input',
                message: "Write installation instructions:",
                name: 'installation',
            },
            {
                type: 'input',
                message: "Include usage information:",
                name: 'usage',
            },
            {
                type: 'checkbox',
                message: "Choose a license:",
                choices: ["1", "2", "3", "etc"],
                name: 'license',
            },
            {
                type: 'input',
                message: "Add contribution guidelines:",
                name: 'contribution',
            },
            {
                type: 'input',
                message: "Give test instructions:",
                name: 'instructions',
            },
            {
                type: 'input',
                message: "Enter your Github account:",
                name: 'instructions',
            },
            {
                type: 'input',
                message: "Enter your email:",
                name: 'instructions',
            },
            {
                type: 'input',
                message: "Additional instructions on how to contact you:",
                name: 'instructions',
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