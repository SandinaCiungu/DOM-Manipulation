/*1. Toggle the background color of a <div> element between red and blue when clicked.
  2. Change the font size of a paragraph dynamically based on a user-selected value from a dropdown menu*/

const fundal = document.querySelector(".container");

fundal.style.backgroundColor = "blue";
fundal.style.fontSize = "10px";
fundal.style.height = "100vh";
fundal.style.width = "100vh";

fundal.addEventListener("click", changeColor);

function changeColor() {
  fundal.style.backgroundColor =
    fundal.style.backgroundColor == "red" ? "blue" : "red";
}

const paragraf = document.querySelector("p");

const dimensiune = document.querySelector("select");
dimensiune.addEventListener("change", schimbaFont);

function schimbaFont() {
  paragraf.style.fontSize = dimensiune.value;
  //paragraf.setAttribute("style", "font-size:" + dimensiune.value + ";");
  //console.log(paragraf.getAttribute("style", "font-size"));
}
