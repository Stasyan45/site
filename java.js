let arr = [1, 2, 5, 9, 4, 13, 4, 10];

// Виведення чисел, більше 3 і менше 10
console.log("Числа між 3 і 10:");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 3 && arr[i] < 10) {
    console.log(arr[i]);
  }
}

// Перевірка на наявність числа 4
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    console.log("Наявний!");
    break;
  }
}
let mass = [42, 2, 33, 11, 12, 10, 0];

// Середнє арифметичне
let average = mass.reduce((sum, num) => sum + num, 0) / mass.length;

console.log("Середнє арифметичне:", average);
let strings = ["parrot", "bull", "bear", "monkey"];

// Підрахунок кількості символів
let totalChars = strings.reduce((sum, str) => sum + str.length, 0);

console.log("Сумарна кількість символів:", totalChars);
let mixedArray = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];

// Фільтруємо рядки
let stringsOnly = mixedArray.filter(item => typeof item === "string");

console.log("Масив лише зі стрічок:", stringsOnly);
