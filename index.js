// index.js
/* */
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('navPc');
  const abrir = document.getElementById('abrir');
  const cerrar = document.getElementById('cerrar');
  const nav1=document.getElementById("navMovil");

  desplegarMenu('navMovil')
});
function desplegarMenu(menu){
  if(menu=='navMovil'){
    var movil=document.getElementById('navMovil');
    movil.style.display=(movil.style.display==='none')? 'block': 'none' ;
    nav.classList.add('visible');
  }
}

/* */

document.addEventListener('DOMContentLoaded', function() {
  const btnGenerarFrase = document.getElementById('btn-generar');
  const fraseContainer = document.getElementById('frase');

  btnGenerarFrase.addEventListener('click', function() {
      const frases = [
          "Lorem ipsum dolor sit amet.",
          "Consectetur adipiscing elit.",
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Ut enim ad minim veniam.",
          "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ];

      const randomIndex = Math.floor(Math.random() * frases.length);
      const fraseAleatoria = frases[randomIndex];

      fraseContainer.textContent = fraseAleatoria;
  });
});
