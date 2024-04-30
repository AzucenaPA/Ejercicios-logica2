//Palindromo
let palabra = prompt("Inserta la frase para checar si es un palíndromo (puedes utilizar mayúsculas, minúsculas, espacios y caracteres no alfanuméricos)");
//let deprado = palabra.replace(/[^\w]/gi, ""); para eliminar caracteres que no sean alfanum y espacios
//console.log(deprado);
function esPalidromo(deprado){
    let palabraReves;
    let palabraLetras;
    
    palabraUniforme = deprado.replace(/[^\w]/gi, "").toLowerCase();
    palabraLetras = palabraUniforme.split("");
    //console.log(palabraLetras);
    palabraReves = palabraLetras.reverse().join("");
    //console.log(palabraReves);
    
    //return frase.split("").reverse().join("");
    if (palabraUniforme === palabraReves) {
        return ("Es un palíndromo!");
    } else {
        return ("No es un palíndromo!"); 
    }
}
console.log(esPalidromo(palabra));

//
