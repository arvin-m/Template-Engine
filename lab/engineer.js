const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email,getGitHub) {
    super(name, id, email);
    this.GitHub = getGitHub;
  }
  getRole() {
    return "Engineer";
  }

}

module.exports = Engineer;
