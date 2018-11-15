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

	test('Add: 2_3/8 + 9/8', () => {
		var fraction1 = new Fraction(2, 3, 8);
		var fraction2 = new Fraction(0, 9, 8);
		var result = Fraction.performOperation(fraction1, fraction2, '+');
	  expect(result.toString()).toBe('3_1/2');
	});
});


describe('Subtract', () => {
	test('Subtract with same denominator', () => {
	var fraction1 = new Fraction(1, 7, 10);
	var fraction2 = new Fraction(1, 5, 10);
	var result = Fraction.performOperation(fraction1, fraction2, '-');
  expect(result.toString()).toBe('1/5');
});

	test('Subtract with different denominator', () => {
		var fraction1 = new Fraction(2, 5, 2);
		var fraction2 = new Fraction(1, 5, 3);
		var result = Fraction.performOperation(fraction1, fraction2, '-');
	  expect(result.toString()).toBe('1_5/6');
	});

	test('Subtract with negative results', () => {
		var fraction1 = new Fraction(2, 5, 3);
		var fraction2 = new Fraction(1, 5, 2);
		var result = Fraction.performOperation(fraction1, fraction2, '-');
	  expect(result.toString()).toBe('1_-5/6');
	});
});


describe('Multiply', () => {
	test('Multiply with 0 whole number', () => {
	var fraction1 = new Fraction(0, 7, 10);
	var fraction2 = new Fraction(0, 5, 10);
	var result = Fraction.performOperation(fraction1, fraction2, '*');
  expect(result.toString()).toBe('7/20');
});

	test('Multiply with whole numbers', () => {
		var fraction1 = new Fraction(2, 1, 2); // 5/2
		var fraction2 = new Fraction(7, 5, 3); // 26/3
		var result = Fraction.performOperation(fraction1, fraction2, '*');
	  expect(result.toString()).toBe('21_2/3'); // 130/6
	});

	test('Multiply with negative results', () => {
		var fraction1 = new Fraction(2, 5, 3, true); // 11/3
		var fraction2 = new Fraction(1, 5, 2); // 7/2
		debugger;
		var result = Fraction.performOperation(fraction1, fraction2, '*');
	  expect(result.toString()).toBe('-12_5/6'); // 77/6
	});
});


describe('Divide', () => {
	test('Divide with 0 whole number', () => {
	var fraction1 = new Fraction(0, 7, 10);
	var fraction2 = new Fraction(0, 5, 10);
	var result = Fraction.performOperation(fraction1, fraction2, '/');
  expect(result.toString()).toBe('1_2/5');
});

	test('Divide with whole numbers', () => {
		var fraction1 = new Fraction(2, 1, 2); // 5/2
		var fraction2 = new Fraction(7, 5, 3); // 26/3
		var result = Fraction.performOperation(fraction1, fraction2, '/');
	  expect(result.toString()).toBe('15/52');
	});

	test('Divide with negative results', () => {
		var fraction1 = new Fraction(2, 5, 3, true); // 11/3
		var fraction2 = new Fraction(1, 5, 2); // 7/2
		debugger;
		var result = Fraction.performOperation(fraction1, fraction2, '/');
	  expect(result.toString()).toBe('-1_1/21');
	});
});








