function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter Color:",
                name: 'colorinput',
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
        .then(() => {
            console.log("Done!");
        });
}

init();