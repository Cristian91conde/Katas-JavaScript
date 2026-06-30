//33. Desarrolla una función que reciba un país por parámetro y devuelva su capital.
//Utiliza un objeto para almacenar los países y sus capitales.
//La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  const normalized = country.trim().toLowerCase();

  for (const key in capitals) {
    if (key.toLowerCase() === normalized) {
      return capitals[key];
    }
  }

  return `No tengo registrada la capital de "${country}".`;
}

console.log(getCapital('Spain')); // Madrid
console.log(getCapital('japon')); // No tengo registrada la capital de "japon".