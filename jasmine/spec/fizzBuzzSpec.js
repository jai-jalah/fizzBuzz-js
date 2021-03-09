describe('fizzBuzz', function() {

  it('should return the number given if it is less than 3', function() {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(2)).toEqual(2);
  });

  it("should return 'Fizz' if number given is divisible by 3",function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

});
