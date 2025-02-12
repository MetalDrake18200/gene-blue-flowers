document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("container");

    // Seleccionamos los botones "Sí" y "No"
    let botonSi = document.querySelector(".boton-si");
    let botonNo = document.querySelector(".boton-no");

    // Verificar si los botones fueron encontrados
    if (!botonSi || !botonNo) {
        console.error("❌ Error: No se encontró uno de los botones.");
        return;
    }

    // Añadir el evento click al botón "No"
    botonNo.addEventListener("click", function () {
        let currentWidth = botonSi.offsetWidth;
        let currentHeight = botonSi.offsetHeight;

        // Aumentar el tamaño del botón "Sí" un 10% cada vez
        botonSi.style.width = currentWidth * 1.5 + "px";
        botonSi.style.height = currentHeight * 1.5 + "px";
        botonSi.style.fontSize = parseFloat(window.getComputedStyle(botonSi).fontSize) * 1.1 + "px";

        // Si el botón "Sí" alcanza el tamaño completo de la pantalla, se detiene el crecimiento
        if (currentWidth >= window.innerWidth || currentHeight >= window.innerHeight) {
            botonSi.style.width = "100vw";
            botonSi.style.height = "100vh";
            botonSi.style.fontSize = "4rem";  // Ajusta el tamaño de la fuente
        }

        // Generar posiciones aleatorias para el botón "No"
        let maxX = window.innerWidth - botonNo.offsetWidth;
        let maxY = window.innerHeight - botonNo.offsetHeight;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        // Aplicar la nueva posición al botón "No"
        botonNo.style.left = `${randomX}px`;
        botonNo.style.top = `${randomY}px`;
        botonNo.classList.add("mover");
    });
});
