function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'checkbox',
                message: "Choose your shape:",
                choices: ["triangle", "circle", "square"],
                name: 'shapetype',
                validate: function (shapetype) {
                    if (shapetype === "triangle") {
                        return "Must choose a shape";
                    } else {
                        return true;
                    }
                }
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