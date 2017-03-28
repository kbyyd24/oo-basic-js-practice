describe('person', function () {
  it('should use introduce method success when invoke person.introduce', function () {
    const name = 'Melo';
    const age = 22;
    const person = new Person(name, age);
    expect(person.introduce()).toEqual('My name is Melo. I am 22 years old.')
  });
});