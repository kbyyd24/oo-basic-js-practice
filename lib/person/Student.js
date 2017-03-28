'use strict';

const Person = require('./Person');

function Student(name, age, classNum) {
  Person.call(this, name, age);
  this.classNum = classNum;
}

Student.prototype.introduce = function() {
  return 'I am a Student. I am at Class ' + this.classNum + '.';
};

module.exports = Student;