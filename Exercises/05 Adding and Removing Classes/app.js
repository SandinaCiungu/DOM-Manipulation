/*1. Add a CSS class to a specific element to highlight it when the mouse is over it.
  2. Remove a CSS class from an element when a button is clicked to hide it from the page.*/

const text = document.querySelector("p");

const buton = document.querySelector("button");

const obj = document.querySelector("div");

text.addEventListener("mouseover", highlight);
text.addEventListener("mouseout", normal);

function highlight() {
  //text.classList.toggle("highlight");
  text.classList.add("highlight");
}

function normal() {
  text.classList.remove("highlight");
}

buton.addEventListener("click", dispare);

function dispare() {
  obj.classList.remove("afiseaza");
  obj.classList.add("ascunde");
}
