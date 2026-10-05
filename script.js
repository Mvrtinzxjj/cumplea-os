/* =========================================
   BOTÓN DE INICIO
========================================= */

const botonInicio =
    document.getElementById("botonInicio");

const carta =
    document.getElementById("carta");


botonInicio.addEventListener("click", () => {

    carta.classList.remove("oculto");

    carta.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    crearCorazones();

});


/* =========================================
   BOTÓN DE SORPRESA
========================================= */

const botonSorpresa =
    document.getElementById("botonSorpresa");

const mensajeSorpresa =
    document.getElementById("mensajeSorpresa");


botonSorpresa.addEventListener("click", () => {

    mensajeSorpresa.classList.remove("oculto");

    botonSorpresa.style.display = "none";

    crearMuchosCorazones();

    mensajeSorpresa.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* =========================================
   CREAR CORAZONES
========================================= */

function crearCorazones() {

    const contenedor =
        document.querySelector(".hearts");

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    contenedor.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 9000);

}


/* =========================================
   MUCHOS CORAZONES
========================================= */

function crearMuchosCorazones() {

    for (
        let i = 0;
        i < 30;
        i++
    ) {

        setTimeout(() => {

            crearCorazones();

        }, i * 100);

    }

}


/* =========================================
   CORAZONES AUTOMÁTICOS
========================================= */

setInterval(() => {

    crearCorazones();

}, 1500);