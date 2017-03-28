'use strict';

const Person = require('./Person');

class Teacher extends Person {
  constructor(name, age, classObj) {
    super(name, age);
    this.class = classObj;
  }
  introduce() {
    const introFromPerson = super.introduce();
    if (this.class) {
      return introFromPerson + ` I am a Teacher. I teach Class ${this.class.number}.`;
    } else {
      return introFromPerson + ` I am a Teacher. I teach No Class.`;
    }
  }
}

module.exports = Teacher