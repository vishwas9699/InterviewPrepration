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

  return count;
}

/* 

why we are taking input.length-4 here we can take 5 also right can u please explain


Great question! Let's break down why we're using `input.length - 4` instead of `input.length - 5` in the loop condition.

### Loop Explanation

The loop is designed to iterate over all possible starting positions for 4-character and 5-character substrings within the input string. Here's the reasoning:

- **`i <= input.length - 4`:**  
  This condition ensures that the loop can generate a 4-character substring starting from position `i`. If `i` were greater than `input.length - 4`, then `input.slice(i, i + 4)` would exceed the bounds of the string.

### Example: 

Suppose `inputString = "abcdefg"` with a length of 7.

- If `i = 3`, then:
  - `input.slice(3, 3 + 4)` gives you `"defg"` (valid 4-character substring).
  - `input.slice(3, 3 + 5)` gives you `"defg"` plus one more character if available.

- If `i = 4`, then:
  - `input.slice(4, 4 + 4)` gives you `"efg"`, which isn't a 4-character string anymore (invalid).
  - `input.slice(4, 4 + 5)` would also be out of bounds for a 5-character substring.

So, the loop goes up to `input.length - 4` to ensure it can at least extract a valid 4-character substring.

### Could We Use `input.length - 5` Instead?

If we used `i <= input.length - 5`, we'd miss checking the final valid 4-character substring:

- **Continuing the example above:**  
  If `input.length - 5 = 2`, the loop would stop at `i = 2`, and we wouldn't check the substring `"defg"` starting from `i = 3`.

### Final Summary:

- **`input.length - 4`:** Ensures that the loop can check all potential 4-character substrings.
- **Within the loop:** We also check for 5-character substrings, but only if the current index `i` allows for a 5-character substring (`i <= input.length - 5`).

This approach guarantees that both 4-character and 5-character palindromes are correctly identified without missing any potential matches.
*/

// Example usage
const inputString = "abccbaabbccddeed";
const result = findPalindromes(inputString);
console.log(`Number of 4 and 5 character palindromes: ${result}`);
