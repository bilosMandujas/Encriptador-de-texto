function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto 
                    .replace(/e/gi, "fall")
                    .replace(/a/gi, "cool")
                    .replace(/i/gi, "iper")
                    .replace(/u/gi, "ultra")
                    .replace(/o/gi, "mega")  
                    
                    if(texto.length != 0){
                        document.getElementById("texto").value = textoCifrado;
                        tituloMensaje.textContent="texto encriptado con éxito";
                        parrafo.textContent = "";
                        Muñeco.src ="./img/perrito_letrero.jpg";
                    }else{
                        perrito.src= "./img/perrito_letrero.jpg";
                        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
                        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
                        alert("debes ingresar algun texto");
                        }
                    }
function desencriptar(){
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto 
    .replace(/fall/gi, "e")
    .replace(/cool/gi, "a")
    .replace(/iper/gi, "i")
    .replace(/ultra/gi, "u")
    .replace(/mega/gi, "o") 

    if(texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent= "texto desencriptado con éxito";
        parrafo.textContent = "";
        perrito_megafono.src ="./img/hombre_anuncio.jpg";
} else{
    perrito_letrero.src= "./img/perrito_letrero.jpg";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("debes ingresar algun texto");
    }

}

