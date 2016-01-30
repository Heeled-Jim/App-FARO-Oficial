	$(document).ready(function() {
		$('#return').click(function(evento) {
			$('#back-btn').fadeOut('fast');
				}),
	$(document).ready(function() {
			$('#return').click(function(){
				$('.rightTotal').animate({"margin-left":"100%"}),
				$('#title0').fadeOut('fast');
				});
			});
		

	});
	
	

	$(document).ready(function(){
 		$('#cineclub').click(function(){
		$('#title0').fadeIn('fast'),
    	$("#title0").html("<p>Cineclub</p>");
		});
     
}),
	$(document).ready(function(){
    	$('#cineclub').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    }),
	
	$(document).ready(function() {
		$('#cineclub').click(function(evento) {
			$('#back-btn').fadeIn('fast');
				});
			});			
});
	
$(document).ready(function(){
   $("#cineclub").click(function(evento){
      evento.preventDefault();
	  $('#rightTotal').text('Cargando....');
      $("#rightTotal").load("http://www.farodeoriente.org/prueba/cineclub.html");
   });
});

	$(document).ready(function(){
 		$('#musica').click(function(){
		$('#title0').fadeIn('fast'),
    	$('#title0').html("<p>Música</p>");
 });
});	

	$(document).ready(function(){
    	$('#musica').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    }),
	
	$(document).ready(function() {
		$('#musica').click(function(evento) {
			$('#back-btn').fadeIn('fast');
				});
			});			
});

$(document).ready(function(){
   $("#musica").click(function(evento){
      evento.preventDefault();
	  $('#standard .scroller').text('Cargando....');
      $("#rightTotal").load("http://www.farodeoriente.org/prueba/musica.html");
   });
});

	$(document).ready(function(){
 		$('#especiales').click(function(){
		$('#title0').fadeIn('fast'),
    	$('#title0').html("<p>Especiales</p>");
 });
});	

	$(document).ready(function(){
    	$('#especiales').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    }),
	
	$(document).ready(function() {
		$('#especiales').click(function(evento) {
			$('#back-btn').fadeIn('fast');
				});
			});			
});

$(document).ready(function(){
   $('#especiales').click(function(evento){
      evento.preventDefault();
	  $('#rightTotal').text('Cargando....');
      $("#rightTotal").load("http://www.farodeoriente.org/prueba/especial.html");
   });
});

	$(document).ready(function(){
 		$('#infantil').click(function(){
		$('#title0').fadeIn('fast'),
    	$('#title0').html("<p>Faro infantil</p>");
 });
});	

	$(document).ready(function(){
    	$('#infantil').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    }),
	
	$(document).ready(function() {
		$('#infantil').click(function(evento) {
			$('#back-btn').fadeIn('fast');
				});
			});			
});

$(document).ready(function(){
   $('#infantil').click(function(evento){
      evento.preventDefault();
	  $('#rightTotal').text('Cargando....');
      $("#rightTotal").load("http://www.farodeoriente.org/prueba/infantil.html");
   });
});

	$(document).ready(function(){
 		$('#literatura').click(function(){
		$('#title0').fadeIn('fast'),
    	$('#title0').html("<p>Literatura</p>");
 });
});	

	$(document).ready(function(){
    	$('#literatura').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    }),
	
	$(document).ready(function() {
		$('#literatura').click(function(evento) {
			$('#back-btn').fadeIn('fast');
				});
			});			
});

$(document).ready(function(){
   $('#literatura').click(function(evento){
      evento.preventDefault();
	  $('#rightTotal').text('Cargando....');
      $("#rightTotal").load("http://www.farodeoriente.org/prueba/literatura.html");
   });
});

	$(document).ready(function(){
 		$('#galeria').click(function(){
		$('#title0').fadeIn('fast'),
    	$('#title0').html("<p>Galería</p>");
 });
});	

	$(document).ready(function(){
    	$('#galeria').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    }),
	
	$(document).ready(function() {
		$('#galeria').click(function(evento) {
			$('#back-btn').fadeIn('fast');
				});
			});			
});

$(document).ready(function(){
   $('#galeria').click(function(evento){
      evento.preventDefault();
	  $('#rightTotal').text('Cargando....');
      $("#rightTotal").load("http://www.farodeoriente.org/prueba/galerias.html");
   });
});

	$(document).ready(function(){
 		$('#artes').click(function(){
		$('#title0').fadeIn('fast'),
    	$('#title0').html("<p>Artes escénicas</p>");
 });
});	

	$(document).ready(function(){
    	$('#artes').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    }),
	
	$(document).ready(function() {
		$('#artes').click(function(evento) {
			$('#back-btn').fadeIn('fast');
				});
			});			
});

$(document).ready(function(){
   $('#artes').click(function(evento){
      evento.preventDefault();
	  $('#rightTotal').text('Cargando....');
      $("#rightTotal").load("http://www.farodeoriente.org/prueba/artes-escenicas.html");
   });
});
/*
	$(document).ready(function(){
 		$('#clubhouse').click(function(){
		$('#title0').fadeIn('fast'),
    	$('#title0').html("<p>Clubhouse</p>");
 });
});	

	$(document).ready(function(){
    	$('#clubhouse').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    }),
	
	$(document).ready(function() {
		$('#clubhouse').click(function(evento) {
			$('#back-btn').fadeIn('fast');
				});
			});			
});

$(document).ready(function(){
   $('#clubhouse').click(function(evento){
      evento.preventDefault();
	  $('#rightTotal').text('Cargando....');
      $("#rightTotal").load("http://www.farodeoriente.org/prueba/clubhouse.html");
   });
});

*/
$(document).ready(function(){
   var refreshId = setInterval('load-async', 3000);
   $.ajaxSetup({ cache: false });
 });
 
 $(document).ready(function(){
	  $('#contenido').text('Cargando....');
      $("#contenido").load("http://www.farodeoriente.org/prueba/contenido.html");
   });
