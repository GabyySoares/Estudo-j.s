// Definição da função "sum" que recebe dois parâmetros, mas pode receber quantos parâmetros quiser por meio do objeto "arguments"
function sum (a,b){
    let total = 0; // Declaração de variável "total" com valor inicial de zero
    for (let value of arguments)  // Laço de repetição que itera por todos os argumentos passados para a função
      total += value; // A variável "total" é incrementada com o valor do argumento atual
      // Retorno do valor total da soma
    return total;
}
// Chamada da função "sum" com seis argumentos e exibição do resultado no console
console.log (sum (1,2,3,4,5,20));