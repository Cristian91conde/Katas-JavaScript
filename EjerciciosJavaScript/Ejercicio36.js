//36. Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.
//Averigua como hallar el año actual en tus cálculos.

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {
  const currentYear = new Date().getFullYear();

  return actors.map(actor => {
    const age = currentYear - actor.born;
    return { name: actor.name, age: age };
  });
}

console.log(calculateActorsAges(actors)); 

//{ name: 'Leonardo DiCaprio', age: 52 },
//{ name: 'Tom Hanks', age: 70 },
//{ name: 'Meryl Streep', age: 77 },
//{ name: 'Brad Pitt', age: 63 },
//{ name: 'Johnny Depp', age: 63 },
//{ name: 'Scarlett Johansson', age: 42 },
//{ name: 'Jennifer Lawrence', age: 36 },
//{ name: 'Denzel Washington', age: 72 },
//{ name: 'Morgan Freeman', age: 89 },
//{ name: 'Cate Blanchett', age: 57 }

