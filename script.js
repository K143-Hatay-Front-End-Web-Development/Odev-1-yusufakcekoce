function isPalindrome() {
  for (let i = 999; i > 899; i--) {
    for (let j = 999; j > 899; j--) {
      let maxNum = i * j;
      if (palindrome(maxNum)) {
        return i * j;
      }
    }
  }
}

const palindrome = (i) => {
  return i.toString() == i.toString().split("").reverse().join("");
};

console.log("Largest 3-Digit Palindrome:", isPalindrome());
