let contador = 0;

//Metas -------
const meta1=10;
const meta2=50;
const meta3=250;
//-------

//Botón y barra -------
const marcador=document.getElementById("marcador");
const boton = document.getElementById("contadorBtn");
const barraAvance=document.getElementById("barraAvance")
//-------

//Script principal -------
boton.addEventListener("click", () =>{

   if(contador<meta3){
    contador++;
    marcador.textContent="Llevas " +contador+" clicks.";

        if(contador<=meta1){
            const avance=(contador/meta1)*100;
            barraAvance.style.width=avance+"%"
        } else if(contador<=meta2){
            const avance=((contador-meta1)/(meta2-meta1)*100);
            barraAvance.style.width=avance+"%";
        } else if(contador<=meta3){
            const avance=((contador-meta2)/(meta3-meta2)*100);
            barraAvance.style.width=avance+"%";

        }
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