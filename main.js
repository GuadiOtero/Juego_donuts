console.log(document);
//array de colores e ingredientes

const colores = ["../img/glase_violeta.png", "../img/glase_rosa.png", "../img/glase_celeste.png", "../img/glase_verde.png","../img/glase_amarillo.png",];
const ingrediente = ["../img/glase_granas.png", "../img/glase_transparente.png"];


// asignación de valores para los botones y textos
let violetBtn = document.getElementById("mg_violeta");
let pinkBtn = document.getElementById("mg_rosa");
let skyblueBtn = document.getElementById("mg_celeste");
let greenBtn = document.getElementById("mg_verde");
let yellowBtn = document.getElementById("mg_amarillo");
let sprinklesBtn = document.getElementById("mg_granas");
let imgchange = document.getElementById("decoracion");
let imgchange1 = document.getElementById("decoracionextra");
let baseChange = document.getElementById("basedecoracion1");
let baseExtraChange = document.getElementById("basedecoracionextra1");

const startBtn = document.getElementById("botonstart");
const addBtn = document.getElementById("botonagregar");
const resetBtn = document.getElementById("botonborrar");
const lifes = document.getElementsByClassName("lifes_img");

let seconds = document.getElementById("seconds");
let right = document.getElementById("right");
let wrong = document.getElementById("wrong");
let points = document.getElementById("points");

let puntaje = 0;
let lifesbase = 5;
let rightbase = 0;
let wrongbase = 0;

// asignación de funciones a los botones
violetBtn.onclick = function () {
    imgchange.src = colores[0];
}
pinkBtn.onclick = function () {
    imgchange.src = colores[1];
}
skyblueBtn.onclick = function () {
    imgchange.src = colores[2];
}
greenBtn.onclick = function () {
    imgchange.src = colores[3];
}
yellowBtn.onclick = function () {
    imgchange.src = colores[4];
}
sprinklesBtn.onclick = function () {
    imgchange1.src = ingrediente[0];
}

resetBtn.onclick = function () {
    imgchange.src = ingrediente[1];
    imgchange1.src = ingrediente[1];
}

// funcion q bloquea los botones        
function bloquearfunciones() {
    addBtn.disabled = true;
    resetBtn.disabled = true;
}

//funcion tiempo cuenta regresiva

let secondsbase = 2;
let counter;

function actualizarTiempo(secondsbase) {
    counter = setInterval(timer, 1000);
    function timer() {
        seconds.innerHTML = secondsbase;
        secondsbase--;
        if (secondsbase < 0) {
            wrongbase++;
            lifesbase--;
            lifesdown();
            resetBtn.onclick();
            startGame();
        }
    }
    right.innerHTML = rightbase;
    wrong.innerHTML = wrongbase;
    points.innerHTML = puntaje;
    seconds.innerHTML = secondsbase;
}

// función de vidas disponibles
lifesdown = function () {
    if (lifesbase === 4) {
        lifes[4].src = "../img/Heartlow.png";
    } else if (lifesbase === 3) {
        lifes[3].src = "../img/Heartlow.png";
    } else if (lifesbase === 2) {
        lifes[2].src = "../img/Heartlow.png";
    } else if (lifesbase === 1) {
        lifes[1].src = "../img/Heartlow.png";
    } else if (lifesbase === 0) {
        lifes[0].src = "../img/Heartlow.png";
    }
}

// función de selección del usuario y comparación con la dona generada
userSelection = function () {
    if (imgchange.src === baseChange.src && imgchange1.src === baseExtraChange.src) {
        puntaje += 100;
        rightbase++;
        resetBtn.onclick();
    } else {
        resetBtn.onclick();
        wrongbase++;
        lifesbase--;
        lifesdown();
    }
    right.innerHTML = rightbase;
    wrong.innerHTML = wrongbase;
    points.innerHTML = puntaje;
    startGame();
}

// función principal del juego, generador random de combinaciones
startGame = function () {
    if (lifesbase === 0) {
        alert("perdiste!!");
        seconds.innerHTML = secondsbase;
        clearInterval(counter);
        bloquearfunciones();
    } else {
        startBtn.disabled = true;
        let generaProblema = Math.round(Math.random() * 10);

        switch (generaProblema) {
            case 0:
              baseChange.src = colores[0];
              baseExtraChange.src = ingrediente[1];
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 1:
              baseChange.src = colores[1];
              baseExtraChange.src = ingrediente[1];
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 2:
              baseChange.src = colores[2];
              baseExtraChange.src = ingrediente[1];
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 3:
              baseChange.src = colores[3];
              baseExtraChange.src = ingrediente[1];
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 4:
              baseChange.src = colores[4];
              baseExtraChange.src = ingrediente[1];
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 5:
              baseChange.src = ingrediente[1];
              baseExtraChange.src = ingrediente[0];
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 6:
              baseChange.src = colores[0];
              baseExtraChange.src = ingrediente[0];
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 7:
              baseChange.src = colores[1];
              baseExtraChange.src = ingrediente[0];
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 8:
              baseChange.src = colores[2];
              baseExtraChange.src = ingrediente[0];
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 9:
              baseChange.src = colores[3];
              baseExtraChange.src = ingrediente[0];
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 10:
              baseChange.src = colores[4];
              baseExtraChange.src = ingrediente[0];
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            default:
              alert("Error 🙀");
              break;
          }
    }
}

// función para comenzar el juego
startBtn.onclick = () => startGame();



