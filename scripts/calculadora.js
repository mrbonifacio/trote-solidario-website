let displayValue = '';

function appendValue(val) {
  displayValue += val;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    alert('Erro na expressão!');
    clearDisplay();
  }
}
