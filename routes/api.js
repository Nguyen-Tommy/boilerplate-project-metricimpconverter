'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    let input = req.query.input.toLowerCase();
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnUnit = convertHandler.getReturnUnit(initUnit);

    if (!initNum && !returnUnit) {
      res.send('invalid number and unit')
    } else if (!returnUnit) {
      res.send('invalid unit');
    } else if (!initNum) {
      res.send('invalid number');
    } else {
      let returnNum = convertHandler.convert(initNum, initUnit);
      let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      res.send({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string
      });
    }
  });
};
