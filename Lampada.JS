const TurnOn = document.getElementById("TurnOn");
const TurnOff = document.getElementById("TurnOff");
var lamp = document.getElementById ("lamp");

// function islampbroken(){
//     return lamp.src.indexOf( "quebrada" ) > -1
// }


function lampOn(){
    // if( !islampbroken () ){
        
    lamp.src= "./img/ligada.jpg"
    // }
}

function lampOff(){
    // if( !islampbroken () ){
    lamp.src="./img/desligada.jpg"
    
// }
}

function lampbroken(){
    lamp.src="./img/quebrada.jpg"
    lamp = "brokenlamp"
}

if(lamp == "brokenlamp"){
    lamp.addEventListener("mouseover", lampbroken);
    lamp.addEventListener("mouseleave",lampbroken);
}

TurnOn.addEventListener("click", lampOn);
TurnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave",lampOff);
lamp.addEventListener("dblclick", lampbroken);

