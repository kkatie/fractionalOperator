import Fraction from 'Fraction';

// to-do: error-handling/check value of components
export function fractionalOperator(stringStatement) {
	var components = stringStatement.split(' ');
	var operand1 = new Fraction(components[0]);
	var operand2 = new Fraction(components[1]);
	return Fraction.performOperation(operand1, operand2);
}