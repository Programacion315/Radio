var estadoRadio = false;
var radio = document.getElementById("radio-button");
var circulos = document.getElementsByClassName("circle");
var sonidoRadio = document.getElementById("boton-sonido");

var radioCompleto = document.getElementById("radioCompleto");


function turnOnRadio(){

    if(estadoRadio == false){

        

        estadoRadio = true;
        console.log("Radio encendida");
        prenderMusica();
        radio.style.backgroundColor="#06d106";

        radioCompleto.classList.add('agrandar');
        radioCompleto.classList.remove('normal-radio');

        for(var i=0; i<circulos.length; i++){

            
            
            
            circulos[i].classList.add('luces');
        }
        

    }else{
        estadoRadio = false;
        console.log("Radio apagada");
        prenderMusica();
        radio.style.backgroundColor="#ec1d25";

        
        
        radioCompleto.classList.add('normal-radio');


        for(var i=0; i<circulos.length; i++){

            circulos[i].classList.remove('luces');
            
        }

    }

    function prenderMusica(){

        if(sonidoRadio.paused){
            sonidoRadio.play()
        }
        else{
            
            sonidoRadio.pause();
        }
    }
 
}