describe('worker', function () {
  it('should use introduce success when invoke worker.introduce', function () {
    const name = '2333';
    const age = 2333;
    const worker = new Worker(name, age);
    expect(worker.introduce()).toEqual('I am a Worker. I have a job.');
  });
});