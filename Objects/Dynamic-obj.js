const circle ={
    radius:1
};
// tentando atribuir um novo objeto ao objeto já existente
// isso resultará em um erro porque objetos definidos com 'const' não podem ter seu valor reatribuído
// circle = {};

// adicionando uma nova propriedade ao objeto 'circle'
circle.com = 'yellow';
circle.draw = function(){} // adicionando um novo método ao objeto 'circle'
    delete circle.color; // removendo a propriedade 'color' do objeto 'circle'
    delete circle.draw; // removendo o método 'draw' do objeto 'circle'


console.log(circle); 