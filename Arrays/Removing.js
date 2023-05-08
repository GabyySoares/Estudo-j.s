
const numbers = [1,2,3,4];

//end
const last = numbers.pop(); // Removendo o último elemento do array

//Beginning
const firs = numbers.shift(); // Removendo o primeiro elemento do array

//Middle
numbers.splice(2,2); // Removendo dois elementos a partir da posição 2

console.log(numbers);