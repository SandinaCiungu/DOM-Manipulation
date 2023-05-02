/*1. Create a form validation script that displays an error message if a required input field is left empty.
  2. Create a countdown timer that triggers an action when it reaches zero.*/

document.getElementById("data-nasterii").defaultValue = "2000-01-01";

const buton = document.getElementById("buton");
buton.addEventListener("click", validareCampuri);

const nume = document.getElementById("nume");
const prenume = document.getElementById("prenume");

function validareCampuri() {
  if (nume.value.trim().length == 0) {
    alert("Completati campul nume");
  }
  if (prenume.value.trim().length == 0) {
    alert("Completati campul prenume");
  }
}

var x = setInterval(function () {
  var anulViitor = new Date("Jan 5, 2024 15:37:25").getTime();
  var azi = new Date().getTime();
  var diferenta = anulViitor - azi;

  var zile = Math.floor(diferenta / (1000 * 60 * 60 * 24));
  var ore = Math.floor((diferenta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((diferenta % (1000 * 60 * 60)) / (1000 * 60));
  var secunde = Math.floor((diferenta % (1000 * 60)) / 1000);

  document.getElementById("count-down").innerHTML =
    zile + "d " + ore + "h " + minute + "m " + secunde + "s ";

  if (diferenta < 0) {
    clearInterval(x);
    document.getElementById("count-down").innerHTML = "EXPIRED";
  }
}, 1000);

document.getElementById("count-down2").style.backgroundColor = "green";
var diferenta = 30;

var y = setInterval(function () {
  var timpRamas = diferenta--;
  document.getElementById("count-down2").innerHTML = timpRamas;
  if (diferenta < 0) {
    clearInterval(y);
    document.getElementById("count-down2").style.backgroundColor = "red";
  }
}, 1000);
