export class Fraction {
  // to-do: value/type check?
  constructor(wholeNumber, numerator, denominator) {
    this.wholeNumber = wholeNumber || 0;
    this.numerator = numerator || 1;
    this.denominator = denominator || 1;
  }

  toString() {
    if (this.numerator === this.denominator) {
      return `${this.wholeNumber}`;
    } else {
      return `${this.wholeNumber}_${this.numerator}/${this.denominator}`;
    }
  }

  reduceFraction() {
    if (this.numerator > this.denominator) {
      this.wholeNumber += Number.parseInt(this.numerator / this.denominator);
      this.numerator = this.numerator % this.denominator;
    } else if (this.numerator < this.denominator) {
      // reduce num and den with smallest common factors: 2 and 3
      while (this.numerator % 2 === 0 && this.denominator % 2 === 0) {
        this.numerator = this.numerator / 2;
        this.denominator = this.denominator / 2;
      }
      while (this.numerator % 3 === 0 && this.denominator % 3 === 0) {
        this.numerator = this.numerator / 3;
        this.denominator = this.denominator / 3;
      }
    }
  }

  static performOperation(fraction1, fraction2, operator) {}

  static add(fraction1, fraction2) {}

  static multiply(fraction1, fraction2) {}

  static subtract(fraction1, fraction2) {}

  static divide(fraction1, fraction2) {}

  static findCommonDenominator(fraction1, fraction2) {}

  static toImproperFraction(fraction) {}

  static toMixedNumber(fraction) {}
}
