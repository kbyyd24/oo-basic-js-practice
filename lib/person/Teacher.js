'use strict';

const Person = require('./Person');

class Teacher extends Person {
  constructor(name, age, classNum) {
    super(name, age);
    this.classNum = classNum;
  }
  introduce() {
    let introFromSuper = super.introduce();
    if (this.classNum) {
      return introFromSuper + ' I am a Teacher. I teach Class ' + this.classNum + '.';
    } else {
      return introFromSuper + ' I am a Teacher. I teach No Class.';
    }
  }
}

module.exports = Teacher;