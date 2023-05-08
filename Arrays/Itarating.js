const numbers = [1,2,3]; // declara uma constante "numbers" que é um array com 3 números

// loop "for...of" para percorrer cada elemento do array e imprimir no console
for (let number of numbers)
  console.log(number);

  // método "forEach()" para executar uma função de retorno para cada elemento do array
  numbers.forEach((number , index) => console.log (index, number));