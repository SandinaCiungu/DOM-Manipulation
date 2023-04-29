/*1. Add a target="\_blank" attribute to a hyperlink to open it in a new tab when clicked.
  2. Change the source (src) attribute of an <img> element to display a different image.*/

const link = document.querySelector("a");
link.setAttribute("target", "_blank");

const poza = document.querySelector("img");
poza.setAttribute(
  "src",
  "https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2019/10/dog-coloring-page.png"
);
poza.setAttribute("alt", "caine");
