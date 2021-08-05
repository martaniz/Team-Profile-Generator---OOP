const fs  = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-tamplate.js');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Manager');

// const render = require("")    //html

const teamMembers= []

const employeeQuestions= [
    {   
        type: "input",
        message: "What is your name?",
        name: "name"
    },  
    {   
      type: "input",
        message: "What is your ID number?",
        name: "id"
    },
    {  
      type: "input",
        message: "Please provide your email",
        name: "email"
    }
]

const managerQuestion = {
    type: "input",
      message: "What is your office number",
      name: "officeNumber"
}

const internQuestion = {   
        type: "input",
          message: "What school is the intern from?",
          name: "school",
      }

const engineerQuestion= 
       {   
        type: "input",
          message: "What is the engineer's Github Username?",
          name: "github",    
      }


function managerQuestions() {
  const managerQuestions = [...employeeQuestions]
  managerQuestions.push(managerQuestion)
    inquirer.prompt(managerQuestions)
    .then((answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
    })
    )
    .then(internEngineer )
}

function internEngineer() {
    inquirer.prompt([
        {
            type: "list",
            message: "what type of employee would you like to add next?",
            name: "intEng",
            choices: ['Intern', 'Engineer', 'none'],
        }
    ])
    
    .then(answers => {
        if (answers.intEng === 'Intern') {
          const internQuestions = [...employeeQuestions]
          internQuestions.push(internQuestion)
            inquirer.prompt(internQuestions)
            .then((answers => {
              const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
              teamMembers.push(intern);
            }
               ))
               .then(internEngineer)

            
        } else if (answers.intEng === 'Engineer') {
          const engineerQuestions = [...employeeQuestions]
         engineerQuestions.push(engineerQuestion)
            inquirer.prompt(engineerQuestions)
            .then((answers => {
              const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
              teamMembers.push(engineer);
            }
              ))
          .then(internEngineer)
        } else {
            // make html file
            console.log(teamMembers)
            makeHTML(teamMembers);
        }
    })
  }
  function makeHTML(data) {
      fs.writeFile('TeamProfile.html', generatePage(data), err => {
          if (err) throw err;
          console.log('Team profile complete. Check out index.js to see teh output. ');
      })
 };
 managerQuestions();
 
  //runQuestions();
 // create an array variable to hold the team members
  // ask manager questions
  // store the manager info in the team member array
  // then ask what the user wants to add engineer or intern
  // ask either questions
  // save that employee into the team member array
  // ask whether they want to add another team member
  // if yes go to those questions and repeat (go back to 63)
  // if no, generate html


