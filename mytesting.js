function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter text (up to 3 characters):",
                name: 'character-input',
                validate: function(input){
                    if (input === "1") {
                        return "Don't put the number 1 bro";
                    } else {}
                }
            }
        ])
        .then((answers) => {
            console.log("Done!")
            return
        });
}

init();