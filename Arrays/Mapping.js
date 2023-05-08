const number = [1, -1 , 2 , 3];
// Define um array "numbers" com valores positivos e negativos
const items = numbers
 .filter(n => n >= 0) // Cria um novo array com apenas os valores positivos
 .map(n => ( { value: n})) // Cria um novo array de objetos com uma propriedade "value" contendo cada valor do array anterior
 .filter(obj => obj.value > 1) // Filtra novamente o array, mantendo apenas os objetos cujo valor é maior que 1
 .map(obj => obj.value); // Cria um novo array contendo apenas os valores dos objetos filtrados


 console.log(items);