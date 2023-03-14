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


// Asignación de valores para la música de fondo
let musicBg = document.getElementById("music_bg");
let musicBtn = document.getElementById("buttonSound");
let musicState = document.getElementById("audioOn");

// función para mutear música de fondo
musicBtn.onclick = function () {
    if (musicBg.loop) {
        musicBg.muted = true;
        musicBg.loop = false;
        musicState.src = "../img/Mute.png";
    } else {
        musicBg.loop = true;
        musicBg.muted = false;
        musicState.src = "../img/Voice.png";

    };
}
//función para los sonidos
function reproducirSonido(nombreSonido) {
    var sonido = new Audio('../sounds/' + nombreSonido + '.mp3');
    sonido.play();
}

// este boton captura el nombre del jugador
nameBtn.addEventListener("click", () => {
    let name = document.getElementById("gamerOn");
    name = name.value;
    localStorage.setItem("gamer", name);
    gamerName.innerHTML = name;
    nameDisplay.remove();
    avatarDisplay.classList.add("open-menujugar");
    reproducirSonido('pop');

})
// esta funcion cambia los avatares y lo guarda en el storage. Revela la pantalla del juego
function avatarSelect(avatarClick) {
    avatarChange.src = avatarClick;
    localStorage.setItem("avatar", avatarClick);
    avatarDisplay.remove();
    gameDisplay.classList.add("open-container01");
    reproducirSonido('pop');
}
// asignamos el cambio de avatar en cada botón
bellaBtn.onclick = () => avatarSelect(avatares[0]);
chocoBtn.onclick = () => avatarSelect(avatares[1]);
lanaBtn.onclick = () => avatarSelect(avatares[2]);
mittensBtn.onclick = () => avatarSelect(avatares[3]);
nuggetBtn.onclick = () => avatarSelect(avatares[4]);
pumpkinBtn.onclick = () => avatarSelect(avatares[5]);

//funcion que cambia de color al glaseado
function colorSelect(colorClick) {
    imgchange.src = colorClick;
    reproducirSonido('whoosh');
}

// asignamos el cambio de glase en cada botón
violetBtn.onclick = () => colorSelect(colores[0]);
pinkBtn.onclick = () => colorSelect(colores[1]);
skyblueBtn.onclick = () => colorSelect(colores[2]);
greenBtn.onclick = () => colorSelect(colores[3]);
yellowBtn.onclick = () => colorSelect(colores[4]);
sprinklesBtn.onclick = function () {
    imgchange1.src = ingrediente[0];
    reproducirSonido('whoosh');
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

//array para jugadores (ranking)
const players = [];

const rankingContainer = document.getElementById("ranking_container");

// obtención de ranking a través de una promesa
fetch('../js/data.json')
    .then((response) => response.json())
    .then((data) => {
        players.push(...data);
    })
    .catch(error => console.error(error))

// imprime en el html a los jugadores del ranking
function addData(array) {
    array.sort((a, b) => {
        if (a.point > b.point) {
            return -1;
        } else if (a.point < b.point) {
            return 1;
        } else {
            return 0;
        }
    });

    array.forEach(item => {
        div = document.createElement("div");
        div.innerHTML = `<div class="ranking_cards">
        <img src="${item.avatar}" alt="" class="gamer_avatar">
        <div class="textranking"><p class="gamer_name">${item.rankName}</p></div>
        <p class="gamer_points">${item.point}</p>
        </div>`;
        rankingContainer.appendChild(div);
    })
}

//constructor del jugador
class Player {
    constructor(avatar, rankName, point) {
        this.avatar = avatar;
        this.rankName = rankName;
        this.point = point;
    }
}

// funcion para aplicar resultados en el ranking
function gamerRanking() {
    gameDisplay.remove();

    let avatarGamer = localStorage.getItem("avatar");
    let nameGamer = localStorage.getItem("gamer");
    let pointsGamer = localStorage.getItem("points");

    newPlayer = new Player(avatarGamer, nameGamer, pointsGamer);
    players.push(newPlayer);
    addData(players);
    rankingContainer.classList.add("open-ranking");
    musicBg.muted = true;
    musicBg.loop = false;
}

//funcion tiempo cuenta regresiva
let secondsbase = 30;
let counter;

function actualizarTiempo(secondsbase) {
    counter = setInterval(timer, 100);
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
        reproducirSonido('success');
    } else {
        resetBtn.onclick();
        wrongbase++;
        lifesbase--;
        lifesdown();
        reproducirSonido('wrong');
    }
    startGame();
}

// funcion de sweetAlerts para cuando el usuario gana o pierde
function showSweetAlert(title, text, imageUrl, imageAlt) {
    Swal.fire({
        title: title,
        text: text,
        imageUrl: imageUrl,
        imageWidth: 186.08,
        imageHeight: 200,
        imageAlt: imageAlt,
    });
}

// función base para resetear el tiempo, bloquear los botones y guardar puntaje
function gameInfo (){
    seconds.innerHTML = secondsbase;
    clearInterval(counter);
    bloquearfunciones();
    localStorage.setItem("points", puntaje);
    gamerRanking();
}

// funcion para aplicar el cambio de color a la dona, resetear el temporizador y comparar la selección del usuario
function startRound(color, ingredient) {
    baseChange.src = color;
    baseExtraChange.src = ingredient;
    clearInterval(counter);
    actualizarTiempo(secondsbase);
    addBtn.onclick = () => userSelection();
}

// función principal del juego, generador random de combinaciones
startGame = function () {
    
    if (lifesbase === 0) {
        gameInfo();
        showSweetAlert('¡Perdiste!', 'La próxima será mejor', "../img/SadKitten.png", "Gatito con cara triste");
        reproducirSonido('gameover');

    } else if (puntaje === 2000) {
        gameInfo();
        showSweetAlert('¡Ganaste!', 'Buen trabajo', "../img/logo.png", "Gatito con cara feliz");
        reproducirSonido('win');
    } else {
        reproducirSonido('pop');
        startBtn.disabled = true;
        let generaProblema = Math.round(Math.random() * 10);

        switch (generaProblema) {
            case 0:
                startRound(colores[0], ingrediente[1]);
                break;
            case 1:
                startRound(colores[1], ingrediente[1]);
                break;
            case 2:
                startRound(colores[2], ingrediente[1]);
                break;
            case 3:
                startRound(colores[3], ingrediente[1]);
                break;
            case 4:
                startRound(colores[4], ingrediente[1]);
                break;
            case 5:
                startRound(ingrediente[1], ingrediente[0]);
                break;
            case 6:
                startRound(colores[0], ingrediente[0]);
                break;
            case 7:
                startRound(colores[1], ingrediente[0]);
                break;
            case 8:
                startRound(colores[2], ingrediente[0]);
                break;
            case 9:
                startRound(colores[3], ingrediente[0]);
                break;
            case 10:
                startRound(colores[4], ingrediente[0]);
                break;
            default:
                alert("Error 🙀");
                break;
        }
    }
}

// función para comenzar el juego
startBtn.onclick = () => startGame();
