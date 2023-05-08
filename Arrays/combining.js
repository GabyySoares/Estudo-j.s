const first = [{ id: 1}];  // cria um array de objetos com uma propriedade id
const second =[4,5,6];  // cria um array com números

const combined = firs.concat(second);  // concatena os dois arrays em um só
firs[0]. id = 10; // altera o valor da propriedade id do primeiro objeto no array first


const slice = combined.slice(); // cria uma cópia do array concatenado

console.log(combined); // exibe o array concatenado
console.log(slice); // exibe a cópia do array concatenado