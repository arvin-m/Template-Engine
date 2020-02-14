
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lab/manager.js");
const Engineer = require("./lab/engineer.js");
const Intern = require("./lab/intern.js");



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
                createTeamMember()
                
            });

           
     
    }
    
// ------------------------------------------------------------------------------------
    function createTeamMember(){
        inquirer
        .prompt([
            {
                type:"list",
                name:"createTeamMember",
                message:"Wich type of team member would you like to add ? ",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                  ]
            }
        ])
        .then(choices =>{
            switch(choices.createTeamMember){
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
    function createEanageer(){
        
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
        .then( answers =>{
            const engineer= new Engineer(answers.eanageerName,answers.eanageerId,answers.eanageerEmail,answers.eanageerGitHub);
            console.log(engineer);
            createTeamMember();


        })





    };

// ------------------------------------------------------------------------------------
    function createIntern(){
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
                validate: github => {

                    if (school !== "") {
                        return true;
                    }
                    return "Please enter the school  name!";
                }
            },
        ])
        .then( answers =>{
            const intern= new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool);
            console.log(engineer);
            createTeamMember();


        })








    };

// ------------------------------------------------------------------------------------
    function generateHTML(){





    }





    createanager()





}



appBody();

