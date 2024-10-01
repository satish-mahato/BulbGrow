let text = document.querySelector("h1");
text.innerHTML = "Bulb Switch";
text.style.color = "blue";

let bulbs = document.getElementsByClassName("bulb")[0];
let bulbButton = document.querySelector("button");
var flag = 0;
bulbButton.addEventListener("click", function glow() {
  if (flag == 0) {
    bulbs.style.backgroundColor = "yellow";
    console.log("ON");
    flag = 1;
  } else {
    bulbs.style.backgroundColor = "transparent";
    console.log("off");
    flag = 0;
  }
});
