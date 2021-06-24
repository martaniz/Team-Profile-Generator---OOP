const fs  = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-tamplate.js');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const teamMembers= []

const managerQuestion= [
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
    },
       {   
        type: "input",
          message: "What is your office number",
          name: "officeNumber"
      }
]

const questions = [
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
    },
   
    {   
      type: "input",
        message: "what is your github name",
        name: "github"
    },
    {   
      type: "input",
        message: "What is your school?",
        name: "school"
    }
  ]

function managerQuestions() {
    inquirer.prompt(managerQuestion)
    .then((answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        console.log(teamMembers)
    }))
}

function internEngineer() {
    inquirer.prompt([
        {
            type: "list",
            message: "what kind of employee would you like to add next?",
            name: "intEng",
            choices: ['Intern', 'Engineer', 'none'],
        }
    ]).then(answers => {
        if (answers.intEng === 'Intern') {
            // ask intern questions
            return this.intern;
        } else if (answers.intEng === 'Engineer') {
            // ask engineer question
        } else {
            // make html file
        }
    })
    
}
  function runQuestions() {
      inquirer.prompt(questions)
      .then((answers) => {
          makeHTML(answers)
          console.log(makeHTML(answers))
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


