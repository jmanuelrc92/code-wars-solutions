//2018-05-14 @jmrc92 evaluateif a string
//has the same quantity of 'x's and 'o's
function XO(str) {
    let xCounter = 0;
    let oCounter = 0;
    //iterate trough the given string, char by char
    for (var i = 0; i < str.length; i++) {
      //if the actual char is an x/X, increment the counter
      if (str.charAt(i) == 'x' || str.charAt(i) == 'X') {
        xCounter++;
      }
      //if the actual char is an o/O, increment the counter
      if (str.charAt(i) == 'o' || str.charAt(i) == 'O') {
        oCounter++;
      }
    }
    //evaluate if the counters are equals
    return xCounter == oCounter;
}