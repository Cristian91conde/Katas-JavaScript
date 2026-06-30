//7.1 Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne);
  } else if (numberTwo > numberOne) {
    console.log(numberTwo);
  } else {
    console.log("Son iguales");
  }
}

greaterNumber(5, 10);  //10
greaterNumber(20, 15);  //20
greaterNumber(7, 7);    // "Son iguales" 