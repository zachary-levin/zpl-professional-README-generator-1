// 1. TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// 2. TODO: Create an array of questions for user input

const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation? (Required)',
            validate: motivationInput => {
                if (motivationInput) {
                    return true;
                } else {
                    console.log('Please enter your motivation reason!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'buildReason',
            message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.") (Required)',
            validate: buildReasonInput => {
                if (buildReasonInput) {
                    return true;
                } else {
                    console.log('Please enter the reason for why the project was built!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does it solve? (Required)',
            validate: problemInput => {
                if (problemInput) {
                    return true;
                } else {
                    console.log('Please enter what problem the project solves!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn? (Required)',
            validate: learnInput => {
                if (learnInput) {
                    return true;
                } else {
                    console.log('Please enter what you learned from this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'standoutReason',
            message: 'What makes your project stand out? (Required)',
            validate: standoutReasonInput => {
                if (standoutReasonInput) {
                    return true;
                } else {
                    console.log('Please enter what makes your project stand out!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you choose? Please select from below.',
            choices: ['MIT', 'Apache', 'None']
        }
    ])
    .then(promptData => {
        console.log(promptData)
        const mdstring = generateMarkdown(promptData)
        console.log(mdstring)
        // Call WriteToFile function and pass what it is looking for (fileName, data)
        // data is mdstring
        // fileName would be "README.md"
        
        //writeToFile('./output/README.md, mdstring)
    });
}

promptQuestions()
    
;

// 7. TODO: Create a function to write README file
function writeToFile(README, mdstring) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./output/README.md', mdstring, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
 };

// 8. TODO: Create a function to initialize app
function init() { }

// 9. Function call to initialize app
init();

// Work on index.js file first, then do generateMarkdown.js file second.