var count = 0;
function klick(element) {
  count++;
  element.innerHTML = `ckliced: ${count}`;
  par = document.getElementById("paragraph");
  if (par.style.borderRadius == "0px") {
    par.style.borderRadius = "25px";
  } else {
    par.style.borderRadius = "0px";
  }
}

function reset() {
  par = document.getElementById("paragraph");
  par.style.borderRadius = "0px";
  count = 0;
  document.getElementById("button-line").innerHTML = "ckliced: ";
}

