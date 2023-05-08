
let highIncome = false ; // define a variável "highIncome" como false
let goodCreditScore = false;// define a variável "goodCreditScore" como false

// Utiliza o operador lógico "&&" para definir a variável "eligibleForLoan" como true se ambas "highIncome" e "goodCreditScore" forem verdadeiras (true), caso contrário, será definida como false
let eligibleForLoan =  highIncome  && goodCreditScore;
console.log('Eligible', eligibleForLoan);

// Utiliza o operador lógico "!" (negação) para definir a variável "applicationRefused" como true se "eligibleForLoan" for false, caso contrário, será definida como false
let aplicationRefused = ! elegibleForLoan;

console.log('Aplication Resfused', applicationRefused); // exibe no console o valor de "applicationRefused" com a mensagem 'Application Refused:'