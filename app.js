function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto 
                    .replace(/e/gi, "fll")
                    .replace(/a/gi, "csl")
                    .replace(/i/gi, "jpr")
                    .replace(/u/gi, "ltr")
                    .replace(/o/gi, "mgj")  
                    
                    if (texto.length != 0) {
                        document.getElementById("texto").value = textoCifrado;
                        tituloMensaje.textContent = "Texto encriptado con éxito";
                        parrafo.textContent = "";
                        muñeco.src = "./img/encriptado.jpg";
                      } else {
                        muñeco.src = "./img/perrito.jpg";
                        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
                        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
                        swal("Ooops!", "Debes ingresar un texto", "warning");
                      }
                    }
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto 
    .replace(/fll/gi, "e")
    .replace(/csl/gi, "a")
    .replace(/jpr/gi, "i")
    .replace(/ltr/gi, "u")
    .replace(/mgj/gi, "o") 

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
      } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
  }

