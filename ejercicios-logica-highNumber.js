//Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
//let lista = prompt("Introduce el primer números separados por espacios");
let lista = [];
let count = 0;
while (count < 10){
    input = prompt("Introduce el número");
    lista.push(parseInt(input));
    count++
} 
console.log(lista);
console.log(lista.length);
//let listaDepurada = lista.

function mayorMenor(list){
    let numMax = 0;
    for (i=0; i < list.length; i++){
        if (list[i] > numMax) {
            console.log(list[i] > numMax);
            numMax = list[i];
            console.log(numMax);
        }
    }
return numMax;
}

console.log(mayorMenor(lista));