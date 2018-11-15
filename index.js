const Fraction = require('./Fraction.js'),
	fractionParser = require('./helpers/fractionParser');

function fractionalOperator() {
  var stringStatement = process.argv[2].split(" ");
  	operand1 = fractionParser.extractFraction(stringStatement[0]),
  	operand2 = fractionParser.extractFraction(stringStatement[2]),
  	operator = stringStatement[1],
  	result = Fraction.performOperation(operand1, operand2, operator);
  	console.log(result.toString());
}

fractionalOperator();
