const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name,id, email, school){
        super(name, id, email);
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole(){
        return Intern
    }
}
   
    module.exports = Intern;




//name
    //id
    //email
    //getName()
    //getId()
    //getEmail()
    //getRole()//returns employee

    //school
    //getSchool()
    //getRole()//overridden to return intern