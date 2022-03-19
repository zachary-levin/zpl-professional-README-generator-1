// Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const { resolve } = require('path');


// Create an array of questions for user input

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
            message: 'Why did you build this project? (Required)',
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
            name: 'standout',
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
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter your GitHub username. (Required)',
            validate: (usernameInput) => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.')
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address here.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.')
                }
            }
        }
    ])
    .then(promptData => {
        //console.log(promptData)
        const mdstring = generateMarkdown(promptData)
        //console.log(mdstring)
        // Call WriteToFile function and pass what it is looking for (fileName, data)
        // data is mdstring
        // fileName would be "README.md"
        
        writeToFile('./output/README.md', mdstring)
    });
}

promptQuestions();

// 7. TODO: Create a function to write README file
function writeToFile(README, mdstring) {
        fs.writeFile(README, mdstring, err => {
            if (err) {
                console.log('Issue with creating file!');
                // return out of the function here if the files has issues being created
                return;
            }
            console.log('README created!')
    })
 };