// Definição das permissões através de constantes binárias
// Read, Write, Execute 
// 00000100 - permissão de leitura
// 00000010 - permissão de escrita
// 00000001 - permissão de execução

const readPermission = 4;
const WhithPermission = 2;
const executePermission = 1;

// Inicialização da variável que irá armazenar as permissões do usuário
let myPermission = 0;

// Utilização do operador binário '&' para combinar as permissões de leitura e escrita e atribuir o resultado à variável 'myPermission'
myPermission = myPermission & readPermission & WhithPermission;
console.log(myPermission);

// Utilização do operador ternário para definir a mensagem que será exibida no console, dependendo se a permissão de leitura está habilitada ou não
let message = 
(myPermission & readPermission) ? 'yes': 'no';