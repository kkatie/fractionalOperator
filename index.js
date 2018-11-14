const Fraction = require('Fraction');

// parse operand string and return a Fraction object
function convertOperandToFraction(operandString) {
  // to-do: parse accordingly to get components
  return new Fraction(wholeNumber, numerator, denominator);
}

// to-do: error-handling/check value of components
export function fractionalOperator(stringStatement) {
  var components = stringStatement.split(' ');
  var operand1 = convertOperandToFraction(components[0]);
  var operand2 = convertOperandToFraction(components[1]);
  var operator = components[2];
  return Fraction.performOperation(operand1, operand2, operator);
}
