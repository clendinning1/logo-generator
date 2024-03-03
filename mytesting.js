function init() {
    const inquirer = require('inquirer');
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter text (up to 3 characters):",
                name: 'characterinput',
               validate: function(input){

                   // return /^a-zA-Z]{3,}$/.test(input);

                   if (input === "1") {
                       return "Don't put the number 1 bro";
                   } else {
                    return true;
                   }
               }
            }
        ])
        .then(() => {
            console.log("Done!")
            return;
        });
}

init();