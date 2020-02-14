const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email,getGitHub) {
    super(name, id, email);
    this.getGitHub = getGitHub;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.getGitHub;
  }
    
}

module.exports = Engineer;
