const currentColors = document.getElementById('colors');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const body = document.getElementById('gradient');

updateColors();

color1.addEventListener('input', updateColors);
color2.addEventListener('input', updateColors);

function updateColors() {
  currentColors.innerHTML = color1.value + ' -- ' + color2.value;
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

}