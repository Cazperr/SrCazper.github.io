$(document).ready(function(){   
    $("#foto").hide(); 

    $("#registro").submit(function(e){

        e.preventDefault();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var anno = $("#annos").val();
        $(".card-title").text(nombre + ' ' + apellido);
        var edad = 2019 - anno;
        $(".card-text").text(edad + " años");
        $("#foto").show();
        
    }); 
});


