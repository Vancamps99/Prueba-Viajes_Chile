//smooth scroll navbar //
$(document).ready(function () {
  // Función para desplazamiento suave hacia secciones
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        200,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Función para mostrar el mensaje de éxito
function mostrarMensajeEnviado(event) {
  event.preventDefault(); // Evitar el envío del formulario
  var mensajeEnviado = document.getElementById("mensaje-enviado");
  mensajeEnviado.style.display = "block";
}

// Agregar evento de clic al botón de enviar
var botonEnviar = document.querySelector("button[type='submit']");
botonEnviar.addEventListener("click", mostrarMensajeEnviado);
