console.log(document);
//array de donas
const donas = [
    { color: "../img/glase_violeta.png", ingrediente: "../img/glase_transparente.png" },
    { color: "../img/glase_rosa.png", ingrediente: "../img/glase_transparente.png" },
    { color: "../img/glase_celeste.png", ingrediente: "../img/glase_transparente.png" },
    { color: "../img/glase_verde.png", ingrediente: "../img/glase_transparente.png" },
    { color: "../img/glase_amarillo.png", ingrediente: "../img/glase_transparente.png" },
    { color: "../img/glase_transparente.png", ingrediente: "../img/glase_granas.png" },
    { color: "../img/glase_violeta.png", ingrediente: "../img/glase_granas.png" },
    { color: "../img/glase_rosa.png", ingrediente: "../img/glase_granas.png" },
    { color: "../img/glase_celeste.png", ingrediente: "../img/glase_granas.png" },
    { color: "../img/glase_verde.png", ingrediente: "../img/glase_granas.png" },
    { color: "../img/glase_amarillo.png", ingrediente: "../img/glase_granas.png" },
]

// asignación de valores para los botones y textos
let violetBtn = document.getElementById("mg_violeta");
let pinkBtn = document.getElementById("mg_rosa");
let skyblueBtn = document.getElementById("mg_celeste");
let greenBtn = document.getElementById("mg_verde");
let yellowBtn = document.getElementById("mg_amarillo");
let sprinklesBtn = document.getElementById("mg_granas");
let imgchange = document.getElementById("decoracion");
let imgchange1 = document.getElementById("decoracionextra");
let baseonechange = document.getElementById("basedecoracion1");
let baseoneextrachange = document.getElementById("basedecoracionextra1");


const lifes = document.getElementsByClassName("lifes_img");
const startBtn = document.getElementById("botonstart");
const addBtn = document.getElementById("botonagregar");
const resetBtn = document.getElementById("botonborrar");
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
    imgchange.src = donas[0].color;
}
pinkBtn.onclick = function () {
    imgchange.src = donas[1].color;
}
skyblueBtn.onclick = function () {
    imgchange.src = donas[2].color;
}
greenBtn.onclick = function () {
    imgchange.src = donas[3].color;
}
yellowBtn.onclick = function () {
    imgchange.src = donas[4].color;
}
sprinklesBtn.onclick = function () {
    imgchange1.src = donas[10].ingrediente;
}

resetBtn.onclick = function () {
    imgchange.src = donas[0].ingrediente;
    imgchange1.src = donas[0].ingrediente;
}

// funcion q bloquea los botones        
function bloquearfunciones() {
    addBtn.disabled = true;
    resetBtn.disabled = true;
}


//funcion tiempo cuenta regresiva

let secondsbase = 3;
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
    if (imgchange.src === baseonechange.src && imgchange1.src === baseoneextrachange.src) {
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
              baseonechange.src = donas[0].color;
              baseoneextrachange.src = donas[0].ingrediente;
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 1:
              baseonechange.src = donas[1].color;
              baseoneextrachange.src = donas[1].ingrediente;
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 2:
              baseonechange.src = donas[2].color;
              baseoneextrachange.src = donas[2].ingrediente;
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 3:
              baseonechange.src = donas[3].color;
              baseoneextrachange.src = donas[3].ingrediente;
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 4:
              baseonechange.src = donas[4].color;
              baseoneextrachange.src = donas[4].ingrediente;
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 5:
              baseonechange.src = donas[5].color;
              baseoneextrachange.src = donas[5].ingrediente;
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 6:
              baseonechange.src = donas[6].color;
              baseoneextrachange.src = donas[6].ingrediente;
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 7:
              baseonechange.src = donas[7].color;
              baseoneextrachange.src = donas[7].ingrediente;
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 8:
              baseonechange.src = donas[8].color;
              baseoneextrachange.src = donas[8].ingrediente;
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 9:
              baseonechange.src = donas[9].color;
              baseoneextrachange.src = donas[9].ingrediente;
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            case 10:
              baseonechange.src = donas[10].color;
              baseoneextrachange.src = donas[10].ingrediente;
              clearInterval(counter);
              actualizarTiempo(secondsbase);
              addBtn.onclick = () => userSelection();
              break;
            default:
              console.log("Error 🙀");
              break;
          }
    }
}

// función para comenzar el juego
startBtn.onclick = () => startGame();



