describe('teacher', function () {
  const Teacher = require('../../lib/person/Teacher');
  it('should introduce with teach class when given a classNum', function () {
    const teacher = new Teacher('Tom', 21, 2);
    expect(teacher.introduce()).toEqual('My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.');
  });
  it('should introduce without teach class when given no classNum', function () {
    const teacher = new Teacher('Tom', 21);
    expect(teacher.introduce()).toEqual('My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.');
  });
})