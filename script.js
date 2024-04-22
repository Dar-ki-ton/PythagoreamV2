var legAIn = document.getElementById("legA");
var legBIn = document.getElementById("legB");
var hypoOutEl = document.getElementById("hypo-out");
var calcBtn = document.getElementById("calc");

calcBtn.addEventListener("click", calcPyth);

function calcPyth() {
  var lengthA = parseInt(legAIn.value);
  var lengthB = parseInt(legBIn.value);

  var pyth = lengthA ** 2 + lengthB ** 2;
  pyth = Math.sqrt(pyth);
  pyth = pyth.toFixed(2);

  legAIn.value = "";
  legBIn.value = "";
  hypoOutEl.innerHTML = pyth;
}
