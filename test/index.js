var expect = require('chai').expect;
var checkNumbers = require('../src/index.js');

describe('SquareNumbers', () => {
  describe('checkSquareNumber()', () => {
    it('return error when number is not number', (done) => {
      checkNumbers.checkSquareNumber('abc', (err) => {
        expect(err.message).to.equal('is not number');
        done();
      });
    });

    it('return false when number is 0', (done) => {
      checkNumbers.checkSquareNumber(0, (err, result) => {
        expect(err).to.equal(null);
        expect(result).to.equal(false);
        done();
      });
    });

    it('return false when number is 15', (done) => {
      checkNumbers.checkSquareNumber(15, (err, result) => {
        expect(err).to.equal(null);
        expect(result).to.equal(false);
        done();
      });
    });

    it('return false when number is -16', (done) => {
      checkNumbers.checkSquareNumber(-16, (err, result) => {
        expect(err).to.equal(null);
        expect(result).to.equal(false);
        done();
      });
    });

    it('return true when number is 16', (done) => {
      checkNumbers.checkSquareNumber(16, (err, result) => {
        expect(err).to.equal(null);
        expect(result).to.equal(true);
        done();
      });
    });
  });
});
