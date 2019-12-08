function reverseWords(str) {
    if(str.indexOf(" ") == -1)
      return str.split("").reverse().join("");
    else {
      let tokens = str.split(" ");
      return reverseWords(tokens.shift()) + " " + reverseWords(tokens.join(" "));
    }
}