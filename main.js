let contador = 0;

//Metas -------
const meta1 = 10;
const meta2 = 15;
const meta3 = 20;
//-------

//Botón y barra -------
const marcador = document.getElementById("marcador");
const boton = document.getElementById("contadorBtn");
const barraAvance = document.getElementById("barraAvance");
//-------

// Insignias -------
const insignias = [
  "images/insignia0.png", // Insignia inicial (puede ser una imagen vacía o de inicio)
  "images/insignia1.png", // Insignia para la meta 1
  "images/insignia2.png", // Insignia para la meta 2
  "images/insignia3.png", // Insignia para la meta 3
];

// Elementos del DOM -------
const insignia = document.getElementById("insignia");
const siguienteMetaTexto = document.getElementById("siguienteMetaTexto");

// Función para actualizar la insignia y el texto de la siguiente meta
function actualizarInsigniaYTexto(metaAlcanzada) {
  if (metaAlcanzada === meta1) {
    insignia.src = insignias[1]; // Cambia a la insignia de la meta 1
    siguienteMetaTexto.textContent = "Siguiente meta: 50"; // Actualiza el texto
  } else if (metaAlcanzada === meta2) {
    insignia.src = insignias[2]; // Cambia a la insignia de la meta 2
    siguienteMetaTexto.textContent = "Siguiente meta: 250"; // Actualiza el texto
  } else if (metaAlcanzada === meta3) {
    insignia.src = insignias[3]; // Cambia a la insignia de la meta 3
    siguienteMetaTexto.textContent = "¡Meta final alcanzada!"; // Mensaje final
  }
}

//Script principal -------
boton.addEventListener("click", () => {
  if (contador < meta3) {
    contador++;
    marcador.textContent = "Llevas " + contador + " clicks.";

    if (contador <= meta1) {
      const avance = (contador / meta1) * 100;
      barraAvance.style.width = avance + "%";
    } else if (contador <= meta2) {
      const avance = ((contador - meta1) / (meta2 - meta1)) * 100;
      barraAvance.style.width = avance + "%";
    } else if (contador <= meta3) {
      const avance = ((contador - meta2) / (meta3 - meta2)) * 100;
      barraAvance.style.width = avance + "%";
    }
  }
  if (contador === meta3) {
    marcador.textContent = "¡Meta final alcanzada!";
    boton.disabled = true;
  }

  // Verificar y actualizar insignias al alcanzar una meta
  if (contador === meta1 || contador === meta2 || contador === meta3) {
    actualizarInsigniaYTexto(contador);
  }

  if (contador === meta3) {
    marcador.textContent = "¡Meta final alcanzada!";
    boton.disabled = true;
  }
  /*avisos victoria + boton disabled <(feature aplicado al funcionamiento base)
if (contador === meta1) {
        alert("¡Primera meta alcanzada! La barra se reiniciará para la segunda meta.");
    } else if (contador === meta2) {
        alert("¡Segunda meta alcanzada! La barra se reiniciará para la tercera meta.");
    } else if (contador === meta3) {
        marcador.textContent = "¡Meta final alcanzada!"; // Mensaje final
        boton.disabled = true; // Desactivar el botón
    }
*/
});

//boton animado

const imageElement = document.getElementById("botonAnimado");
const originalSrc = "images/botonLike1.png";
const alternateSrc = "images/botonLike2.png";

imageElement.addEventListener("click", function () {
  // Cambia la imagen al estado alternativo
  imageElement.src = alternateSrc;

  // Después de un tiempo (por ejemplo, 1000 ms = 1 segundo), vuelve a la imagen original
  setTimeout(function () {
    imageElement.src = originalSrc;
  }, 100); // 1000 milisegundos = 1 segundo

  if (contador < meta3) {
    contador++;
    marcador.textContent = "Llevas " + contador + " clicks.";

    if (contador <= meta1) {
      const avance = (contador / meta1) * 100;
      barraAvance.style.width = avance + "%";
    } else if (contador <= meta2) {
      const avance = ((contador - meta1) / (meta2 - meta1)) * 100;
      barraAvance.style.width = avance + "%";
    } else if (contador <= meta3) {
      const avance = ((contador - meta2) / (meta3 - meta2)) * 100;
      barraAvance.style.width = avance + "%";
    }
  }
  if (contador === meta3) {
    marcador.textContent = "¡Meta final alcanzada!";
    boton.disabled = true;
  }

  // Verificar y actualizar insignias al alcanzar una meta
  if (contador === meta1 || contador === meta2 || contador === meta3) {
    actualizarInsigniaYTexto(contador);
  }

  if (contador === meta3) {
    marcador.textContent = "¡Felicidades!";
    boton.disabled = true;
  }
});
