let hour = 20;

// Verifica se a hora está entre 6h e 12h e exibe a mensagem 'Good morning'
if(hour >= 6 && hour < 12)
   console.log('Good morning');
// Verifica se a hora está entre 12h e 18h e exibe a mensagem 'Good afternoon'
else if (hour >= 12&& hour < 18)
   console.log('Good afternoon');
   // Caso contrário, exibe a mensagem 'Good evening'
else 
  console.log('Good evening');