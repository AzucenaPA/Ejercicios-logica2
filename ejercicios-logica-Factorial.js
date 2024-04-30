numero = prompt("Inserta un número mayor o igual a 1:");
let result;

function factorial(num){ 
    if (num === 0){
      //condición lógica de término  
      return 1;  
    }
    return num * factorial(num-1);

}

console.log(factorial(numero));