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

// Factory Function

// Factory Function que retorna um objeto circle com uma propriedade de raio e um método draw
function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    };
}

// Cria um objeto circle1 com raio igual a 1 usando a Factory Function createCircle
const circle1 = createCircle(1);
console.log(circle1);

// Cria um objeto circle2 com raio igual a 2 usando a Factory Function createCircle
const circle2 = createCircle(2);
console.log(circle2);