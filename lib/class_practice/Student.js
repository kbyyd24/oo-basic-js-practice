'use strict';

const Person = require('./Person');

class Student extends Person {
  constructor(name, age, clazz) {
    super(name, age);
    this.clazz = clazz;
  }
  introduce() {
    return super.introduce() + ` I am a Student. I am at Class ${this.clazz.number}.`;
  }
}

module.exports = Student;