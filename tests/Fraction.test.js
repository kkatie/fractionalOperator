const Fraction = require('../Fraction.js');

describe('Constructor', () => {
	test('Constructor with default variable values', () => {
		var fraction = new Fraction(null, null, null);
	  expect(fraction.toString()).toBe('undefined');
	});

	test('Constructor with custom variable values', () => {
		var fraction = new Fraction(3, 3, 8);
	  expect(fraction.toString()).toBe('3_3/8');
	});
});


describe('Reduce fraction', () => {
	test('Reduce improper fraction', () => {
		var fraction = new Fraction(3, 9, 5);
	  expect(fraction.toString()).toBe('4_4/5');
	});

	test('Reduce fraction with one common factor 3', () => {
		var fraction = new Fraction(3, 3, 9);
	  expect(fraction.toString()).toBe('3_1/3');
	});

	test('Reduce fraction with multiple common factors', () => {
		var fraction = new Fraction(1, 18, 36);
	  expect(fraction.toString()).toBe('1_1/2');
	});
});


describe('0 as values', () => {
	test('Numerator 0', () => {
	var fraction = new Fraction(1, 0, 5);
  expect(fraction.toString()).toBe('1');
});

	test('Denominator 0', () => {
		var fraction = new Fraction(1, 5, 0);
	  expect(fraction.toString()).toBe('undefined');
	});
});


describe('Add', () => {
	test('Add with same denominator', () => {
	var fraction1 = new Fraction(0, 5, 10);
	var fraction2 = new Fraction(1, 7, 10);
	var result = Fraction.performOperation(fraction1, fraction2, '+');
  expect(result.toString()).toBe('2_1/5');
});

	test('Add with different denominator', () => {
		var fraction1 = new Fraction(1, 5, 2);
		var fraction2 = new Fraction(1, 5, 3);
		var result = Fraction.performOperation(fraction1, fraction2, '+');
	  expect(result.toString()).toBe('6_1/6');
	});
});
