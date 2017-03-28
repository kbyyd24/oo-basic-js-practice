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

  const Student = require('../../lib/class_practice/Person');
  it('should introduce teaching student when given a student the teacher is teaching', function () {
    const classObj = new Class(2);
    const student = new Student('Jerry', 12, classObj);
    const teacher = new Teacher('Tom', 21, classObj);
    expect(teacher.introduceWith(student))
      .toEqual('My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.');
  });
  it('should not introduce teaching student when given a student the teacher is not teaching', function () {
    const student = new Student('Jerry', 12, new Class(1));
    const teacher = new Teacher('Tom', 21, new Class(2));
    expect(teacher.introduceWith(student))
      .toEqual("My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.");
  });
});