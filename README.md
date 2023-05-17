

![logo javascript](https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png)


# Conhecendo JavaScript 
 O básico sobre JavaScript!

 <ul>
 	<h1> :page_with_curl: Principais Pontos:</h1>
 	<li>Propriedades do básicas e condicionais</li>
 	<li>Conhecendo Variáveis e Funções no JavaScript</li>
 	<li>As definições de Array e Objeto</li>
 	<li>Eventos dinâmicos</li>
 	<li>Laços de repetição</li>

##  Variáveis :triangular_flag_on_post:
É responsaveis por guardar dados na memória.
inicia com a palavra var,let ou const

<p>
Exemplo
</p>

~~~javascript
var nome = 'Gabriela';                      
let idade = 20;
const posuiFaculdade = false; 
~~~


### Sintaxe :triangular_flag_on_post:


Palavra chave **var** seguida do **nome**, sinal de **igual** e o **valor**.

</br>

~~~javascript
var nome = 'Gabriela';
var idade = 20;
var possuiFaculdade = true;
~~~

### :radio_button: Vírgula 
<p>
Utilizei a vírgula para criar mais de uma variável, sem repetir a
palavra chave var.</p>
</br>

~~~javascript
var nome = 'Gabriela',
idade = 20,
possuiFaculdade = true;
~~~
### :radio_button: Sem valor 
<p>
Pode  declarar ela e não atribuir valor inicialmente.
</p>
</br>

~~~javascript
var precoLaranja;
// retorna undefined
~~~

### :radio_button: Como nomear uma variavel 

1. podem iniciar com $, _, ou letras.
Podem conter números mas não iniciar com eles

2. Case sensitive
nome é diferente de Nome

3. Não utilizar palavras reservadas</br>
aqui vai um link das palavras reservadas --> (https://www.w3schools.com/js/js_reserved.asp)

4. Camel case
É comum nomearmos assim: abrirModal

<p>
exemplo
</p>

__Inválido__
~~~javascript
var §nome;
var function;
var 1possuiMestrado;
~~~
__Válido__
~~~javascript
var $selecionar;
var _nome;
var possuiMestradoNoExterior;
~~~

### :radio_button: Hoisting 
<p>
:pushpin: São movidas para cima do código, porém o valor atribuído não é
movido.
</p>

~~~javascript
console.log(nome);
var nome = 'Camila';  //Retorna undefined
var profissao = 'Jornalista';
console.log(profissao); //Retornar Jornalista
~~~

### :radio_button: Mudar o valor atribuído 
<p>É possível mudar os valores atribuídos a variáveis declaradas com
var e let . Porém não é possível modificar valores das declaradas com const</p>

~~~javascript
var idade = 17;
idade = 20;
let preco = 60;
preco = 30;
const possuiMestrado = true;
possuiMestrado = false;

//Retorna um erro
~~~

## :radio_button: tipos de dados 

:pushpin: Todos são primitivos exceto os objetos

~~~javascript
var nome = 'Gabriela'; // String
var idade = 20; // Number
var possuiMestrado = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object
~~~
:pushpin: Primitivos são dados imutaveis 

### :radio_button: Veerificar tipo de dado 

~~~javascript
var nome = 'Gabriela';
console.log(typeof nome);
// retorna string
~~~
typeof null  retorna object

### :radio_button: String 

:pushpin: Você pode somar uma string e assim concatenar as palavras.

~~~javascript
var nome = 'Gabriela';
var sobrenome = 'Silva';
var nomeCompleto = nome + ' ' + sobrenome;
~~~
:pushpin: Você pode somar números com strings, o resultado nal é sempre uma string.
~~~javascript
var gols = 1000;
var frase = ' Joao fez ' + gols + ' gols';
~~~

Aspas Duplas, Simples e Template String

~~~javascript
'Cozinhar é "Muito" fácil';
"Cozinhar é 'Muito' fácil";
"Cozinhar é \"Muito\" fácil";
`Cozinhar é "Muito" fácil"`;
"Cozinhar é "Muito" fácil"; // Inválido
~~~

 :pushpin: Não necessariamente precisamos </br>
atribuir valores a uma variável

### :radio_button: Template String 

~~~javascript
var Bolos = 1000;
var frase1 = 'Joao fez ' + Bolos + ' Bolos';
var frase2 = `Joao fez ${Bolos} Bolos`; // Utilizando Template String
~~~

:pushpin: Você deve passar expressões / <br>
variáveis dentro de ${}

# Link do curso :link: <https://www.udemy.com/pt/> :link: <h1> 
