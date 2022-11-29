function ConvertHandler() {

  this.getNum = function (input) {
    let result;

    if (this.getUnit(input))
      result = 1;
    for (let i = input.length - 1; i >= 0; i--) {
      if (!isNaN(input[i])) {
        result = input.substring(0, i + 1);
        break;
      }
    }
    if (String(result).split('/').length > 2)
      return undefined;
    return eval(result);
  };

  this.getUnit = function (input) {
    let result;

    if (input == 'gal' || input == 'l' || input == 'lbs' || input == 'kg' || input == 'mi' || input == 'km') {
      result = input;
    }
    for (let i = input.length - 1; i >= 0; i--) {
      if (!isNaN(input[i])) {
        result = input.substring(i + 1, input.length);
        break;
      }
    }
    if (result == 'l')
      result = 'L'
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    switch (initUnit) {
      case 'gal': result = 'L'; break;
      case 'L': result = 'gal'; break;
      case 'lbs': result = 'kg'; break;
      case 'kg': result = 'lbs'; break;
      case 'mi': result = 'km'; break;
      case 'km': result = 'mi';
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    switch (unit) {
      case 'gal': result = 'gallons'; break;
      case 'L': result = 'liters'; break;
      case 'lbs': result = 'pounds'; break;
      case 'kg': result = 'kilograms'; break;
      case 'mi': result = 'miles'; break;
      case 'km': result = 'kilometers';
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case 'gal': result = initNum * galToL; break;
      case 'L': result = initNum / galToL; break;
      case 'lbs': result = initNum * lbsToKg; break;
      case 'kg': result = initNum / lbsToKg; break;
      case 'mi': result = initNum * miToKm; break;
      case 'km': result = initNum / miToKm;
    }
    return Number(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };
}

module.exports = ConvertHandler;
