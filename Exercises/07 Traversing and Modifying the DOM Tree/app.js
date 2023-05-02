/*1. Traverse the DOM tree and find the parent element of a specific element and change its background color.
  2. Remove all child elements from a container <div> using JavaScript.*/

const listaTaguri = document.querySelector("#lista-finala");
const listaFinala = document.querySelectorAll(".lista");
for (let i = 0; i < listaFinala.length - 1; i++) {
  var el = document.createElement("option");
  el.textContent = listaFinala[i].tagName;
  el.value = listaFinala[i].tagName;
  listaTaguri.appendChild(el);
}

const selectieCrt = document.getElementById("lista-finala");
const buton = document.querySelector("button.lista-finala");
buton.addEventListener("click", schimbaBackground);

function schimbaBackground() {
  document.querySelector(selectieCrt.value + ".lista").style.backgroundColor =
    "pink";
}

const buton2 = document.querySelector("button.sterge-tot");
buton2.addEventListener("click", stergeTot);

const divContainer = document.querySelector("div:nth-of-type(1)");

function stergeTot() {
  /*
  const listaTot = document.querySelectorAll(".lista");
  for (let i = 0; i < listaTot.length - 1; i++) {
    listaTot[i].remove();
  }
  const listaTot2 = document.querySelectorAll(".schimbaProprietate");
  for (let i = 0; i < listaTot2.length - 1; i++) {
    listaTot2[i].remove();
  }
  const listaTot3 = document.querySelectorAll(".lista-finala");
  for (let i = 0; i < listaTot3.length - 1; i++) {
    listaTot3[i].remove();
  }
  buton.remove();
*/

  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }
}
