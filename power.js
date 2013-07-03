var power = function (base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
};

var power = function(base, exponent){
    if (exponent === 0){
        return 1;
    }
    else{
      return base * power(base, exponent -1);
    }
};
