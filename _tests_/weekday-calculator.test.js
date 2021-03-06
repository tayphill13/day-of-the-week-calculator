import { validateInput, getDayOfTheWeek } from '../src/weekday-calculator.js';

describe ('validateInput', () => {
  // beforeEach(() => {
  //   let month = 2;
  //   let day = 3;
  //   let year = 1993;
  // });

  test('should identify whether the month input is valid', () =>  {
    expect(validateInput(13, 3, 1993)).toEqual("Invalid");
    console.log(validateInput);
  });
  test('should test that the year is outside of the specified floor and ceiling range', () => {
    expect(validateInput(12, 3, 10001)).toEqual("Invalid");
    console.log(validateInput);
  });
  test('should test that the day is within the specified range', () => {
    expect(validateInput(12, 35, 1999)).toEqual("Invalid");
    console.log(validateInput);
  });
  test('Function should return correct day of the week', () => {
    expect(getDayOfTheWeek(9, 24, 1956)).toEqual("Wednesday");
  });
});