// Cria um objeto chamado 'circle'
const circle = {
    radius: 1, // propriedade que armazena o raio do círculo
    location: { // propriedade que armazena a localização do círculo
        x: 1,
        y: 1
    },
   isVisible: true, // propriedade que indica se o círculo está visível ou não
   draw: function(){ // método que desenha o círculo
       console.log('draw');
   }
};

// Chama o método 'draw' do objeto 'circle'
circle.draw();  // imprime 'draw' no console