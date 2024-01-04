// ========================================
// Activity 1
// ========================================

let name = "Andrew";
let age = "33";
let favouriteColour = "blue";

console.log(
  `My name is ${name}, I am ${age} years old and my favourite colour is ${favouriteColour}.`
);

// ========================================
// Activity 2
// ========================================

let breakfast = "Porridge";
let lunch = "Ham Sandwich";
let dinner = "Fish and Chips";

console.log(
  `Today I had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`
);

breakfast = "Toast";
lunch = "Tuna Pasta";
dinner = "Pizza";

console.log(
  `Tommorow I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`
);

// ========================================
// Activity 3
// ========================================

function calculateBirthday() {
  let today = new Date();
  let birthDate = new Date("1990-12-31");
  birthDate.setFullYear(today.getFullYear());
  let timeDifferenceInMilliseconds = birthDate - today;
  let millisecondsInADay = 1000 * 60 * 60 * 24;
  let daysUntilBirthday = Math.ceil(
    timeDifferenceInMilliseconds / millisecondsInADay
  );
  return daysUntilBirthday;
}

let daysUntilBirthday = calculateBirthday();
console.log(`There are ${daysUntilBirthday} days until your birthday.`);

// ========================================
// Activity 4
// ========================================

let space1 = "X";
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |   ");
