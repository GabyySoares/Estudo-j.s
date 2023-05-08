const numbers = [1, -1, 2, 3];
// Define um array "numbers" com valores positivos e negativos


const filtered = numbers.filter(n => n >= 0);
// Utiliza o método "filter()" para criar um novo array com apenas os valores positivos
// A função de callback passada como argumento verifica se o valor atual é maior ou igual a zero
console.log(filtered);