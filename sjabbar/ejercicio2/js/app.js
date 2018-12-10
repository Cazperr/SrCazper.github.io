function validar (){
    var nombre = document.forms["index"]["nombre"];
    var email = document.forms["index"]["email"];
    var resultado = document.getElementById("resultado")
    if(nombre.value==""){
        alert("Rellena el campo Nombre");
        nombre.focus();
        return false;
    } else if(email.value==""){
        alert("Rellena el campo email");
        email.focus();
        return false;
    } else if (email.value=="admin@sagradoc.es"){
        alert("Este email ya existe");
    } else if(resultado.innerHTML="<p>Formulario enviado</p>"){
        return false;
    } 
}