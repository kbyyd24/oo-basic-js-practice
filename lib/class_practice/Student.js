'use strict';

const Person = require('./Person');

class Student extends Person {
  constructor(name, age, classObj) {
    super(name, age);
    this.class = classObj;
  }
  introduce() {
    return super.introduce() + ` I am a Student. I am at Class ${this.class.number}.`;
  }
}

module.exports = Student;