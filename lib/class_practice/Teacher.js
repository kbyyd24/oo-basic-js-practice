'use strict';

const Person = require('./Person');

class Teacher extends Person {
  constructor(name, age, clazz) {
    super(name, age);
    this.clazz = clazz;
  }
  introduce() {
    const introFromPerson = super.introduce();
    if (this.clazz) {
      return introFromPerson + ` I am a Teacher. I teach Class ${this.clazz.number}.`;
    } else {
      return introFromPerson + ` I am a Teacher. I teach No Class.`;
    }
  }
  introduceWith(student) {
    const introFromPerson = super.introduce();
    if (student.clazz.number === this.clazz.number) {
      return introFromPerson + ` I am a Teacher. I teach ${student.name}.`;
    } else {
      return introFromPerson + ` I am a Teacher. I don't teach Jerry.`;
    }
  }
}

module.exports = Teacher;