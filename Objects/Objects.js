function circle (radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

// Chama a função 'circle' usando 'call' e 'apply'
circle.call({}), 1; // cria um objeto vazio e define a propriedade 'radius' como 1
circle.apply({}), 1; // cria um objeto vazio e define a propriedade 'radius' como 1


// Cria um objeto 'another' usando a função construtora 'circle'
const another = new circle(1);