const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

function init(){
    startHTML();
    createManager();
}
init();

function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: [
                "Yes, add an Engineer",
                "Yes, add an Intern",
                "No"
            ],
            name: "add"
        },
    ]).then(function(response){
        switch (response.add) {
            case "Yes, add an Engineer":
                createEngineer();
                break;
            case "Yes, add an Intern": 
                createIntern();
                break;
            case "No":
                endHTML();
                break;
        }
    })
}

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Manager's name?",
            name: "name"
        },
        {   
            type: "input",
            message: "What is the Manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Manager's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Manager's office phone?",
            name: "phone"
        }
    ]).then(function(response){
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const phone = response.phone;
        const manager = new Manager(name, id, email, phone);
        createTeam();
        addCardHTML(manager);
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {   
            type: "input",
            message: "What is the Engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Engineer's Git username?",
            name: "Git"

        }
    ]).then(function(response) {
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const Git = response.Git;
        const engineer = new Engineer(name, id, email, Git);
        createTeam();
        addCardHTML(engineer);
    })
};

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's name?",
            name: "name"
        },
        {   
            type: "input",
            message: "What is the Intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Intern's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Intern's college?",
            name: "Git"

        }
    ]).then(function(response){
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const college = response.college;
        const intern = new Intern(name, id, email, college);
        createTeam();
        addCardHTML(intern);
    })
};

function startHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Super Team Builder</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <nav class="navbar navbar-light">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">Super Team Builder</span>
            </div>
          </nav>`;

          console.log("START");

        fs.writeFile("./dist/index.html", html, function(err) {
            if (err) {
                console.log(err);
            }
        })
}

function addCardHTML(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const Job = member.getJob();
        const id = member.getId();
        const email = member.getEmail();
        let data = '';
        if (Job === "Engineer") {
            const Git = member.getGit();
            data = `
            <div class="card-container col-md-4">
                <div class="card">
                    <div class="card-body">
                    <h1 class="card-title">${name}</h1>
                    <h2 class="card-subtitle mb-2 text-muted">${Job}</h2>
                    <p><a href="www.Git.com/${Git}">${Git}</a></p>
                    <a href="mailto: ${email}">${email}</a>
                    <p class="id">${id}</p>
                    </div>
                </div>
            </div>
        </div>`
        } else if (Job === "Intern") {
            const college = member.getCollege();
            console.log(member.getCollege())
            data = `<div class="empty col-md-4"></div>
            <div class="card-container col-md-4">
                <div class="card">
                    <div class="card-body">
                    <h1 class="card-title">${name}</h1>
                    <h2 class="card-subtitle mb-2 text-muted">${Job}</h2>
                    <p class="college">${college}</p>
                    <a href="mailto: ${email}">${email}</a>
                    <p class="id">${id}</p>
                    </div>
                </div>
            </div>
        </div>`
        } else {
            const phone = member.getPhone();
            data = `
            <div class="card-container col-md-4">
                <div class="card">
                    <div class="card-body">
                    <h1 class="card-title">${name}</h1>
                    <h2 class="card-subtitle mb-2 text-muted">${Job}</h2>
                    <p class="phone">${phone}</p>
                    <a href="mailto: ${email}">${email}</a>
                    <p class="id">${id}</p>
                    </div>
                </div>
            </div>
        </div>`
        }
        fs.appendFile("./dist/index.html", data, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function endHTML() {
    const html = `
    </body>
    </html>`;
    console.log("END")

    fs.appendFile("./dist/index.html", html, function (err){
        if (err) {
            console.log(err);
        }
    })
}