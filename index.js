const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team-profile.html");

const render = require("./utils/generate-html.js");

const teamProfile = []

//manager input
const managerPrompt = () => {
    return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: `What is the manager's name?`,
                    name: "name",
                },
                {
                    type: "input",
                    message: "What is the manager's id?",
                    name: "id",
                },
                {
                    type: "input",
                    message: "What is the manager's email?",
                    name: "email",
                },
                {
                    type: "input",
                    message: "What is the manager's office number?",
                    name: "officeNumber",
                },
            ]).then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                teamProfile.push(manager);
                resolve();
            });
    });
}

//engineer and intern input function
const employeePrompt = () => {
    return new Promise((resolve, reject) => {
        inquirer.prompt([
            {
                type: "list",
                message: "Use arrow keys to select the next type of employee to enter:",
                name: "employeeType",
                choices: [
                    "Engineer",
                    "Intern",
                    {
                        name: "None",
                        value: false
                    }
                ]
            },

            //engineer input
            {
                message: "What is the engineer's name?",
                name: "name",
                when: ({ employeeType }) => employeeType === "Engineer"
            },
            {
                message: "What is the engineer's ID?",
                name: "id",
                when: ({ employeeType }) => employeeType === "Engineer"
            },
            {
                message: "What is the engineer's email address?",
                name: "email",
                when: ({ employeeType }) => employeeType === "Engineer"
            },
            {
                message: "what is the engineer's GitHub username?",
                name: "github",
                when: ({ employeeType }) => employeeType === "Engineer"
            },

            //intern input
            {
                message: "What is the intern's name?",
                name: "name",
                when: ({ employeeType }) => employeeType === "Intern"
            },
            {
                message: "What is the intern's ID?",
                name: "id",
                when: ({ employeeType }) => employeeType === "Intern"
            },
            {
                message: "What is the intern's email address?",
                name: "email",
                when: ({ employeeType }) => employeeType === "Intern"
            },
            {
                message: "Which school is the intern from?",
                name: "school",
                when: ({ employeeType }) => employeeType === "Intern"
            }
        ]).then(answers => {
            if (answers.employeeType) {
                switch (answers.employeeType) {
                    case "Engineer":
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        teamProfile.push(engineer);
                        break;
                    case "Intern":
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        teamProfile.push(intern);
                        break;
                }
                return employeePrompt().then(() => resolve());
            } else {
                return resolve();
            }
        })
    })
}

//create and write HTML file
const createHTMLFile = (htmlPage) => {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }

    fs.writeFile(distPath, htmlPage, "utf-8", (err) => {
        if(err) throw err;
        console.log(`Team profile page sucessfully generated.`)
    });
}

//input manager first, then engineer or intern
managerPrompt().then(() => {
    return employeePrompt();
}).then(() => {
    const templateHTML = render(teamProfile)
    createHTMLFile(templateHTML);
}).catch((err) => {
    console.log(err);
});