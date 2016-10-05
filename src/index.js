var checkSquareNumber = function checkSquareNumber(number, callback) {
  let result;
  if (isNaN(number)) {
    var err = new Error('is not number');
    return callback(err);
  }

  if (number <= 0) {
    result = false;
    return callback(null, result);
  }

  let i = Math.sqrt(number);
  if (number === i * i) {
    result = true;
  } else {
    result = false;
  }

  return callback(null, result);
};

module.exports = {
  checkSquareNumber
};
