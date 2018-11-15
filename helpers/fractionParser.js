const Fraction = require('../Fraction.js');

function extractFraction(operandString) {
	try {
		var groups = operandString.match(/(-)*([0-9]+)*_*([0-9]+)*\/*([0-9]+)*/, 'g'),
			noWholeNumber = typeof groups[3] === "undefined",
			isNegative = groups[1] ? true : false,
			wholeNumber = noWholeNumber ? 0 : groups[2],
			numerator = noWholeNumber ? groups[2] : groups[3],
			denominator = groups[4];
			return new Fraction(wholeNumber, numerator, denominator, isNegative);

	} catch (err) {
		console.error('Unable to extract whole number');
	}
}

function fractionalOperator(stringStatement) {
  var args = stringStatement.split(" ");
  	operand1 = extractFraction(args[0]),
  	operand2 = extractFraction(args[2]),
  	operator = args[1],
  	result = Fraction.performOperation(operand1, operand2, operator);
  return result.toString();
}

module.exports = {
	extractFraction: extractFraction,
	fractionalOperator: fractionalOperator
};