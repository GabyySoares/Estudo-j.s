const course = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'javaScript'},

];

course.sort(function(a,b) {
   // Define uma função de comparação para o método sort()
  // Esta função recebe dois objetos "a" e "b" como argumentos
 
// Converte o nome de cada objeto em letras minúsculas
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  // Compara os nomes e retorna o resultado de acordo com as regras:
  // a < b => -1 (a vem antes de b)
  // a > b => 1 (a vem depois de b)
  // a === b => 0 (a e b são iguais em relação à ordenação)

  if (nameA < b.name) return -1;
  if (nameA  > b.name) return 1 ;
  return 0;
});