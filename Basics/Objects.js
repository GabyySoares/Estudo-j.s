// Define três variáveis usando "let" e atribui valores a elas

let name = 'Mosh';
let age = 30;
let person = {
     name: 'Mosh',
     age: 30
};
// Altera o valor da propriedade "name" do objeto "person"
person.name = 'John';

// Define uma variável "selection" e usa a notação de colchetes para adicionar uma nova propriedade "selection" ao objeto "person"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
let selection = 'name';
person['selection'] = 'Mary';

console.log(person.name);