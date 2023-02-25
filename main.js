console.log(document);

//array de avatares, colores e ingredientes
const avatares = ["../img/Bella.png", "../img/Choco.png", "../img/Lana.png", "../img/Mittens.png", "../img/Nugget.png", "../img/Pumpkin.png"];
const colores = ["../img/glase_violeta.png", "../img/glase_rosa.png", "../img/glase_celeste.png", "../img/glase_verde.png", "../img/glase_amarillo.png",];
const ingrediente = ["../img/glase_granas.png", "../img/glase_transparente.png"];

// asignación de valores para los botones 
let violetBtn = document.getElementById("mg_violeta");
let pinkBtn = document.getElementById("mg_rosa");
let skyblueBtn = document.getElementById("mg_celeste");
let greenBtn = document.getElementById("mg_verde");
let yellowBtn = document.getElementById("mg_amarillo");
let sprinklesBtn = document.getElementById("mg_granas");
// asignación de valores para las imagenes
let imgchange = document.getElementById("decoracion");
let imgchange1 = document.getElementById("decoracionextra");
let baseChange = document.getElementById("basedecoracion1");
let baseExtraChange = document.getElementById("basedecoracionextra1");
let avatarChange = document.getElementById("avatar_life");
// asignación de valores para el nombre del jugador y botones
let gamerName = document.getElementById("gamerName");
let nameBtn = document.getElementById("nameBtn");
// asignación de valores para la selección del avatar
let bellaBtn = document.getElementById("btn_avatar0");
let chocoBtn = document.getElementById("btn_avatar1");
let lanaBtn = document.getElementById("btn_avatar2");
let mittensBtn = document.getElementById("btn_avatar3");
let nuggetBtn = document.getElementById("btn_avatar4");
let pumpkinBtn = document.getElementById("btn_avatar5");
let avatarBtn = document.getElementsByClassName("avatar_btn");
// asignación de valores para los botones comenzar, agregar, resetear
const startBtn = document.getElementById("botonstart");
const addBtn = document.getElementById("botonagregar");
const resetBtn = document.getElementById("botonborrar");
//asignacion de valor para la clase "lifes"
const lifes = document.getElementsByClassName("lifes_img");
//asignacion de valor para los textos variables
let seconds = document.getElementById("seconds");
let right = document.getElementById("right");
let wrong = document.getElementById("wrong");
let points = document.getElementById("points");
//asignacion de variables
let puntaje = 0;
let lifesbase = 5;
let rightbase = 0;
let wrongbase = 0;
// Displays de los pasos para jugar
let avatarDisplay = document.getElementById("menujugar");
let nameDisplay = document.getElementById("ingreseNombre"); 
let gameDisplay = document.getElementById("gamedisplay");

//array para jugadores (ranking)
const players = [];

//clase y aplicación sobre el HTML
class Player {
    constructor(avatar, rankName, point) {
        this.avatar = avatar;
        this.rankName = rankName;
        this.point = point;
    }
}

playerOne = new Player("../img/Bella.png", "Bella", 4000);
playerTwo = new Player("../img/Choco.png", "Choco", 2000);
playerThree = new Player("../img/Lana.png", "Lana", 1000);

let avatarGamer = localStorage.getItem("avatar");
let nameGamer = localStorage.getItem("gamer");
let pointsGamer = localStorage.getItem("points");

const addPlayer1 = players.push(playerOne);
const addPlayer2 = players.push(playerTwo);
const addPlayer3 = players.push(playerThree);

const rankingContainer = document.getElementById("ranking_container");

// funcion para aplicar resultados en el ranking
function gamerRanking() {
    gameDisplay.remove();
    let avatarGamer = localStorage.getItem("avatar");
    let nameGamer = localStorage.getItem("gamer");
    let pointsGamer = localStorage.getItem("points");

    newPlayer = new Player (avatarGamer, nameGamer, pointsGamer);
    players.push(newPlayer);
    
  let newRanking = document.createElement("div");
    newRanking.innerHTML = `<div class="ranking_cards">
    <img src="${avatarGamer}" alt="" class="gamer_avatar">
    <p class="gamer_name">${nameGamer}</p>
    <p class="gamer_points">${pointsGamer}</p>
    </div>`;
    rankingContainer.appendChild(newRanking); 
    rankingContainer.classList.add("open-ranking");
}

players.forEach(item => {
    div = document.createElement("div");
    div.innerHTML = `<div class="ranking_cards">
    <img src="${item.avatar}" alt="" class="gamer_avatar">
    <p class="gamer_name">${item.rankName}</p>
    <p class="gamer_points">${item.point}</p>
    </div>`;
    rankingContainer.appendChild(div);
})

// este boton captura el nombre del jugador
nameBtn.addEventListener("click", () => {
    let name = document.getElementById("gamerOn");      
    name = name.value;
    localStorage.setItem("gamer", name);
    gamerName.innerHTML = name;
    nameDisplay.remove();
    avatarDisplay.classList.add("open-menujugar");

})
// estos botones cambian los avatares y lo guardan en el storage. Revela la pantalla del juego
bellaBtn.onclick = function () {
    avatarChange.src = avatares[0];
    localStorage.setItem("avatar", avatares[0]);
    avatarDisplay.remove();
    gameDisplay.classList.add("open-container01");

}
chocoBtn.onclick = function () {
    avatarChange.src = avatares[1];
    localStorage.setItem("avatar", avatares[1]);
    avatarDisplay.remove();
    gameDisplay.classList.add("open-container01");
}
lanaBtn.onclick = function () {
    avatarChange.src = avatares[2];
    localStorage.setItem("avatar", avatares[2]);
    avatarDisplay.remove();
    gameDisplay.classList.add("open-container01");
}
mittensBtn.onclick = function () {
    avatarChange.src = avatares[3];
    localStorage.setItem("avatar", avatares[3]);
    avatarDisplay.remove();
    gameDisplay.classList.add("open-container01");
}
nuggetBtn.onclick = function () {
    avatarChange.src = avatares[4];
    localStorage.setItem("avatar", avatares[4]);
    avatarDisplay.remove();
    gameDisplay.classList.add("open-container01");
}
pumpkinBtn.onclick = function () {
    avatarChange.src = avatares[5];
    localStorage.setItem("avatar", avatares[5]);
    avatarDisplay.remove();
    gameDisplay.classList.add("open-container01");
}

// estos botones cambian de color al glaseado
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

//este boton resetea las imagenes de las donas
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
        localStorage.setItem("points", puntaje);
        gamerRanking();
    } else if (puntaje === 200) {
        alert("ganaste!!");
        seconds.innerHTML = secondsbase;
        clearInterval(counter);
        bloquearfunciones();
        localStorage.setItem("points", puntaje);
        gamerRanking();
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



