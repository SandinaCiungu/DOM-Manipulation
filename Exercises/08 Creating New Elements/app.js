/*1. Create a new <p> element with some text content and append it to an existing <div> element.
  2. Create a nested list structure dynamically using JavaScript and append it to a <ul> element.*/

const container = document.querySelector(".container");
const paragraf = document.createElement("p");
paragraf.textContent = "Paragraful nou creat cu JavaScript";
container.appendChild(paragraf);

const lista = document.querySelector("ul");
const elementLista = document.createElement("li");
const elementLista2 = document.createElement("li");
const elementLista3 = document.createElement("li");
elementLista.innerHTML = "Elementul 1";
lista.appendChild(elementLista);

elementLista2.innerHTML = "Elementul 2";
lista.appendChild(elementLista2);

elementLista3.innerHTML = "Elementul 3";
lista.appendChild(elementLista3);
