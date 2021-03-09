describe('fizzBuzz', function() {

  it('should return the given number if it is less than 3', function() {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(2)).toEqual(2);
  });

  it("should return 'Fizz' if given number is divisible by 3",function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it("should return 'Buzz' if given number is divisible by 5", function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });

  it("should return 'FizzBuzz' if given number is divisible by both 3 & 5", function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });

  it('should return the given number if it does not divide by 3, 5, or both', function() {
    expect(fizzBuzz(26)).toEqual(26)
  });

});
