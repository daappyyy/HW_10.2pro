// Маєте масив чисел. 
// Використовуйте вже існуючі методи масиву для створення нового масиву, 
// у якому лише парні числа з оригінального масиву.


const numbers = [40, 12, 3, 15, 17, 24, 39, 14, 31, 45, 13, 67, 52, 25, 10];
console.log("Array: " + numbers);

const evenNumbers = numbers.filter(number => {return number % 2 ===0;});
console.log(`Array with even numbers: ${evenNumbers}`);