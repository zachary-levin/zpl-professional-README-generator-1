// 3. TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  }
}

// 4. TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  }
}

// 5. TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return 'No license.';
  } else {
    const badge = renderLicenseBadge(license)
    const link = renderLicenseLink(license);
    return `${badge} ${link}`;
  }
}

// 6. TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}, 
  ## Description

  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  
  - What was my motivation? ${data.motivation}
  - Why did I build this project? ${data.buildReason}
  - What problem does it solve? ${data.problem}
  - What did I learn? ${data.learn}
  - What makes my project stand out? ${data.standout}
  
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Description](#description)
  - [Motivation](#motivation)
  - [BuildReason](<#build reason>)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)

  ## Installation

  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

  ## Usage

  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

  md
  ![alt text](assets/images/screenshot.png)
  
  ## Credits

  List your collaborators, if any, with links to their GitHub profiles.

  If you used any third-party assets that require attention, list the creators with links to their primary web presence in this section.

  If you followed tutorials, include links to those here as well.

  ## License

  ${renderLicenseSection(data.license)}

  ---

  ## Features
  
  If your project has a lot of features, list them here.

  ## How to Contribute

  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

  ## Tests

  Go the extra mile and write tests for your application. Then provide examples on how to run them here.

  ## Questions?
  If you have any questions, check out my [GitHub profile](https://github.com/${data.githubUsername}) at or email me at [zlevin706@gmail.com](${data.email})
`;
}

module.exports = generateMarkdown;
