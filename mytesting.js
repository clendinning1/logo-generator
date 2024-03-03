function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'checkbox',
                message: "Choose your shape:",
                choices: ["triangle", "circle", "square"],
                name: 'shape-type',
            },
        ])
        .then((input) => {
            // put "answers" in the blue parantheses later
            // save answers
            console.log(input)
            return;
            // generate file
        });
}

init();