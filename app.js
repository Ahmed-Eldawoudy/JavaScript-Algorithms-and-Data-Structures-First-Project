// 1-Palindrome Checker
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

palindrome("eye");
console.log(palindrome("0_0 (: /- :) 0-0"));
