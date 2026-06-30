//10. Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let sum = 0;
    let average = 0;
    for (let i = 0 ; i < numberList.length; i++) {
        sum = sum + numberList[i];
    }
    average = sum / numberList.length;
    return average;
}
    console.log(average(numbers));  // 23.428571428571427