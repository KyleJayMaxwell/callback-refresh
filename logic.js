function flatten (arr, callback) {
  if(!Array.isArray(arr)) {
    return callback('Please use an array!');
  } else{
    var merge = [].concat.apply([], arr);
    return callback(null, merge); 
  }
};

module.exports = flatten;