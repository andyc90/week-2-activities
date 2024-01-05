// ========================================
// Activity 1
// ========================================

const person = {
  name: "Andrew",
  age: 33,
};

// ========================================
// Activity 2
// ========================================

const alarm = {
  weekendAlarm: "no alarm needed",
  weekdayAlarm: "get up at 7am",
};

let day = "Monday";
let alarmMessage;

if (day === "Saturday" || day === "Sunday") {
  alarmMessage = alarm.weekendAlarm;
} else {
  alarmMessage = alarm.weekdayAlarm;
}

console.log(alarmMessage);

// ========================================
// Activity 3
// ========================================

const person = {
  name: "Andrew",
  age: 33,

  favoriteSongs: [
    "Lose Yourself - Eminem",
    "Juicy - The Notorious B.I.G",
    "California Love - 2Pac ft. Dr. Dre",
  ],
};

console.log(person.favoriteSongs);

// ========================================
// Activity 4
// ========================================

const person = {
  name: "Andrew",
  age: 33,
  sayHi: function () {
    return `Hello my name is ${this.name}`;
  },
};

console.log(person.sayHi());

// ========================================
// Activity 5
// ========================================

const coffeeShop = {
  branch: "London",
  drinks: {
    "Flat White": 2.5,
    "Earl Grey Tea": 1.8,
    "Fresh Orange Juice": 2.5,
  },
  food: {
    "Chocolate Muffin": 1.5,
    "Ham & Cheese Sandwich": 3.5,
    "Scone & Butter": 2.5,
  },
  drinksOrdered: function (drinksArray) {
    let total = 0;
    let orderDetails = "Drinks ordered: ";
    for (const drink of drinksArray) {
      orderDetails += `${drink} (£${this.drinks[drink].toFixed(2)}), `;
      total += this.drinks[drink];
    }
    orderDetails += `Total: £${total.toFixed(2)}`;
    return orderDetails;
  },
  foodOrdered: function (foodArray) {
    let total = 0;
    let orderDetails = "Food ordered: ";
    for (const food of foodArray) {
      orderDetails += `${food} (£${this.food[food].toFixed(2)}), `;
      total += this.food[food];
    }
    orderDetails += `Total: £${total.toFixed(2)}`;
    return orderDetails;
  },
};

console.log(coffeeShop.drinksOrdered(["Flat White", "Fresh Orange Juice"]));
console.log(
  coffeeShop.foodOrdered(["Chocolate Muffin", "Ham & Cheese Sandwich"])
);
