import romanNumerals from './../src/romanNumerals.js';

describe('romanNumerals', () => {

  test('should return an error if the number is lower than 1', () => {
    expect(romanNumerals("0")).toEqual("'Too Small'");
  });
  test('should return an error if the number is larger than 3999', () => {
    expect(romanNumerals("5555")).toEqual("'Too Big'");
  });
  test('should return an error if the input is not a number', () => {
    expect(romanNumerals("I am not a number")).toEqual("'NaN'");
  });
  test('should return I when the input is "1"', () => {
    expect(romanNumerals("1")).toEqual("I");
  });
  test('should return the correct symbols when the input is between 1 and 9', () => {
    expect(romanNumerals("4")).toEqual("IV");
  });
  test('should return the correct symbols when the input is a two-digit number', () => {
    expect(romanNumerals("27")).toEqual("XXVII");
  });
  test('should return the correct symbols when the input is between 1 and 3999', () => {
    expect(romanNumerals("2021")).toEqual("MMXXI");
  });
});