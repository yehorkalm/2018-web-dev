const currentColors = document.getElementById('colors');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const body = document.getElementById('gradient');
const rndBtn = document.getElementById('random');

updateColors();

color1.addEventListener('input', updateColors);
color2.addEventListener('input', updateColors);

function updateColors() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  currentColors.innerText = body.style.background;
}

rndBtn.addEventListener('click', () => {
  color1.value = "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
  color2.value = "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
  updateColors();
});