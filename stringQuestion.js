/*
Problem Statement:
Title: Count Palindromes of Specific Lengths in a String

Objective:
Write a JavaScript function that finds and counts the number of palindromes of exactly 4 and 5 characters in a given string. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

Requirements:

Input:
A single string inputString consisting of lowercase alphabetic characters.
Output:
An integer representing the total number of palindromes of lengths 4 and 5 present in the input string.
Constraints:

The input string length n will be such that 4 ≤ n ≤ 10^5.
Only consider substrings that are exactly 4 or 5 characters long.
The function should be optimized for performance given the potential length of the input string.


*/

// function isPalindrome(str) {
//   let len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

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

  // Check for palindromes of length 5

  return count;
}

// Example usage
const inputString = "abccbaabbccddeed";
const result = findPalindromes(inputString);
console.log(`Number of 4 and 5 character palindromes: ${result}`);
