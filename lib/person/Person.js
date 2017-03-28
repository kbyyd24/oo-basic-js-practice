'use strict';

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.introduce = function () {
//     return 'My name is ' + this.name + '. I am ' + this.age +' years old.';
//   }
// }

// function buildPersoinByPrototype(name, age) {
//   let person = {name: name, age: age};
//   person.__proto__.introduce = () => 'My name is ' + person.name + '. I am ' + person.age +' years old.';
//   return person;
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.introduce = function() {
//   return 'My name is ' + this.name + '. I am ' + this.age +' years old.';
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return this.basic_introduce();
  }
  basic_introduce() {
    return 'My name is ' + this.name + '. I am ' + this.age +' years old.';
  }
}

module.exports = Person;