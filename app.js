
const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lab/manager.js");
const Engineer = require("./lab/engineer.js");
const Intern = require("./lab/intern.js");



function appBody(){

    function createanager(){

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
                
                  if (Email !== "" ) {
                    return true;
                  }
                  return "Please enter a VALID Email address!";
                }
              },{
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
            const manager= new Manager(answers.managerName,answers.managerId,answers.managerEmail,answers.officeNumber);
            console.log(manager);
          });




        }
        
        
        createanager()








}



appBody();

    