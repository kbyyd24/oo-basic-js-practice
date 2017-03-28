describe('person', function () {
  const Person = require('../../lib/class_practice/Person');
  it('should get introduction success when invoke person.success', function () {
    const person = new Person('Tom', 21);
    expect(person.introduce()).toEqual('My name is Tom. I am 21 years old.');
  });
})