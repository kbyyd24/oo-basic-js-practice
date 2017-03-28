describe('person', function () {
  it('should use introduce method success when invoke person.introduce', function () {
    const name = 'Bryant';
    const age = 22;
    const person = new Person(name, age);
    expect(person.introduce()).toEqual('My name is Bryant. I am 22 years old.')
  });
});