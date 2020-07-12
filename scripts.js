var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");

function colorPick() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}
function colorSet() {
  body.style.background =
    "linear-gradient(to right, rgb(255, 0, 0) , rgb(255, 255, 0))";
  css.textContent = body.style.background + ";";
}

colorSet();
color1.addEventListener("input", colorPick);
color2.addEventListener("input", colorPick);
