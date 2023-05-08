let i = 0;
while( i <= 10){
    // Verifica se i é igual a 5 e sai do loop com o comando break
    if( i===5) break;

    // Verifica se i é um número par
    if(i% 2 === 0){

         // Incrementa i em 1 e começa uma nova iteração
        i++;
         // Pula para o próximo ciclo do loop sem executar o restante do código
        
        continue;
        
    }
    console.log(i);

    // Incrementa i em 1
    i++;
}