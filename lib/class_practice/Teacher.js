'use strict';

const Person = require('./Person');

class Teacher extends Person {
  constructor(name, age, clazz) {
    super(name, age);
    this.clazz = clazz;
  }
  introduce() {
    const introFromPerson = super.introduce();
    return introFromPerson + ' I am a Teacher. I teach ' +
      (this.clazz ? `Class ${this.clazz.number}.` : `No Class.`);
  }
  introduceWith(student) {
    const introFromPerson = super.introduce();
    return introFromPerson + ' I am a Teacher. I ' +
      (this.clazz.number === student.clazz.number ? `teach ${student.name}.` : `don't teach ${student.name}.`);
  }
}

module.exports = Teacher;