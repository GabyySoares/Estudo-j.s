let numbers = [1,2,3,4];
let another = numbers;

//solution 1  atribuir um array vazio para a variável numbers
numbers = [];

//solution 2  definir o comprimento do array numbers como zero
numbers.length = 0; 

//solution 3 remover todos os elementos do array usando splice
numbers.splice(0, numbers.length); 

//solution 4  remover todos os elementos do array usando pop em um loop while
while(numbers.length > 0)
  numbers.pop();

  console.log(numbers); // [] - array vazio
  console.log(another);  // [1, 2, 3, 4] - o array original antes das soluções serem aplicadas