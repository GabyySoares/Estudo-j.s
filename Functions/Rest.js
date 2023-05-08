function sum (discount, ...prices){
     // reduce é usado para obter a soma de todos os preços
     const total = prices.reduce((a,b) => a + b);
      // o valor total é multiplicado pelo desconto (1 - discount)
     // e retornado
      return total * (1 - discount);
}
// Chamando a função com desconto de 10% (0.1)
// e preços de 20, 30 e 1
console.log(sum(0.1,20,30,1));