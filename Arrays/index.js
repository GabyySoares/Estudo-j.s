const numbers = [3, 4]; // Criando um array com dois elementos

//end 
numbers.push(5 , 6); // Adicionando os elementos 5 e 6 no final do array

//Beginning
numbers.unshift(1 , 2); // Adicionando os elementos 1 e 2 no início do array

// Middle
 numbers.splice(2 , 0 , 'a', 'b'); // Adicionando os elementos 'a' e 'b' na posição 2 do array sem remover nenhum elemento (0 no segundo parâmetro da função splice)

 // Imprimindo o array completo no console (que agora possui 8 elementos)
 console.log(numbers);