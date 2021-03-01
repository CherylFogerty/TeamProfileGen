const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");  
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

fs.writeFile('./dist/index.html');

let teamArray = []

function askEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is the name of your employee?",
        },
        {
            type: "input",
            name: "employeeID",
            message: "What is the ID of your employee?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Email of your employee?",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the Office Number of your employee?",
        },
        {
            type: "input",
            name: "managerRole",
            message: "What is the role of your employee?",
        },
        {
            type: "input",
            name: "managerName",
            message: "What is the name of your manager?",
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the ID of your manager?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Email of your manager?",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the Office Number of your manager?",
        },
        {
            type: "input",
            name: "managerRole",
            message: "What is the role of your manager?",
        },
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of your employee?",
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is the ID of your engineer?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the Email of your engineer?",
        },
        {
            type: "input",
            name: "engineerOfficeNumber",
            message: "What is the Office Number of your engineer?",
        },
        {
            type: "input",
            name: "engineerRole",
            message: "What is the role of your engineer?",
        },
        {
            type: "input",
            name: "engineerGithubUserName",
            message: "What is the Github Username of your engineer?",
        },
        {
            type: "input",
            name: "internName",
            message: "What is the name of your intern?",
        },
        {
            type: "input",
            name: "internID",
            message: "What is the ID of your intern?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the Email of your intern?",
        },
        {
            type: "input",
            name: "internOfficeNumber",
            message: "What is the Office Number of your intern?",
        },
        {
            type: "input",
            name: "internRole",
            message: "What is the role of your intern?",
        },
        {
            type: "input",
            name: "internSchoolName",
            message: "What is the name of your Intern's School?",
        },
    
    ]).then(answers =>{
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchoolName)
        teamArray.push(intern)
        askEmployeeQuestions();
    })
}

function writeToFile(file, data) {
    fs.writeFileSync();
}

function buildTeam() {
    console.log("this is the build team function")
    const pageInfo = render(teamArray);
    fs.writeToFile('index.html', pageInfo);
}



askEmployee();