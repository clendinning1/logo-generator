function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'checkbox',
                message: "Choose your shape:",
                default: "triangle",
                choices: ["triangle", "circle", "square"],
                name: 'shapetype'
            },
        ])
        .then((response) => {
            // put "answers" in the blue parantheses later
            // save answers
            console.log(response.shapetype)
            return;
            // generate file
        });
}

init();