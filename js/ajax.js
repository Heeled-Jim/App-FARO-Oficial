$.ajax({
    url: 'http://www.farodeoriente.com/prueba/',
    data: {
       type: 'highway',
       id: load-async
    },
    cache: false, // es 'true' por defecto a menos que type sea 'jsonp' o 'script'
    type: 'get',
    success: function(data){
        alert('data');
    }
});