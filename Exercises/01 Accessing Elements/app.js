/*1. Select and modify the color of all paragraph elements on a webpage using JavaScript.
  2. Access the value of an input field and display it in a separate <div> element when a
     button is clicked.*/

const container = document.querySelector(".container");

const p1 = document.createElement("p");
p1.textContent = "textul din paragraful 1";
container.appendChild(p1);

const p2 = document.createElement("p");
p2.textContent = "textul din paragraful 2";
container.appendChild(p2);

const p3 = document.createElement("p");
p3.textContent = "textul din paragraful 3";
container.appendChild(p3);

const p4 = document.createElement("p");
p4.textContent = "textul din paragraful 4";
container.appendChild(p4);

const paragrafe = document.querySelectorAll("p");
for (let i = 0; i <= paragrafe.length - 1; i++) {
  paragrafe[i].style.color = "red";
}

const text = document.createElement("input");
text.type = "text";
text.placeholder = "Introduceti un text...";
container.appendChild(text);
const input = document.querySelector("input");

const buton = document.createElement("button");
buton.textContent = "Adauga paragraf";
container.appendChild(buton);

buton.addEventListener("click", adaugaParagraf);

function adaugaParagraf() {
  const p5 = document.createElement("p");
  p5.innerHTML = input.value;
  container.appendChild(p5);
  input.value = "";
}
