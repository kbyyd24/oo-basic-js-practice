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
  introduceWith(student) {
    const introFromPerson = super.introduce();
    if (student.class.number === this.class.number) {
      return introFromPerson + ` I am a Teacher. I teach ${student.name}.`;
    } else {
      return introFromPerson + ` I am a Teacher. I don't teach Jerry.`;
    }
  }
}

module.exports = Teacher;