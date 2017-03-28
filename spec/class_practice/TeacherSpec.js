describe('teacher', function () {
  const Class = require('../../lib/class_practice/Class');
  const Teacher = require('../../lib/class_practice/Teacher');
  it('should introduce class when given class', function () {
    const teacher = new Teacher('Tom', 21, new Class(2));
    expect(teacher.introduce())
      .toEqual('My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.');
  });
  it('should not introduce class when given no class', function () {
    const teacher = new Teacher('Tom', 21);
    expect(teacher.introduce())
      .toEqual('My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.');
  })
});