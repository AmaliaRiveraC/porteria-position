var cancha = document.getElementById("cancha");
var borde = document.getElementById("borde");
var porteria = document.getElementsByClassName("porteria");
var circulo = document.getElementById("mediaCancha");

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

