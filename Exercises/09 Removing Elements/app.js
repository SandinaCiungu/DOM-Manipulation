/*1. Remove a specific element from the DOM when a button is clicked.
  2. Remove all elements with a certain CSS class from the page using JavaScript.*/

const listaTaguri = document.querySelector("#lista2");
const listaFinala = document.querySelectorAll(".lista");
for (let i = 0; i < listaFinala.length - 1; i++) {
  var el = document.createElement("option");
  el.textContent = listaFinala[i].tagName;
  el.value = listaFinala[i].tagName;
  listaTaguri.appendChild(el);
}

const buton = document.querySelector("button.lista2");
const selectie = document.querySelector("select.lista2");
buton.addEventListener("click", stergeElementul);

function stergeElementul() {
  document.querySelector(selectie.value + ".lista").remove();
}

const buton2 = document.querySelector("button.lista3");
buton2.addEventListener("click", stergeTot);

function stergeTot() {
  const listaTot = document.querySelectorAll(".lista");
  for (let i = 0; i < listaTot.length - 1; i++) {
    listaTot[i].remove();
  }
}
