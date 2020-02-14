
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lab/manager.js");
const Engineer = require("./lab/engineer.js");
const Intern = require("./lab/intern.js");

const teamMember=[]



function appBody() {
    console.log("Please create Your Team ")

    function createanager() {

        inquirer
            .prompt([{
                type: "input",
                name: "managerName",
                message: "What is your manager's name? ",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter valid string character.";
                }
            },
            {
                type: "number",
                name: "managerId",
                message: "What is your manager's id? ",
                validate: answer => {

                    if (answer === Number || answer > 0) {
                        return true;
                    }
                    return "Please enter a NUMBER and GRATER than zero.";
                }
            },
            {
                type: "email",
                name: "managerEmail",
                message: "What is your manager's VALID Email ? ",
                validate: Email => {

                    if (Email !== "") {
                        return true;
                    }
                    return "Please enter a VALID Email address!";
                }
            },
            {
                type: "number",
                name: "officeNumber",
                message: "What is your manager's office number ? ",
                // validate: officeNum => {

                //   if (officeNum === Number ) {
                //     return true;
                //   }
                //   return "Please enter a NUMBER!";
                // }
            },


            ])
            .then(answers => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
                console.log(manager);
                teamMember.push(manager);
                createTeamMember()

            });



    }

    // ------------------------------------------------------------------------------------
    function createTeamMember() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "createTeamMember",
                    message: "Wich type of team member would you like to add ? ",
                    choices: [
                        "Engineer",
                        "Intern",
                        "I don't want to add any more team members"
                    ]
                }
            ])
            .then(choices => {
                switch (choices.createTeamMember) {
                    case "Engineer":
                        createEanageer();
                        break;
                    case "Intern":
                        createIntern();
                        break;
                    default: generateHTML();

                }

            })




    }

    // ------------------------------------------------------------------------------------
    function createEanageer() {

        inquirer
            .prompt([
                {
                    type: "input",
                    name: "eanageerName",
                    message: "What is your Eanageer's name? ",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter valid string character.";
                    }
                },
                {
                    type: "number",
                    name: "eanageerId",
                    message: "What is your Eanageer's id? ",
                    validate: answer => {

                        if (answer === Number || answer > 0) {
                            return true;
                        }
                        return "Please enter a NUMBER and GRATER than zero.";
                    }
                },
                {
                    type: "email",
                    name: "eanageerEmail",
                    message: "What is your Eanageer's VALID Email ? ",
                    validate: Email => {

                        if (Email !== "") {
                            return true;
                        }
                        return "Please enter a VALID Email address!";
                    }
                },
                {
                    type: "input",
                    name: "eanageerGitHub",
                    message: "What is your Eanageer's GitHub user name ? ",
                    validate: github => {

                        if (github !== "") {
                            return true;
                        }
                        return "Please enter the GitHub user name!";
                    }
                },
            ])
            .then(answers => {
                const engineer = new Engineer(answers.eanageerName, answers.eanageerId, answers.eanageerEmail, answers.eanageerGitHub);
                console.log(engineer);
                teamMember.push(engineer);
                createTeamMember();


            })





    };

    // ------------------------------------------------------------------------------------
    function createIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is your intern's name? ",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter valid string character.";
                    }
                },
                {
                    type: "number",
                    name: "internId",
                    message: "What is your intern's id? ",
                    validate: answer => {

                        if (answer === Number || answer > 0) {
                            return true;
                        }
                        return "Please enter a NUMBER and GRATER than zero.";
                    }
                },
                {
                    type: "email",
                    name: "internEmail",
                    message: "What is your intern's VALID Email ? ",
                    validate: Email => {

                        if (Email !== "") {
                            return true;
                        }
                        return "Please enter a VALID Email address!";
                    }
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "What is your intern's school name ? ",
                    validate: school => {

                        if (school !== "") {
                            return true;
                        }
                        return "Please enter the school  name!";
                    }
                },
            ])
            .then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                console.log(intern);
                createTeamMember();


            })








    };

    // ------------------------------------------------------------------------------------
    function generateHTML() {
        const cardToDisplay=[];
        for(let i=0; i<teamMember.length;i++){
           
            if(teamMember[i].officeNumber){
                const managerCrad=`
        <div class="col-sm-4">
            <!-- Manager Card -->
            <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">${teamMember[i].name}</h5>
                    <p class="card-text "><span class="fas fa-user-tie"> </span> Manager</p>

                    <ul class="list-group list-group-flush   ">
                        <li class="list-group-item text-white bg-dark mb-3 border border-white">ID :<span>${teamMember[i].id}</span>
                        </li>
                        <li class="list-group-item text-white bg-dark mb-3 border border-white">Email :<span>${teamMember[i].email}</span>
                        </li>
                        <li class="list-group-item text-white bg-dark mb-3 border border-white">Office Number
                            :<span>${teamMember[i].officeNumber}</span></li>
                    </ul>


                </div>
            </div>


        </div>`;
        cardToDisplay.push(managerCrad);

            }
            if(teamMember[i].GitHub){
                const engineerCard =`<!-- Engineer Card -->
        <div class="col-sm-4">
        
            <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h5 class="card-title">${teamMember[i].name}</h5>
                    <p class="card-text "><span class="fas fa-user-cog"> </span> Engineer</p>
        
                    <ul class="list-group list-group-flush   ">
                        <li class="list-group-item text-white bg-dark mb-3 border border-white">ID :<span>${teamMember[i].id}</span>
                        </li>
                        <li class="list-group-item text-white bg-dark mb-3 border border-white">Email :<span>${teamMember[i].email}</span>
                        </li>
                        <li class="list-group-item text-white bg-dark mb-3 border border-white">Github
                            :<span>${teamMember[i].GitHub}</span></li>
                    </ul>
        
        
                </div>
            </div>
            
        
        </div>`
        cardToDisplay.push(engineerCard);

            }

        }
        

        

        

        const frameHtml=`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Employees Information</title>
            <!-- Boostrap CSS  -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <!-- CSS File -->
            <link rel="stylesheet" href="style.css">
            <!-- google font -->
            <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
            <!-- Font Awsome -->
            <script src="https://kit.fontawesome.com/f520db768e.js" crossorigin="anonymous"></script>
        </head>
        
        <body>
            <!-- nav bar -->
            <ul class="nav justify-content-center" id="nav">
                <li class="nav-item">
                    <a class="nav-link active fas fa-address-card" id="nav-icon"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" id="nav-text">Employees Summary</a>
                </li>
        
            </ul>
        
            <!-- main content -->
        
            <div class="container-fluid">
                <div class="row">
                    
                   ${cardToDisplay}
        
                    <!-- end of container fluid -->
                </div>
        
        
        
        
            </div>
        
        </body>
        
        </html>`

        fs.writeFile("./html/test.html",frameHtml,function(err){
            console.log(err);


        })




    }





    createanager()





}



appBody();

