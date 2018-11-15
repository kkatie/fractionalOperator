class Fraction {
  // to-do: value/type check; error-handling
  constructor(wholeNumber, numerator, denominator, isNegative) {
    this.wholeNumber = Number.parseInt(wholeNumber) || 0;
    this.numerator = Number.parseInt(numerator) || 0;
    this.denominator = Number.parseInt(denominator) || 0;
    this.isNegative = isNegative || false;
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

  getIsNegative() {
    return this.isNegative;
  }

  toString() {
    if (this.denominator === 0) {
      return 'undefined';
    }
    this.reduceFraction();
    var sign = '';
    if (this.isNegative) {
      sign += '-';
    }
    if (this.numerator === 0 || this.numerator === this.denominator) {
      return sign += `${this.wholeNumber}`;
    } else if (this.wholeNumber === 0) {
      return sign += `${this.numerator}/${this.denominator}`;
    }
    else {
      return sign += `${this.wholeNumber}_${this.numerator}/${this.denominator}`;
    }
  }

  reduceFraction() {
    if (Math.abs(this.numerator) > Math.abs(this.denominator)) {
      this.wholeNumber += Number.parseInt(this.numerator / this.denominator);
      this.setNumerator(this.numerator % this.denominator);
    } 
    if (Math.abs(this.numerator) < Math.abs(this.denominator)) {
      // reduce num and den with smallest common factors: 5, 3, and 2
      while (this.numerator % 5 === 0 && this.denominator % 5 === 0) {
        this.setNumerator(this.numerator / 5);
        this.setDenominator(this.denominator / 5);
      }
      while (this.numerator % 3 === 0 && this.denominator % 3 === 0) {
        this.setNumerator(this.numerator / 3);
        this.setDenominator(this.denominator / 3);
      }
      while (this.numerator % 2 === 0 && this.denominator % 2 === 0) {
        this.setNumerator(this.numerator / 2);
        this.setDenominator(this.denominator / 2);
      }
      // reduce fraction by numerator
      if (this.numerator % this.numerator === 0 && this.denominator % this.numerator === 0) {
        this.setNumerator(this.numerator / this.numerator);
        this.setDenominator(this.denominator / this.numerator);
      }
    } 
    else {
      // if (this.wholeNumber === 0 && this.denominator !== 0) {
      //   this.setWholeNumber(1);
      //   this.setNumerator(0);
      //   this.setDenominator(0);
      // } else {
        this.setWholeNumber(this.getWholeNumber() + 1);
        this.setNumerator(0);
        this.setDenominator(1);
      // }
    }
  }

  static performOperation(fraction1, fraction2, operator) {
    switch (operator) {
      case '+':
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
    Fraction.toImproperFraction(fraction1);
    Fraction.toImproperFraction(fraction2);
    var numerator = fraction1.getNumerator() * fraction2.getNumerator(),
      denominator = fraction1.getDenominator() * fraction2.getDenominator(),
      isNegative = this.resultIsNegative(fraction1, fraction2);
    return new Fraction(0, numerator, denominator, isNegative);
  }

  static divide(fraction1, fraction2) {
    Fraction.toImproperFraction(fraction1);
    Fraction.toImproperFraction(fraction2);
    var numerator = fraction1.getNumerator() * fraction2.getDenominator(),
      denominator = fraction1.getDenominator() * fraction2.getNumerator(),
      isNegative = this.resultIsNegative(fraction1, fraction2);
    return new Fraction(0, numerator, denominator, isNegative);
  }

  static getCommonDenominator(fraction1, fraction2) {
    if (fraction1.getDenominator() !== fraction2.getDenominator()) {
      fraction1.setNumerator(fraction1.getNumerator() * fraction2.getDenominator());
      fraction2.setNumerator(fraction2.getNumerator() * fraction1.getDenominator());
      fraction1.setDenominator(fraction1.getDenominator() * fraction2.getDenominator());
    }
  }

  static toImproperFraction(fraction) {
    var wholeNumber = fraction.getWholeNumber(),
      denominator = fraction.getDenominator(),
      numerator = fraction.getNumerator();
    fraction.setNumerator(Math.abs(wholeNumber * denominator) + Math.abs(numerator));
    fraction.setWholeNumber(0);
  }

  static resultIsNegative(fraction1, fraction2) {
   return fraction1.getIsNegative() || fraction2.getIsNegative(); 
  }
}

module.exports = Fraction;
