var logic = require('./logic');

var nest = [
  [1,2,3],
  [4,5,6]
];

var result = logic(nest, function(err, data){
  if(err) {
    return err;
  } else {
    return data;
  }
});

console.log(result);