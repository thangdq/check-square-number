var expect = require('chai').expect;
var check_numbers = require('../src/index.js');

describe('SquareNumbers', function(){
	describe('checkSquareNumber()', function(){
		it('return error when number is not number', function(done){
			check_numbers.checkSquareNumber('abc', function(err, result){				
				expect(err.message).to.equal('is not number');
				done();
			});
		});
		
		it('return false when number is 0', function(done){
			check_numbers.checkSquareNumber(0, function(err, result){
				expect(err).to.equal(null);
				expect(result).to.equal(false);
				done();
			});
		});
		
		it('return false when number is 15', function(done){
			check_numbers.checkSquareNumber(15, function(err, result){
				expect(err).to.equal(null);
				expect(result).to.equal(false);
				done();
			});
		});
		
		it('return false when number is -16', function(done){
			check_numbers.checkSquareNumber(-16, function(err, result){
				expect(err).to.equal(null);
				expect(result).to.equal(false);
				done();
			});
		});
		
		it('return true when number is 16', function(done){
			check_numbers.checkSquareNumber(16, function(err, result){
				expect(err).to.equal(null);
				expect(result).to.equal(true);
				done();
			});
		});		
	});
});