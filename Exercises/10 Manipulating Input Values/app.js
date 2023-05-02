/*1. Calculate the sum of two input fields and display the result in a separate <span> element when a button is clicked.
  2. Clear the values of all input fields on a form when a "Reset" button is clicked.*/

const butonRefresh = document.querySelector("#buton1");
butonRefresh.addEventListener("click", recalculeaza);

var suma = document.querySelector("span");

function recalculeaza() {
  suma.innerHTML =
    "Suma celor 2 numere este: " +
    Number(
      Number(document.getElementById("numarul1").value) +
        Number(document.getElementById("numarul2").value)
    );
}

const butonReset = document.querySelector("#buton2");
butonReset.addEventListener("click", reset);

function reset() {
  document.getElementById("numarul1").value = "";
  document.getElementById("numarul2").value = "";
  document.querySelector("span").innerHTML = "Suma celor 2 numere este: ";
}
