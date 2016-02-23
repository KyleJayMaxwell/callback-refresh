function sum(arr, callback) {
  if(!Array.isArray(arr)) {
    return callback('Please use an array!', null);
  } else {
    var results = arr.forEach(function(num){
      return num + num;
    });
    return callback(null, results);
  }
}

module.exports = sum;