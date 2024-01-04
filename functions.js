// // ========================================
// // Activity 1
// // ========================================

// function favColour() {
//   console.log("My favourite colour is Blue");
// }

// favColour();

// // ========================================
// // Activity 2
// // ========================================

// function favColour(colour) {
//   console.log(`My favourite colour is ${colour}`);
// }

// favColour("Blue");

// // ========================================
// // Activity 3
// // ========================================

// const factorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(33));

// // ========================================
// // Activity 4
// // ========================================

// let orderCount = 0;

// const takeOrder = (topping, crustType) => {
//   console.log(`Pizza with ${topping} on a ${crustType} crust`);
//   orderCount++;
// };

// takeOrder("pineapple", "thin");

// // ========================================
// // Activity 5
// // ========================================

// const account = {
//   balance: 1000000,
//   pin: 1234,
// };

// function withdraw(amount, enteredPin) {
//   if (enteredPin !== account.pin) {
//     console.log("Incorrect PIN. Please try again.");
//     return;
//   }

//   if (amount % 10 !== 0) {
//     console.log("Amount must be in multiples of £10.");
//     return;
//   }

//   if (account.balance >= amount) {
//     account.balance -= amount;
//     console.log(
//       `Please take your cash: £${amount}. Your new balance is £${account.balance}.`
//     );
//   } else {
//     console.log(
//       `You have insufficient funds. Your available balance is £${account.balance}.`
//     );
//   }
// }

// withdraw(50, 1234);
// withdraw(1120, 1234);
// withdraw(50, 4321);
// withdraw(35, 1234);
