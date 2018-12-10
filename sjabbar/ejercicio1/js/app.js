function mostrarTextoVerde (){
    var BuenasNoticias = document.getElementById("buenas-noticias");
    var MalasNoticias = document.getElementById("malas-noticias")
    var RegularesNoticias = document.getElementById("regulares-noticias")
    if(BuenasNoticias.style.display = "none"){
        BuenasNoticias.style.display = "flex";
    }   if(MalasNoticias.style.display = "flex") {
        MalasNoticias.style.display = "none";
    }   if(RegularesNoticias.style.display = "flex") {
        RegularesNoticias.style.display = "none";
    }
}
function mostrarTextoRojo (){
    var BuenasNoticias = document.getElementById("buenas-noticias");
    var MalasNoticias = document.getElementById("malas-noticias")
    var RegularesNoticias = document.getElementById("regulares-noticias")
    if(MalasNoticias.style.display = "none"){
        MalasNoticias.style.display = "flex";
    }   if(BuenasNoticias.style.display = "flex") {
        BuenasNoticias.style.display = "none";
    }   if(RegularesNoticias.style.display = "flex") {
        RegularesNoticias.style.display = "none";
    }
}
function mostrarTextoAmarillo (){
    var BuenasNoticias = document.getElementById("buenas-noticias");
    var MalasNoticias = document.getElementById("malas-noticias")
    var RegularesNoticias = document.getElementById("regulares-noticias")
    if(RegularesNoticias.style.display = "none"){
        RegularesNoticias.style.display = "flex";
    }   if(MalasNoticias.style.display = "flex") {
        MalasNoticias.style.display = "none";
    }   if(BuenasNoticias.style.display = "flex") {
        BuenasNoticias.style.display = "none";
    }
}