/*1. Change the text content of a <h1> element to "Hello, World!" using JavaScript.
  2. Append a new <li> element to an existing <ul> list on a webpage.*/

const container = document.querySelector(".container");
const h1 = document.createElement("h1");
h1.innerHTML = "Hello, World!";
container.appendChild(h1);

const element = document.createElement("li");
element.innerHTML = "Element4 - nou";
const lista = document.querySelector("ul");
lista.appendChild(element);
