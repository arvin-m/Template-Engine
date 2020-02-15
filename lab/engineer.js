const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email,getGitHub) {
    super(name, id, email);
    this.GitHub = getGitHub;
  }

}

module.exports = Engineer;
