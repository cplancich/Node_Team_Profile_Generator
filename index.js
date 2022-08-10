const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// create an empty array list to store employee objects
const employees = [];

function init() {
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
        } else if(response.firstPrompt==="Add Intern") {
            newIntern();
        } else if (response.firstPrompt==="Add Engineer") {
            newEngineer();
        } else {
            generateHTML();
        }
    })

    // gather manager data
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
]).then((response) => {
    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice) 

    employees.push(manager)
})  
}

// gather engineer data

    // inquirer.prompt()

    // THEN build an engineer object

// gather intern data

    // inquierer.prompt()

    // THEN build an intern object

// Ask user for which team member they want to add / if are they finished adding members

    // inquirer.prompt

    // THEN decide which function to call

// Generate html & write file
    // Import Employee array to generate HTML

    // generateHTML()

    // generateFile()

  
}

init();