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
  console.log(data);
  return `# ${data.title}, ## Table of Contents (Optional)

  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Motivation](#motivation)
  - [Build Reason](<#build reason>)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  
  ## Motivation
  
  ${data.motivation}
  
  ## Build Reason
  
  ${data.buildReason}
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
`;
}

module.exports = generateMarkdown;
