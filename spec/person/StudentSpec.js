describe('student', function () {
  it('should use introduce success when invoke student.introduce', function () {
    const name = 'Tom';
    const age = 21;
    const classNum = 2;
    const student = new Student(name, age, classNum);
    expect(student.introduce()).toEqual('I am a Student. I am at Class 2.');
  });
});