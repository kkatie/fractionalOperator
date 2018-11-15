const fractionParser = require('../helpers/fractionParser.js'),
	Fraction = require('../Fraction.js');

describe('extractFraction', () => {
	test('Extract without negative sign', () => {
		var operandString = '1_2/5',
			fraction = new Fraction(1,2,5);
  	expect(fractionParser.extractFraction(operandString)).toEqual(fraction);
});

	test('Extract with negative sign', () => {
	  var operandString = '-1_2/5',
			fraction = new Fraction(1,2,5,true);
  	expect(fractionParser.extractFraction(operandString)).toEqual(fraction);
	});
});


describe('fractionalOperator', () => {
	test('Add', () => {
		var statement = "0_2/5 + 0_3/5";
	  expect(fractionParser.fractionalOperator(statement)).toBe('1');
	});

	test('Add given test case', () => {
		var statement = "2_3/8 + 9/8";
	  expect(fractionParser.fractionalOperator(statement)).toBe('3_1/2');
	});

	test('Subtract', () => {
		var statement = "0_3/5 - 0_2/5";
	  expect(fractionParser.fractionalOperator(statement)).toBe('1/5');
	});

	test('Subtract with negative results', () => {
		var statement = "0_2/5 - 0_5/5";
	  expect(fractionParser.fractionalOperator(statement)).toBe('-3/5');
	});

	test('Multiply', () => {
		var statement = "1_1/2 * 2_2/4";
	  expect(fractionParser.fractionalOperator(statement)).toBe('3_3/4');
	});

	test('Multiply given test case', () => {
		var statement = "1/2 * 3_3/4";
	  expect(fractionParser.fractionalOperator(statement)).toBe('1_7/8');
	});

	test('Divide', () => {
		var statement = "0_2/5 / 0_3/5";
	  expect(fractionParser.fractionalOperator(statement)).toBe('2/3');
	});
});