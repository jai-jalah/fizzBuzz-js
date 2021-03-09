describe('fizzBuzz', function() {

  it("should return 'Fizz' - if given number is divisible by 3",function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(33)).toEqual('Fizz');
  });

  it("should return 'Buzz' - if given number is divisible by 5", function() {
    expect(fizzBuzz(5)).toEqual('Buzz');
    expect(fizzBuzz(20)).toEqual('Buzz')
    expect(fizzBuzz(100)).toEqual('Buzz')
  });

  it("should return 'FizzBuzz' - if given number is divisible by both 3 & 5", function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
  });

  it('should return the given number - if it does not divide by 3, 5, or both', function() {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(26)).toEqual(26)
    expect(fizzBuzz(44)).toEqual(44)
  });

});
