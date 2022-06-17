function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++){
    const j= word.length-1-i
    const startChar = word[i]
    const endChar = word[j]
    if (startChar !== endChar)return false;
    return true;
  }
}

/* 
  Add your pseudocode here
  I need to make an isPalindrome function that returns either true or false. 
  When the input string is the same forwards and backwards, I should return true. 
  That means if the first letter is the same as the last letter, 
  and the second letter is the same as the second to last letter, 
  and so on (until the middle of the word), the function should return true.

  iterate from the beginning to the middle
    check each letter to the correspinding letter from the end
    if any letter don't match, return false.
  return true

  r a c e c a r
0 1 2 3 4 5 6
i           j

r a c e c a r
0 1 2 3 4 5 6
  i       j

r a c e c a r
0 1 2 3 4 5 6
    i   j

r a c e c a r
0 1 2 3 4 5 6
      ij
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
