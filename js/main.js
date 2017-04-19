var cancha = document.getElementById("cancha");
var borde = document.getElementById("borde");
var porteria = document.getElementsByClassName("porteria");
var circulo = document.getElementById("mediaCancha");
var puntito = document.getElementsByClassName("puntito");

cancha.style.position = "absolute";
cancha.style.top = "100px";
cancha.style.left = "100px";

borde.style.position = "absolute";
borde.style.top = "25px";
borde.style.left = "25px";

porteria[0].style.position = "absolute";
porteria[0].style.top = "75px";
porteria[0].style.left = "0";
porteria[1].style.position = "absolute";
porteria[1].style.top = "75px";
porteria[1].style.right = "0";

circulo.style.position = "absolute";
circulo.style.top = "38%";
circulo.style.left = "45%";

puntito[0].style.position = "absolute";
puntito[0].style.top = "0";
puntito[0].style.right = "-10px";

puntito[1].style.position = "absolute";
puntito[1].style.top = "-90px";
puntito[1].style.bottom = "50px";

puntito[2].style.position = "absolute";
puntito[2].style.bottom = "0";
puntito[2].style.left = "-10px";