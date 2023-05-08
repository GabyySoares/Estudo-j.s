// Declaração de um objeto com duas propriedades: name e age
const person= {
     name: 'Mosh',
     age:30
};

// Loop for..in que itera sobre as propriedades do objeto person
for ( let key in person)
  console.log(key , person[key]); // Imprime o nome e valor de cada propriedade

  // Declaração de um array com três elementos
const colors = ['red', 'green', 'blue'];

// Loop for..in que itera sobre os índices do array colors
for (let index in colors)
   console.log(index, colors[index]); // Imprime o índice e valor de cada elemento

   // for-of
   for (let color of colors)
    console.log(color);