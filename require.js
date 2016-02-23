var sum = require('./export');

var result = sum([1, 2], function(err, data){
  if(err) {
    return err;
  } else {
    return data;
  }
});

console.log(result);