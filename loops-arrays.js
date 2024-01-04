// ========================================
// Activity 1
// ========================================

let favoriteSongs = [
  "Lose Yourself - Eminem",
  "Juicy - The Notorious B.I.G",
  "California Love - 2Pac ft. Dr. Dre",
];
console.log(favoriteSongs);
favoriteSongs.push("Dear Mama - 2Pac", "In Da Club - 50 Cent");
favoriteSongs.pop();
console.log(favoriteSongs);

// ========================================
// Activity 2
// ========================================

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);

// ========================================
// Activity 3
// ========================================

let favoriteFilms = [
  "Avatar",
  "The Matrix",
  "Interstellar",
  "The Dark Knight",
  "Star Wars",
];
favoriteFilms.push("Ex Machina", "Man on Fire");
for (let i = 0; i < favoriteFilms.length; i++) {
  console.log(favoriteFilms[i]);
}

// ========================================
// Activity 4
// ========================================

let randomNumbers = [];
for (let i = 0; i < 6; i++) {
  let randomNumber = Math.floor(Math.random() * 50) + 1;
  randomNumbers.push(randomNumber);
}

for (let i = 0; i < randomNumbers.length; i++) {
  console.log(randomNumbers[i]);
}

// ========================================
// Activity 5
// ========================================

for (let i = 9; i >= 0; i--) {
  console.log(i);
}

// ========================================
// Activity 6
// ========================================

let films = ["Avatar", "The Matrix", "Ghostbusters", "The Dark Knight"];

if (films[2] === "Ghostbusters") {
  console.log("Yay! It's Ghostbusters");
} else {
  console.log("Boo! We wanted Ghostbusters");
}

// ========================================
// Activity 7
// ========================================

for (let i = 0; i < 6; i++) {
  let randomNumber = Math.floor(Math.random() * 30) + 1;

  if (randomNumber % 7 === 0) {
    console.log(`${randomNumber} is divisible by 7.`);
  } else {
    console.log(`${randomNumber} is not divisible by 7.`);
  }
}

// ========================================
// Activity 8
// ========================================

let bobsFollowers = ["Andrew", "Jess", "David", "John"];
let hannahsFollowers = ["Jess", "John", "Lexi", "George"];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < hannahsFollowers.length; j++) {
    if (bobsFollowers[i] === hannahsFollowers[j]) {
      console.log(`Mutual follower found: ${bobsFollowers[i]}`);
    }
  }
}

// ========================================
// Activity 9
// ========================================

// --------------- for loop ---------------

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Pros

// - Compact syntax, ideal when number of iterations is known in advance.

// Cons

// - More complex syntax, may not be suitable for all scenarios.

// --------------- while loop ---------------

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Pros

// - Checks condition before executing code block.

// Cons

// - Code block may not run at all if condition is initially false.

// --------------- do-while loop ---------------

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// Pros

// - Ensures code block is executed at least once.

// Cons

// - Potential for infinite loops if condition is not carefully controlled.
