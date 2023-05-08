// Define uma função chamada 'interest' que recebe três parâmetros: 'principal', 'rate' e 'years'
function interest (principal, rate = 3.5, years){
      // Calcula o juro composto usando a fórmula: P * r * t, onde P é o principal, r é a taxa de juros anual e t é o tempo em anos
    return principal * rate / 100 * years;
}

// Chama a função 'interest' com os argumentos: 10000 para 'principal', undefined para 'rate' (usa o valor padrão de 3.5), e 5 para 'years'
console.log(interest(10000, undefined, 5));
console.log(interest(10000, undefined, 5));