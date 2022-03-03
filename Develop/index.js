// 1. TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


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

// 2.5(?) TODO: Create a question asking user to enter a short description

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
        }
    ])
}

promptQuestions();

// 7. TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// 8. TODO: Create a function to initialize app
function init() { }

// 9. Function call to initialize app
init();

// Work on index.js file first, then do generateMarkdown.js file second.