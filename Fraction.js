class Fraction {
  // to-do: value/type check; error-handling
  constructor(wholeNumber, numerator, denominator) {
    this.wholeNumber = wholeNumber || 0;
    this.numerator = numerator || 0;
    this.denominator = denominator || 0;
  }

  setWholeNumber(num) {
    this.wholeNumber = num;
  }

  setNumerator(num) {
    this.numerator = num;
  }

  setDenominator(num) {
    this.denominator = num;
  }

  getWholeNumber() {
    return this.wholeNumber;
  }

  getNumerator() {
    return this.numerator;
  }

  getDenominator() {
    return this.denominator;
  }

  toString() {
    this.reduceFraction();
    if (this.denominator === 0) {
      return 'undefined';
    }
    if (this.numerator === 0 || this.numerator === this.denominator) {
      return `${this.wholeNumber}`;
    } else if (this.wholeNumber === 0) {
      return `${this.numerator}/${this.denominator}`;
    }
    else {
      return `${this.wholeNumber}_${this.numerator}/${this.denominator}`;
    }
  }

  reduceFraction() {
    if (this.numerator > this.denominator) {
      this.wholeNumber += Number.parseInt(this.numerator / this.denominator);
      this.setNumerator(this.numerator % this.denominator);
    } 
    if (this.numerator < this.denominator) {
      // reduce num and den with smallest common factors: 2 and 3
      while (this.numerator % 2 === 0 && this.denominator % 2 === 0) {
        this.setNumerator(this.numerator / 2);
        this.setDenominator(this.denominator / 2);
      }
      while (this.numerator % 3 === 0 && this.denominator % 3 === 0) {
        this.setNumerator(this.numerator / 3);
        this.setDenominator(this.denominator / 3);
      }
    } 
    else {
      if (this.wholeNumber === 0 && this.denominator !== 0) {
        this.setWholeNumber(1);
        this.setNumerator(0);
        this.setDenominator(1);
      }
    }
  }

  static performOperation(fraction1, fraction2, operator) {
    switch (operator) {
      case '+':
        debugger;
        return this.add(fraction1, fraction2);
        break;
      case '-':
        return this.subtract(fraction1, fraction2);
        break;
      case '*':
        return this.multiply(fraction1, fraction2);
        break;
      case '/':
        return this.divide(fraction1, fraction2);
        break;
      default:
        return `Invalid operator ${operator}`;
    }
  }

  static add(fraction1, fraction2) {
    this.getCommonDenominator(fraction1, fraction2);
    var wholeNumber = fraction1.getWholeNumber() + fraction2.getWholeNumber(),
      numerator = fraction1.getNumerator() + fraction2.getNumerator(),
      denominator = fraction1.getDenominator();
    return new Fraction(wholeNumber, numerator, denominator);

  }
  
  static subtract(fraction1, fraction2) {
    this.getCommonDenominator(fraction1, fraction2);
    var wholeNumber = fraction1.getWholeNumber() - fraction2.getWholeNumber(),
      numerator = fraction1.getNumerator() - fraction2.getNumerator(),
      denominator = fraction1.getDenominator();
    return new Fraction(wholeNumber, numerator, denominator);
  }

  static multiply(fraction1, fraction2) {
    fraction1 = Fraction.toImproperFraction(fraction1);
    fraction2 = Fraction.toImproperFraction(fraction2);
    var numerator = fraction1.getNumerator() * fraction2.getNumerator(),
      denominator = fraction1.getDenominator() * fraction2.getDenominator();
    return new Fraction();
  }

  // static divide(fraction1, fraction2) {}

  static getCommonDenominator(fraction1, fraction2) {
    if (fraction1.getDenominator() !== fraction2.getDenominator()) {
      fraction1.setNumerator(fraction1.getNumerator() * fraction2.getDenominator());
      fraction2.setNumerator(fraction2.getNumerator() * fraction1.getDenominator());
      fraction1.setDenominator(fraction1.getDenominator() * fraction2.getDenominator());
    }
  }

  // static toImproperFraction(fraction) {}

  // static toMixedNumber(fraction) {}
}

module.exports = Fraction;
