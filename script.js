let iconos = []
let selecciones = []

generarTablero()

function cargarIconos() {
    iconos = [
        '<i><img class="icon" src="papo.png"></i>',
        '<i><img class="icon" src="charly.png"></i>',
        '<i><img class="icon" src="soda.png"></i>',
        '<i><img class="icon" src="pity 2.png"></i>',
        '<i><img class="icon" src="indio.png"></i>',
        '<i><img class="icon" src="sss.png"></i>',
        '<i><img class="icon" src="LUCA.png"></i>',
        '<i><img class="icon" src="spinetta.png"></i>',
        '<i><img class="icon" src="pelado.png"></i>',
        '<i><img class="icon" src="LA RENGA.png"></i>',
        '<i><img class="icon" src="ciro.png"></i>',
        '<i><img class="icon" src="77.png"></i>'
    ]
}

const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};

const miAudio2=cargarSonido("nuevo_juego.mp3")

function generarTablero() {
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 24; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                </div>
                <div class="cara superior">
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")

}

function reproducir()
{
    miAudio2.play();
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
   
}

const miAudio=cargarSonido("guitar.mp3")

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            miAudio.play();
        }
          
    }, 800);
}