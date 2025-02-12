// Seleccionamos el elemento <audio> y el contenedor donde aparecerán las letras
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array con las nuevas líneas de la canción y el tiempo en que deben aparecer
var lyricsData = [
  { text: "Tengo miedo que la sangre se evapore", time: 2, duration: 3},
  { text: "Porque la tengo caliente", time: 5, duration: 3}, // Se muestra junto a la anterior
  { text: "Tengo miedo de ver alucinaciones", time: 9, duration: 3},
  { text: "Como si tuviera fiebre", time: 12.1, duration: 4},
  { text: "Tengo miedo que este montón de aspirinas", time: 17, duration: 4},
  { text: "No me estén haciendo efecto", time: 19, duration: 5 },
  { text: "Hace tiempo no me paro de la cama", time: 24, duration: 4.5},
  { text: "Y no es porque me sienta enfermo", time: 26.5, duration: 3.},
  { text: "Es porque las sábanas huelen a ti", time: 30.2, duration: 4},
  { text: "Y mi almohada pregunta que cuándo es que vas a venir", time: 34.2, duration: 6.8},
  { text: "Si ven una ambulancia o un policía", time: 40.5, duration: 3.7},
  { text: "Seguro que están yendo pa' la casa mía", time: 45, duration: 4},
  { text: "Porque mi corazón está que se revienta", time: 48.2, duration: 3.6},
  { text: "Y la presión la traigo por 180", time: 51.2, duration: 4.2},
  { text: "Y si escuchan pasar un camión de bomberos", time: 56, duration: 4},
  { text: "Fue que yo los llamé porque estoy que me quemo", time: 59.2, duration: 4.5},
  { text: "Porque mi cama después de esa noche cuando tú viniste", time: 63.2, duration: 7},
  { text: "Sigue prendida en fuego", time: 71, duration: 3},
  { text: "(prendida en fuego, eh)", time: 74, duration: 2},
];

// Variable para almacenar las últimas líneas mostradas
var lastLines = [];

// Función para actualizar las letras en sincronización con la canción
function updateLyrics() {
  var time = Math.floor(audio.currentTime); // Obtiene el tiempo actual redondeado

  // Filtra todas las líneas que deben mostrarse en este momento
  var currentLines = lyricsData.filter(line => time >= line.time && time < line.time + (line.duration || 5));

  // Si hay nuevas líneas y son diferentes a las anteriores
  var newText = currentLines.map(line => line.text).join("<br>"); // Une varias líneas con salto de línea
  if (newText !== lastLines.join("<br>")) {
    lyrics.style.opacity = 0; // Oculta antes de actualizar

    setTimeout(() => {
      lyrics.innerHTML = newText; // Muestra todas las líneas activas
      lyrics.style.opacity = 1; // Aplica efecto fade-in
    }, 100);

    lastLines = newText.split("<br>"); // Actualiza las últimas líneas mostradas
  } else if (currentLines.length === 0) {
    lyrics.style.opacity = 0; // Oculta si no hay letras en ese momento
  }
}

// Se ejecuta cada 500ms para mejorar la sincronización sin afectar el rendimiento
setInterval(updateLyrics, 500);

// 🔹 FUNCIÓN PARA OCULTAR EL TÍTULO TRAS 216 SEGUNDOS (3 min 36 seg)
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");

  // Aseguramos que el título inicie visible antes de hacer el fade-out
  titulo.style.opacity = "1";

  // Aplicamos la transición de 90 segundos
  setTimeout(() => {
    titulo.style.opacity = "0"; // Inicia el desvanecimiento
  }, 100); // Pequeño retraso para asegurar la ejecución

  // Luego de 90 segundos, ocultamos completamente el título
  setTimeout(() => {
    titulo.style.display = "none";
  }, 90100); // 90s + pequeño margen de seguridad
}

// Espera 216 segundos (3 min 36 seg) antes de comenzar a ocultar el título
setTimeout(ocultarTitulo, 216000);



