function crearCorazon() {
    const corazon = document.createElement("div");

    corazon.classList.add("heart");
    corazon.textContent = "💞";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 6000);
}

setInterval(crearCorazon, 800);
function actualizarEdad() {
    const nacimiento = new Date(2008, 3, 26, 0, 0, 0);
    const ahora = new Date();

    let años = ahora.getFullYear() - nacimiento.getFullYear();
    let meses = ahora.getMonth() - nacimiento.getMonth();
    let dias = ahora.getDate() - nacimiento.getDate();

    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            0
        ).getDate();

        dias += ultimoMes;
    }

    if (meses < 0) {
        años--;
        meses += 12;
    }

    const nacimientoAño = new Date(
        ahora.getFullYear(),
        ahora.getMonth(),
        ahora.getDate(),
        nacimiento.getHours(),
        nacimiento.getMinutes(),
        nacimiento.getSeconds()
    );

    if (ahora < nacimientoAño) {
        años--;
    }

    const ultimoCumpleaños = new Date(
        ahora.getFullYear() - (ahora < nacimientoAño ? 1 : 0),
        3,
        26,
        0,
        0,
        0
    );

    const diferencia = ahora - ultimoCumpleaños;

    const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
    const segundos = Math.floor(diferencia / 1000) % 60;

    document.getElementById("contador-edad").textContent =
        `${años} años, ${meses} meses, ${dias} días, ` +
        `${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}

actualizarEdad();
setInterval(actualizarEdad, 1000);
function actualizarRelacion() {
    const inicio = new Date(2026, 2, 23, 19, 23, 0);
    const ahora = new Date();

    const diferencia = ahora - inicio;

    if (diferencia < 0) {
        document.getElementById("contador-relacion").textContent =
            "Nuestra historia todavía no ha comenzado 💞";
        return;
    }

    let años = ahora.getFullYear() - inicio.getFullYear();
    let meses = ahora.getMonth() - inicio.getMonth();

    if (ahora.getDate() < inicio.getDate()) {
        meses--;
    }

    if (meses < 0) {
        años--;
        meses += 12;
    }

    const ultimoAniversario = new Date(
        inicio.getFullYear() + años,
        inicio.getMonth() + meses,
        inicio.getDate(),
        inicio.getHours(),
        inicio.getMinutes(),
        inicio.getSeconds()
    );

    const tiempo = ahora - ultimoAniversario;

    const dias = Math.floor(tiempo / (1000 * 60 * 60 * 24));
    const horas = Math.floor(tiempo / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(tiempo / (1000 * 60)) % 60;
    const segundos = Math.floor(tiempo / 1000) % 60;

    document.getElementById("contador-relacion").textContent =
        `${años} años, ${meses} meses, ${dias} días, ` +
        `${horas} horas, ${minutos} minutos y ${segundos} segundos 💞`;
}

actualizarRelacion();
setInterval(actualizarRelacion, 1000);
function actualizarAniversario() {
    const aniversario = new Date(2027, 2, 23, 19, 23, 0);
    const ahora = new Date();

    const diferencia = aniversario - ahora;

    if (diferencia <= 0) {
        document.getElementById("contador-aniversario").textContent =
            "¡Feliz primer aniversario! 💞🎀";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
    const segundos = Math.floor(diferencia / 1000) % 60;

    document.getElementById("contador-aniversario").textContent =
        `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos 💞`;
}

actualizarAniversario();
setInterval(actualizarAniversario, 1000);
function animarSecciones() {
    const secciones = document.querySelectorAll("section");

    secciones.forEach((seccion) => {
        const posicion = seccion.getBoundingClientRect();

        if (posicion.top < window.innerHeight - 100) {
            seccion.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", animarSecciones);

animarSecciones();
const frasesAmor = [
    "Te amo 💞",
    "Mi Taki 🎀",
    "Mi ratoncita 🐭",
    "Mi estrellita ✨",
    "Mi princesa 💗",
    "Mi bebé 💞",
    "Eres especial para mí 🌸",
    "Me haces sonreír 😊",
    "Te quiero muchísimo 💕",
    "Siempre contigo 💞",
    "Eres mi persona favorita 🎀",
    "Gracias por estar conmigo 🌷",
    "Me encanta tu forma de ser 💗",
    "Amo nuestras locuras 😂",
    "Amo nuestras bromas 💞",
    "Amo nuestros recuerdos 📸",
    "Nuestro lugar 🌙",
    "Nuestra historia 📖",
    "Hello Kitty 🎀",
    "Mi pequeña estrella ✨",
    "Eres increíble 💕",
    "Qué bonito encontrarte 💗",
    "Te elegiría otra vez 💞",
    "Un recuerdo más contigo 🌸",
    "Te amo más que ayer y menos que mañana 💞"
];

let ultimaLluvia = 0;

function lluviaDeFrases() {
    const ahora = Date.now();

    // Evita que se creen lluvias infinitas demasiado rápido
    if (ahora - ultimaLluvia < 800) {
        return;
    }

    ultimaLluvia = ahora;

    for (let i = 0; i < 1; i++) {
        const frase = document.createElement("div");

        frase.classList.add("frase-lluvia");

        frase.textContent =
            frasesAmor[Math.floor(Math.random() * frasesAmor.length)];

        frase.style.left = Math.random() * 100 + "vw";
        frase.style.animationDelay = Math.random() * 1.5 + "s";

        document.body.appendChild(frase);

        setTimeout(() => {
            frase.remove();
        }, 4500);
    }
}

window.addEventListener("scroll", lluviaDeFrases);