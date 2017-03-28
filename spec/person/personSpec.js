describe('person', function () {
  const Person = require('../../lib/person/Person');
  it('should use introduce method success when invoke person.introduce', function () {
    const name = 'Tom';
    const age = 21;
    const person = new Person(name, age);
    expect(person.introduce()).toEqual('My name is Tom. I am 21 years old. ')
  });
});