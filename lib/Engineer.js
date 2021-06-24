const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github
    }
    getRole(){
        return Engineer
    }
    getGithub() {
        return this.github
    }
  }
    
    module.exports = Engineer;




//name
    //id
    //email
    //getName()
    //getId()
    //getEmail()
    //getRole()//returns employee
    //github//username
    //gitGithub()
    //getRole()//
