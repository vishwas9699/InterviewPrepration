// function isPalindrome(str) {
//   let len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

function findFactorial(num) {
  if (num == 1 || num == 0) {
    return 1;
  }
  return num * findFactorial(num - 1);
}

console.log(findFactorial(5));

function findCharAccurance(str) {
  const result = {};
  for (let val of str) {
    if (val != " ") {
      if (result[val]) {
        result[val]++;
      } else {
        result[val] = 1;
      }
    }
  }
  return result;
}

console.log(findCharAccurance("hello world"));

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function findPalindromes(input) {
  let count = 0;

  // Check for palindromes of length 4
  for (let i = 0; i <= input.length - 4; i++) {
    let subStr4 = input.slice(i, i + 4);
    if (isPalindrome(subStr4)) {
      count++;
    }

    let subStr5 = input.slice(i, i + 5);
    if (isPalindrome(subStr5)) {
      count++;
    }
  }

  return count;
}

// Example usage
const inputString = "abccbaabbccddeed";
const result = findPalindromes(inputString);
console.log(`Number of 4 and 5 character palindromes: ${result}`);
