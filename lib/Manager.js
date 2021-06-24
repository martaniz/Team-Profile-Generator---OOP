const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name,id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole(){
        return Manager
    }
}
   
    module.exports = Manager;



//name
    //id
    //email
    //getName()
    //getId()
    //getEmail()
    //getRole()//returns employee

    //officeNumber
    //getRole()//overridden to return manager