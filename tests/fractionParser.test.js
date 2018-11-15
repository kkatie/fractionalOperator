const fractionParser = require('../helpers/fractionParser.js'),
	Fraction = require('../Fraction.js');

describe('extractFraction', () => {
	test('Extract without negative sign', () => {
		var operandString = '1_2/5',
			fraction = new Fraction(1,2,5);
		debugger;
  	expect(fractionParser.extractFraction(operandString)).toEqual(fraction);
});

	test('Extract with negative sign', () => {
	  var operandString = '-1_2/5',
			fraction = new Fraction(1,2,5,true);
  	expect(fractionParser.extractFraction(operandString)).toEqual(fraction);
	});
});