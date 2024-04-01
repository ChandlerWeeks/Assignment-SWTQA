const {calculateBMI, getBMICategory, outputResults} = require('../index')

// tests for calculateBMI, 2d weak Nx1 testing
describe('BMI Calculator', () => {
  test('calulates BMI correctly', () => {
    // boundaries with valid heights and weights return their corresponding BMI
    expect(calculateBMI(24, 40)).toBeCloseTo(50.0, 0.6);
    expect(calculateBMI(24, 300)).toBeCloseTo(375.0, 0.6);
    expect(calculateBMI(24, 600)).toBeCloseTo(750.0, 0.6);
    expect(calculateBMI(72, 40)).toBeCloseTo(5.6, 0.6);
    expect(calculateBMI(72, 300)).toBeCloseTo(41.6, 0.6);
    expect(calculateBMI(72, 600)).toBeCloseTo(83.3, 0.6);
    expect(calculateBMI(96, 40)).toBeCloseTo(3.1, 0.6);
    expect(calculateBMI(96, 300)).toBeCloseTo(23.4, 0.6);
    expect(calculateBMI(96, 600)).toBeCloseTo(46.9, 0.6);
  })
  test('does not calculate BMI with invalid parameters', () => {
    // boundaries that should result in an error due to valid parameters
    expect(calculateBMI(23, 39)).toEqual(-1);
    expect(calculateBMI(23, 40)).toEqual(-1);
    expect(calculateBMI(23, 300)).toEqual(-1);
    expect(calculateBMI(23, 600)).toEqual(-1);
    expect(calculateBMI(23, 601)).toEqual(-1);
    expect(calculateBMI(24, 601)).toEqual(-1);
    expect(calculateBMI(24, 39)).toEqual(-1);
    expect(calculateBMI(72, 601)).toEqual(-1);
    expect(calculateBMI(72, 39)).toEqual(-1);
    expect(calculateBMI(96, 39)).toEqual(-1);
    expect(calculateBMI(96, 601)).toEqual(-1);
    expect(calculateBMI(97, 39)).toEqual(-1);
    expect(calculateBMI(97, 40)).toEqual(-1);
    expect(calculateBMI(97, 300)).toEqual(-1);
    expect(calculateBMI(97, 600)).toEqual(-1);
    expect(calculateBMI(97, 601)).toEqual(-1);
  })
})



describe ('Category calculator', () => {
  test('calculates correct BMI categories', () => {
    // calculate the BMI and their associated categories
    expect(getBMICategory(0)).toEqual("underweight")
    expect(getBMICategory(0.1)).toEqual("underweight")
    expect(getBMICategory(10)).toEqual("underweight")
    expect(getBMICategory(18.4)).toEqual("underweight")
    expect(getBMICategory(18.5)).toEqual("healthy")
    expect(getBMICategory(22.5)).toEqual("healthy")
    expect(getBMICategory(24.9)).toEqual("healthy")
    expect(getBMICategory(25)).toEqual("overweight")
    expect(getBMICategory(27.5)).toEqual("overweight")
    expect(getBMICategory(29.9)).toEqual("overweight")
    expect(getBMICategory(30)).toEqual("obese")
    expect(getBMICategory(50)).toEqual("obese")
    expect(getBMICategory(Infinity)).toEqual("obese")
  })
})

describe ('Output Results', () => {
  test('outputs correct details', () => {
    // test that errors result in errors and valid BMI values result in proper values
    expect(outputResults(-1)).toEqual("invalid height or weight, please insert valid heights and weights")
    expect(outputResults(23)).toEqual("your bmi of 23.0 puts you in the healthy category")
  })
})