//11. Calcular promedio mezclado: 
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
//Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) { 
    let sum = 0;

    for (let i = 0 ; i < list.length; i++) {
    if (typeof list[i] === "number") {
        sum = sum + list[i];
    } else if (typeof list[i] === "string") {
        sum = sum + list[i].length;
    }
    }

    let average = sum / list.length;
    return average;
}

console.log(averageWord(mixedElements));  // 5.888888888888889
