describe('worker', function () {
  const Worker = require('../../lib/person/Worker');
  it('should use introduce success when invoke worker.introduce', function () {
    const name = 'Tom';
    const age = 21;
    const worker = new Worker(name, age);
    expect(worker.introduce()).toEqual('My name is Tom. I am 21 years old. I am a Worker. I have a job.');
  });
});