//USER PROFILE
let userName = prompt("Escribe el nombre de usuario:");
let age = prompt("Escribe cuántos años tienes:");
let favoriteMovies = ["Cuestión de tiempo", "TOC TOC", "Juego de gemelas"];


console.log(`Hola! Mi nombre de usuario es ${userName} y tengo ${age} años.`);

favoriteMovies.forEach(listMovies);

function listMovies(movie){
    console.log(`La película "${movie}" es una de mis favoritas.`);
}