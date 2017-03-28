describe('student', function () {
  const Student = require('../../lib/person/Student');
  it('should use introduce success when invoke student.introduce', function () {
    const name = 'Tom';
    const age = 21;
    const classNum = 2;
    const student = new Student(name, age, classNum);
    expect(student.introduce()).toEqual('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.');
  });
});