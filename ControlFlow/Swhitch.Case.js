let role = 'guest';

// Utilização do switch/case para comparar o valor da variável role
    switch (role){
        case 'guest':
        console.log('Guest User');
        break;
    
    case 'moderator':
        console.log('Moderator User');
        break;
   // Caso a variável role não seja igual a nenhuma das opções anteriores
    default :
      console.log('Unknown User');
    }
  // Utilização do if/else para comparar o valor da variável role novamente
    if (role == 'guest') console.log('Guest');
    else if (role === 'moderator') console.log ('Moderator');
    else console.log('Unknonwn User');