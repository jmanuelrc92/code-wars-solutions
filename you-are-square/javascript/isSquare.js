var isSquare = function(n) {
    if (n < 0) {
      return false;
    }
    //find the square root
    var base = Math.sqrt(n);
    //regular expression, matches a point '.'
    var regEx = /\./
    return !base.toString().match(regEx);
}