
let highIncome = false ; // define a variável "highIncome" como false
let goodCreditScore = false;// define a variável "goodCreditScore" como false

// Utiliza o operador lógico "&&" para definir a variável "eligibleForLoan" como true se ambas "highIncome" e "goodCreditScore" forem verdadeiras (true), caso contrário, será definida como false
let eligibleForLoan =  highIncome  && goodCreditScore;
console.log('Eligible', eligibleForLoan);

// Utiliza o operador lógico "!" (negação) para definir a variável "applicationRefused" como true se "eligibleForLoan" for false, caso contrário, será definida como false
let applicationRefused = ! elegibleForLoan;

console.log('Aplication Resfused', applicationRefused); // exibe no console o valor de "applicationRefused" com a mensagem 'Application Refused:'




let userColor = undefined; // define a variável "userColor" como undefined
let defaultColor = 'blue'; // define a variável "defaultColor" como 'blue'

// Utiliza o operador lógico "&&" para verificar se "userColor" possui um valor definido. Se possuir, "currentColor" receberá esse valor, caso contrário, receberá o valor de "defaultColor"
let currentColor = userColor && defaultColor;

console.log(currentColor);