// Завдання 5
// function user(name, age) {
//   this.name = name;
//   this.age = age;
//   this.canVote = function () {
//     return this.age >= 18; // Повертає true, якщо вік більше або дорівнює 18
//   };
// }

// const user1 = new user("Valik", 22);
// const user2 = new user("Marina", 15);

// console.log(user1.name + " може голусувати : " + user1.canVote());
// console.log(user2.name + " може голусувати : " + user2.canVote());

// Завдання 6
// function BankAccount(initialBalance) {
//   this.balance = initialBalance;
//   this.deposit = function (amount) {
//     this.balance += amount;
//     console.log(`Депозит : ${amount} грн. Поточний баланс ${this.balance} грн`);
//   };
//   this.withdraw = function (amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       console.log(
//         `Зняття: ${amount} грн. Поточний баланс: ${this.balance} грн.`
//       );
//     } else {
//       console.log("Недостатньо коштів на рахунку для зняття.");
//     }
//   };
//   this.getBalance = function () {
//     return this.balance;
//   };
// }

// const myAccount = new BankAccount(1000);
// myAccount.deposit(500);
// myAccount.withdraw(2000);
// console.log(myAccount.getBalance());

// Завдання 4

// function Car(brand, model, year) {
//   const Car2020 = {
//     brand: brand,
//     model: model,
//     year: year,
//   };

//   Car2020.getCarInfo = function () {
//     return `Марка : ${this.brand}, Модель : ${this.model}, Рік : ${this.year}`;
//   };
//   return Car2020;
// }

// const Cars = Car("Mercedec", "S", "2022");
// const Cars2 = Car("BMW", "X5", "2023");
// const Cars3 = Car("Mazda", "CX-5", "2023");
// console.log(Cars.getCarInfo());
// console.log(Cars2.getCarInfo());
// console.log(Cars3.getCarInfo());

//Завдання 2

// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [4, 5, 6, 7, 8, 9];

// const Set1 = new Set(array1);
// const Set2 = new Set(array2);

// const CommonElements = [...Set1].filter((element) => Set2.has(element));

// console.log(CommonElements);

//Завдання 3

// const str = "abcdefg";

// const set1 = new Set(str);

// const UniqueStr = set1.size === str.length;

// console.log(UniqueStr);
