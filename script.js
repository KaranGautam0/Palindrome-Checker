function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return reversedStr === cleanStr;
}

let checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", function () {
  const inputTex = document.getElementById("inputText");
  const result = document.querySelector(".result");

  if (isPalindrome(inputTex.value)) {
    result.innerHTML = `"${inputTex.value}" is a Palindrome`;
  } else {
    result.innerHTML = `"${inputTex.value}" is not a Palindrome`;
  }
});
