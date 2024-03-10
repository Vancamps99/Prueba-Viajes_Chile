
//smooth scroll navbar //
$(document).ready(function(){
    // Función para desplazamiento suave hacia secciones
    $('a.nav-link').on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 200, function(){
          window.location.hash = hash;
        });
      }
    });
  });