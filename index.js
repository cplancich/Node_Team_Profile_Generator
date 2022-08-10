const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// create an empty array list to store employee objects
const employees = [];

function init() {
teamPrompt();
// Beginning prompt asking user what they would like to do
function teamPrompt() {

    inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do?",
            name: "firstPrompt",
            choices: [
                "Add Manager",
                "Add Intern",
                "Add Engineer",
                "Finish building team"
            ]
        },
    ]).then((response) => {
        if(response.firstPrompt==="Add Manager") {
            newManager();
        } else if (response.firstPrompt==="Add Engineer") {
            newEngineer();
        } else if(response.firstPrompt==="Add Intern") {
            newIntern();
        } else {
            generateHTML();
        }
    })

}

// Gather manager data
function newManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your Manager's name?",
            name: "managerName",
        },
        {
            type: 'input',
            message: "What is your Manager's employee ID?",
            name: "managerId",
        },
        {
            type: 'input',
            message: "What is your Manager's email address?",
            name: "managerEmail",
        },
        {
            type: 'input',
            message: "What is your Manager's office number?",
            name: "managerOffice",
        },
    ])
    // Push user input data as an object into employees array
    .then((response) => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice) 

        employees.push(manager)
        // Call the teamPrompt() function to return the user to the first screen
        teamPrompt()
        })  

    }

// gather engineer data
function newEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your Engineer's name?",
            name: "engineerName",
        },
        {
            type: 'input',
            message: "What is your Engineer's employee ID?",
            name: "engineerId",
        },
        {
            type: 'input',
            message: "What is your Engineer's email address?",
            name: "engineerEmail",
        },
        {
            type: 'input',
            message: "What is your Engineer's Github username?",
            name: "github",
        },
    ])
    // Push user input data as an object into employees array
    .then((response) => {
        const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github) 
    
        employees.push(engineer)
        // Call the teamPrompt() function to return the user to the first screen
        teamPrompt()
    })
}
// gather intern data
function newIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your Intern's name?",
            name: "internName",
        },
        {
            type: 'input',
            message: "What is your Intern's employee ID?",
            name: "internId",
        },
        {
            type: 'input',
            message: "What is your Intern's email address?",
            name: "internEmail",
        },
        {
            type: 'input',
            message: "What school does your Intern attend?",
            name: "school",
        },
    ])
    // Push user input data as an object into employees array
    .then((response) => {
        const intern = new Intern(response.internName, response.internId, response.internEmail, response.school) 
    
        employees.push(intern)
        // Call the teamPrompt() function to return the user to the first screen
        teamPrompt()
    })
}

// Generate html & write file
    // Import Employee array to generate HTML

    // generateHTML()

    // generateFile()

}

init();