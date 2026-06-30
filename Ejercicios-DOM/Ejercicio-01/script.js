// 1.1 Usa querySelector para mostrar por consola el botón con la clase.showme

const button = document.querySelector('.showme');
console.log(button);


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillado = document.querySelector('#pillado');
console.log(pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p

const allP = document.querySelectorAll('p');
console.log(allP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos conla clase.pokemon

const pokemons = document.querySelectorAll('.pokemon');
console.log(pokemons);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const thirdCharacter = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdCharacter);