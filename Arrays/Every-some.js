const numbers = [1, -1, 2, 3];
// Define um array "numbers" com valores positivos e negativos
//every()
//some()

const atLeastOnePositive = numbers.some(function( value){

    // Utiliza o método "some()" para verificar se pelo menos um valor é positivo
  // Recebe uma função de callback que será chamada para cada elemento do array
   return value >=0;
  // Retorna "true" se o valor atual for maior ou igual a zero

});

console.log(atLeastOnePositive);