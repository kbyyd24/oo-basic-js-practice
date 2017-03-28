describe('student', function () {
  const Class = require('../../lib/class_practice/Class');
  const Student = require('../../lib/class_practice/Student');
  it('should get introduction success when invoke student.introduce', function () {
    const student = new Student('Tom', 21, new Class(2));
    expect(student.introduce())
      .toEqual('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.');
  });
});