function donas(color, ingrediente, problema){
    this.color = color;
    this.ingrediente = ingrediente;
    this.problema = problema;
}
const donasCeleste = new donas("celeste", "sin chispas", "Tenés que hacer una dona celeste sin chispas");
const donasRosa = new donas("rosa", "sin chispas", "Tenés que hacer una dona rosa sin chispas");
const donasVioleta = new donas("violeta", "sin chispas", "Tenés que hacer una dona violeta sin chispas");
const donasAmarillo = new donas("amarilla", "sin chispas", "Tenés que hacer una dona amarilla sin chispas");
const donasVerde = new donas("verde", "sin chispas", "Tenés que hacer una dona verde sin chispas");

const donasSolaExtra = new donas("sin glase", "con chispas", "Tenés que hacer una dona sin glase con chispas");
const donasCelesteExtra = new donas("celeste", "con chispas", "Tenés que hacer una dona celeste con chispas");
const donasRosaExtra = new donas("rosa", "con chispas", "Tenés que hacer una dona rosa con chispas");
const donasVioletaExtra = new donas("violeta", "con chispas", "Tenés que hacer una dona violeta con chispas");
const donasAmarilloExtra = new donas("amarilla", "con chispas", "Tenés que hacer una dona amarilla con chispas");
const donasVerdeExtra = new donas("verde", "con chispas", "Tenés que hacer una dona verde con chispas");


const suma = (a, b) => a + b;

let mensajeBienvenida = `Te doy la bienvenida al juego para decorar donas`;
let respuestaCorrecta = `¡Muy bien!`;
let respuestaIncorrecta = `¡La próxima será mejor!`;
let juego = 0;
let puntaje = 0;


alert(mensajeBienvenida);

while (juego < 8){
    let generaProblema = Math.round(Math.random()* 11);

    if (generaProblema === 1){
        alert(donasCeleste.problema);
        let donaColor = prompt("Ingrese el color de la dona");
        let donaIngrediente = prompt("Ingrese ingrediente extra");

        if (donaColor === donasCeleste.color && donaIngrediente === donasCeleste.ingrediente){
            alert(respuestaCorrecta);
            puntaje+= 100;         
        } else {alert(respuestaIncorrecta)}
    } else if (generaProblema === 2){
        alert(donasRosa.problema);
        let donaColor = prompt("Ingrese el color de la dona");
        let donaIngrediente = prompt("Ingrese ingrediente extra");

        if (donaColor === donasRosa.color && donaIngrediente === donasRosa.ingrediente){
            alert(respuestaCorrecta);
            puntaje+= 100;   
        } else {alert(respuestaIncorrecta)}
    } else if (generaProblema === 3){
        alert(donasVioleta.problema);    
        let donaColor = prompt("Ingrese el color de la dona");
        let donaIngrediente = prompt("Ingrese ingrediente extra");

        if (donaColor === donasVioleta.color && donaIngrediente === donasVioleta.ingrediente){
            alert(respuestaCorrecta);
            puntaje+= 100;   
        } else {alert(respuestaIncorrecta)}
    }   else if (generaProblema === 4){
        alert(donasAmarillo.problema);
        let donaColor = prompt("Ingrese el color de la dona");
        let donaIngrediente = prompt("Ingrese ingrediente extra");

        if (donaColor === donasAmarillo.color && donaIngrediente === donasAmarillo.ingrediente){
            alert(respuestaCorrecta);
            puntaje+= 100;   
        } else {alert(respuestaIncorrecta)}
    } else if (generaProblema === 5){
        alert(donasVerde.problema);    
        let donaColor = prompt("Ingrese el color de la dona");
        let donaIngrediente = prompt("Ingrese ingrediente extra");

        if (donaColor === donasVerde.color && donaIngrediente === donasVerde.ingrediente){
            alert(respuestaCorrecta);
            puntaje+= 100;   
        } else {alert(respuestaIncorrecta)}
    }else if (generaProblema === 6){
        alert(donasSolaExtra.problema);
        let donaColor = prompt("Ingrese el color de la dona");
        let donaIngrediente = prompt("Ingrese ingrediente extra");

        if (donaColor === donasSolaExtra.color && donaIngrediente === donasSolaExtra.ingrediente){
            alert(respuestaCorrecta);
            puntaje+= 100;   
        } else {alert(respuestaIncorrecta)}
    } else if (generaProblema === 7){
        alert(donasCelesteExtra.problema);    
        let donaColor = prompt("Ingrese el color de la dona");
        let donaIngrediente = prompt("Ingrese ingrediente extra");

        if (donaColor === donasCelesteExtra.color && donaIngrediente === donasCelesteExtra.ingrediente){
            alert(respuestaCorrecta);
            puntaje+= 100;   
        } else {alert(respuestaIncorrecta)}
    }else if (generaProblema === 8){
        alert(donasRosaExtra.problema);
        let donaColor = prompt("Ingrese el color de la dona");
        let donaIngrediente = prompt("Ingrese ingrediente extra");

        if (donaColor === donasRosaExtra.color && donaIngrediente === donasRosaExtra.ingrediente){
            alert(respuestaCorrecta);
            puntaje+= 100;   
        } else {alert(respuestaIncorrecta)}
    } else if (generaProblema === 9){
        alert(donasVioletaExtra.problema);    
        let donaColor = prompt("Ingrese el color de la dona");
        let donaIngrediente = prompt("Ingrese ingrediente extra");

        if (donaColor === donasVioletaExtra.color && donaIngrediente === donasVioletaExtra.ingrediente){
            alert(respuestaCorrecta);
            puntaje+= 100;   
        } else {alert(respuestaIncorrecta)}
    } else if (generaProblema === 10){
        alert(donasAmarilloExtra.problema);    
        let donaColor = prompt("Ingrese el color de la dona");
        let donaIngrediente = prompt("Ingrese ingrediente extra");

        if (donaColor === donasAmarilloExtra.color && donaIngrediente === donasAmarilloExtra.ingrediente){
            alert(respuestaCorrecta);
            puntaje+= 100;   
        } else {alert(respuestaIncorrecta)}
    } else if (generaProblema === 11){
        alert(donasVerdeExtra.problema);    
        let donaColor = prompt("Ingrese el color de la dona");
        let donaIngrediente = prompt("Ingrese ingrediente extra");

        if (donaColor === donasVerdeExtra.color && donaIngrediente === donasVerdeExtra.ingrediente){
            alert(respuestaCorrecta);
            puntaje+= 100;   
        } else {alert(respuestaIncorrecta)}
    }
    juego++;
    generaProblema.reset;
}

alert(`Tu resultado es de ${puntaje}`);







