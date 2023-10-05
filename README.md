# JavaScript Algorithms and Data Structures Projects
## Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
<br>

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
<br>

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

## My Solution
```
function palindrome(str) {
  let checkAlpha = /[A-Za-z]/gi.test(str);
  str.replace(/[^a-z0-9]/gi, "");
  if (checkAlpha) {
    let strArrWithAlpha = str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, "")
      .split("");
    let reversedStrArrWithAlpha = [];
    strArrWithAlpha.map((letter) => reversedStrArrWithAlpha.unshift(letter));
    if (strArrWithAlpha.join("") === reversedStrArrWithAlpha.join("")) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
```
