# Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

* You will always get a valid array.
* Only a letter will be missed always.
* The length of the array always will be at least 2.
* The array will always contain letters in only one case.

Example:
```php
find_missing_letter(['a','b','c','d','f']);         //Outputs: 'e'
find_missing_letter(['O','Q','R','S']);             //Outputs: 'P'
find_missing_letter(["a","b","c","d","f"]);         //Outputs: "e"
find_missing_letter(["O","Q","R","S"]);             //Outputs: "P"
```
(Use the English alphabet with 26 letters!)