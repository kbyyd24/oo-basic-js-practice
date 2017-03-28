'use strict';
const Person = require('./Person');

class Worker extends Person {
  constructor(name, age) {
    super(name, age);
  }
  introduce() {
    return super.basic_introduce() + 'I am a Worker. I have a job.';
  }
}

// function Worker(name, age) {
//   this.prototype = new Person(name, age);
// }
//
// Worker.prototype.introduce = function () {
//   return 'I am a Worker. I have a job.';
// }

module.exports = Worker;
