function appendValue(val) {
  let display = document.getElementById("display");
  display.value += val;
}

function clearDisplay() {
  let display = document.getElementById("display");
  display.value = ""
}
function backspace() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    alert("Invalid expression");
    clearDisplay();
  }
}
