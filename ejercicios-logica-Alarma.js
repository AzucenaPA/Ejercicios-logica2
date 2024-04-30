let tiempo = prompt("Inserta el número de segundos que tardará el cronómetro:");
let timeout;

function timer(){
    timeout = setTimeout(alertFunc, tiempo*1000);

}

function alertFunc() {
    alert(`Han pasado ${tiempo} segundos desde que fijaste el cronometro para la hora de dormir.`);
}
timer();
