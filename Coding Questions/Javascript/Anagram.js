// Question:
// Write a function to check if the provided strings
// is an Anagaram or not

function isAnagram(str1, str2) {
  if (typeof str1 === "string") {
    str1 = str1.split(""); // Convert string to array
  }
  if (typeof str2 === "string") {
    str2 = str2.split(""); // Convert string to array
  }

  // Lengths must match for anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort both arrays
  str1.sort();
  str2.sort();

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false; // Mismatch found
    }
  }

  return true; // All characters match
}

console.log(isAnagram("aba", "aba")); // true
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
