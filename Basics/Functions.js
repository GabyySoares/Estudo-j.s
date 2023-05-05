  // Cria uma função chamada "greet" com dois parâmetros: "name" e "lastName"
       function greet (name, lestName){
   
   
    // Imprime uma mensagem  no console, concatenando os valores dos parâmetros "name" e "lastName"
         console.log('Hello' + name + '' + lestName);

}

greet('John', 'Smith'); // Chama a função "greet" com os argumentos "John" e "Smith"
greet ('Mary'); // Chama a função "greet" com o argumento "Mary", mas sem passar o segundo argumento "lastName" (que será "undefined")