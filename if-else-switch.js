// ========================================
// Activity 1
// ========================================

let age = 18;
let country = "UK";

if (age > 17 && country === "UK") {
  console.log("Yes, I can serve you.");
} else {
  console.log("You aren’t old enough.");
}

// ========================================
// Activity 2
// ========================================

let topping = "Olives";

switch (topping) {
  case "Onions":
  case "Peppers":
  case "Ham":
    console.log(`These are important ingredients for my pizza.`);
    break;

  case "Pepperoni":
    console.log(`I don't mind having ${topping} on my pizza.`);
    break;

  default:
    console.log(`${topping} should not be on a pizza.`);
}

// ========================================
// Activity 3
// ========================================

let password = "car";

if (password.length < 8) {
  console.log("The password is too short.");
} else {
  console.log(password);
}

let num = 4;

if (num % 3 === 0 || num % 5 === 0) {
  console.log("This number is divisible by 3 or 5.");
} else {
  console.log("This number is not divisible by 3 or 5.");
}

// ========================================
// Activity 4
// ========================================

let num = 10;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("fizz buzz");
} else if (num % 3 === 0) {
  console.log("fizz");
} else if (num % 5 === 0) {
  console.log("buzz");
} else {
  console.log(num);
}

// ========================================
// Activity 5
// ========================================

let num = 1001;
let numArray = num.toString().split("");
let reverseNum = numArray.reverse().join("");

if (num.toString() === reverseNum) {
  console.log(`${num} is a palindrome.`);
} else {
  console.log(`${num} is not a palindrome.`);
}

// ========================================
// Activity 6
// ========================================

let time = 7;
let placeOfWork = "office";
let townOfHome = "home";

if (time === 7) {
  console.log(`At ${time}, I'm at ${townOfHome}.`);
} else if (time === 8) {
  console.log("I'm commuting.");
} else if (time === 9) {
  console.log(`At ${time}, I'm at ${placeOfWork}.`);
} else {
  console.log("I'm somewhere else.");
}

// ========================================
// Activity 7
// ========================================

const string =
  "jrfndklhgfndjkjlkgperfjhdksacdjviiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwuqhejkdsoiufghedjwshi";

let lastVowel = null;
let lastVowelIndex = -1;

for (let i = string.length - 1; i >= 0; i--) {
  const currentChar = string.charAt(i);
  if ("aeiou".includes(currentChar)) {
    lastVowel = currentChar;
    lastVowelIndex = i;
    break;
  }
}

if (lastVowel !== null) {
  console.log(`The last vowel is ${lastVowel}.`);
  console.log(`The index of the last vowel is ${lastVowelIndex}`);
} else {
  console.log("No vowels found in the string.");
}

// ========================================
// Activity 8
// ========================================

function checkFirstAndLastCharacter(word) {
  if (word[0] === word[word.length - 1]) {
    return true;
  } else {
    return false;
  }
}

let word = "level";
console.log(checkFirstAndLastCharacter(word));

word = "coding";
console.log(checkFirstAndLastCharacter(word));

// ========================================
// Activity 9
// ========================================

let num1 = 12;
let num2 = 3;

function checkSumOrProduct(num1, num2) {
  let sum = num1 + num2;
  if (sum % 2 === 0) {
    return sum;
  } else {
    return num1 * num2;
  }
}

console.log(checkSumOrProduct(num1, num2));
