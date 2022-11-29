const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    test('Test if convertHandler correctly reads a whole number input', function () {
        assert.equal(convertHandler.getNum('3mi'), 3);
    });

    test('Test if convertHandler correctly reads a decimal number input', function () {
        assert.equal(convertHandler.getNum('3.1mi'), 3.1);
    });

    test('Test if convertHandler correctly reads a fractional input', function () {
        assert.equal(convertHandler.getNum('1/2mi'), 0.5);
    });

    test('Test if convertHandler correctly reads a fractional input with a decimal', function () {
        assert.equal(convertHandler.getNum('1/0.5mi'), 2);
    });

    test('Test if convertHandler correctly returns an error on a double-fraction', function () {
        assert.equal(convertHandler.getNum('3/2/3mi'), undefined);
    });

    test('Test if convertHandler correctly defaults to a numerical input of 1 when no numerical input is provided.', function () {
        assert.equal(convertHandler.getNum('mi'), 1);
    });

    test('Test if convertHandler correctly reads each valid input unit', function () {
        assert.equal(convertHandler.getUnit('gal'), 'gal');
        assert.equal(convertHandler.getUnit('l'), 'L');
        assert.equal(convertHandler.getUnit('mi'), 'mi');
        assert.equal(convertHandler.getUnit('km'), 'km');
        assert.equal(convertHandler.getUnit('lbs'), 'lbs');
        assert.equal(convertHandler.getUnit('kg'), 'kg');
    });

    test('Test if convertHandler correctly returns an error for an invalid input unit', function () {
        assert.equal(convertHandler.getReturnUnit('m'), undefined);
    });

    test('Test if convertHandler returns the correct return unit for each valid input unit.', function () {
        assert.equal(convertHandler.getReturnUnit('gal'), 'L');
        assert.equal(convertHandler.getReturnUnit('L'), 'gal');
        assert.equal(convertHandler.getReturnUnit('mi'), 'km');
        assert.equal(convertHandler.getReturnUnit('km'), 'mi');
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
    });

    test('Test if convertHandler correctly returns the spelled-out string unit for each valid input unit', function () {
        assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
        assert.equal(convertHandler.spellOutUnit('L'), 'liters');
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
        assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
        assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
        assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
    });

    test('Test if convertHandler correctly converts gal to L.', function () {
        assert.equal(convertHandler.convert(1, 'gal'), 3.78541);
    });

    test('Test if convertHandler correctly converts L to gal.', function () {
        assert.equal(convertHandler.convert(3.78541, 'L'), 1.00000);
    });

    test('Test if convertHandler correctly converts mi to km.', function () {
        assert.equal(convertHandler.convert(1, 'mi'), 1.60934);
    });

    test('Test if convertHandler correctly converts km to mi.', function () {
        assert.equal(convertHandler.convert(1.60934, 'km'), 1.00000);
    });

    test('Test if convertHandler correctly converts lbs to kg.', function () {
        assert.equal(convertHandler.convert(1, 'lbs'), 0.45359);
    });

    test('Test if convertHandler correctly converts kg to lbs.', function () {
        assert.equal(convertHandler.convert(0.45359, 'kg'), 1.00000);
    });
});