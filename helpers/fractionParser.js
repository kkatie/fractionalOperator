const Fraction = require('../Fraction.js');

function extractFraction(operandString) {
	try {
		var groups = operandString.match(/(-)*([0-9]+)_([0-9]+)\/([0-9]+)/, 'g'),
			isNegative = groups[1] ? true : false,
			wholeNumber = groups[2],
			numerator = groups[3],
			denominator = groups[4];
			return new Fraction(wholeNumber, numerator, denominator, isNegative);

	} catch (err) {
		console.error('Unable to extract whole number');
	}
}

module.exports = {
	extractFraction: extractFraction
};