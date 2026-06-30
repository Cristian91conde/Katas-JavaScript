// 2.1 Dado el siguiente array, crea una copia usando spread operators.
// Const pointsList = [32, 54, 21, 64, 75, 43]

const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList];

console.log(pointsListCopy);



// 2.2 Dado el siguiente objeto, crea una copia usando spread operators. 
// Const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = { ...toy };

console.log(toyCopy);


// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
// Const pointsList = [32, 54, 21, 64, 75, 43];
// Const pointsLis2 = [54,87,99,65,32];


const pointsListA = [32, 54, 21, 64, 75, 43];
const pointsListB = [54, 87, 99, 65, 32];

const mergedPoints = [...pointsListA, ...pointsListB];

console.log(mergedPoints);



// 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
//const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
// const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}


const toyOriginal = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const updatedToy = { ...toyOriginal, ...toyUpdate };

console.log(updatedToy);



// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 sin editar el original.
// const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colorsCopy);
console.log(colors);


//-------------------------------------------------------------------------------------------------------
//                                             Resultados
//-------------------------------------------------------------------------------------------------------

//2.1
// [32, 54, 21, 64, 75, 43]

//2.2
// { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }

//2.3
// [32, 54, 21, 64, 75, 43, 54, 87, 99, 65, 32]

//2.4
// {
//   name: 'Bus laiyiar',
//   date: '20-30-1995',
//   color: 'multicolor',
//   lights: 'rgb',
//   power: ['Volar like a dragon', 'MoonWalk']
// }

//2.5
// ['rojo', 'azul', 'verde', 'naranja']
// ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
// ['rojo', 'azul', 'verde', 'naranja']