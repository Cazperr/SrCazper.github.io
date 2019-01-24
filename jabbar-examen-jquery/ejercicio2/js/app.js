$(document).ready(function(){
    $(".perros").show();
    $(".gatos").show();
    $(".peces").show();

    $("#btn-perros").click(function(){
        $(".perro").show();
        $(".gato").hide();
        $(".pez").hide();
        $("#btn-perros").addClass('btn-success');
        $("#btn-gatos").removeClass('btn-success');
        $("#btn-peces").removeClass('btn-success');
    });

    $("#btn-gatos").click(function(){
        $(".perro").hide();
        $(".gato").show();
        $(".pez").hide();
        $("#btn-gatos").addClass('btn-success');
        $("#btn-peces").removeClass('btn-success');
        $("#btn-perros").removeClass('btn-success');

    });

    $("#btn-peces").click(function(){
        $(".perro").hide();
        $(".gato").hide();
        $(".pez").show();
        $("#btn-peces").addClass('btn-success');
        $("#btn-perros").removeClass('btn-success');
        $("#btn-gatos").removeClass('btn-success');
    });

    $("#btn-eliminar-filtros").click(function(){
        $(".perro").show();
        $(".gato").show();
        $(".pez").show();
        $("#btn-peces").removeClass('btn-success');
        $("#btn-perros").removeClass('btn-success');
        $("#btn-gatos").removeClass('btn-success');
    });
});