'use strict';
const Person = require('./Person');

class Worker extends Person {
  constructor(name, age) {
    super(name, age);
  }
  introduce() {
    return super.introduce() + ' I am a Worker. I have a job.';
  }
}

// function Worker(name, age) {
//   // this.__proto__ = new Person(name, age);
//   // Worker.prototype = new Person(name, age)
//   Person.call(this, name, age)
//
//   // this.__proto__.introduce = function () {
//   //   return this.basic_introduce() + ' I am a Worker. I have a job.';
//   // };
// }
//
// var F = function(){}
// F.prototype = Person.prototype
// Worker.prototype = new Person()
// Worker.prototype.constructor = Worker
//
// Worker.prototype.introduce = function () {
//     return this.basic_introduce() + ' I am a Worker. I have a job.';
// }
//
// console.log(new Person().introduce())

module.exports = Worker;
