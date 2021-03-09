const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const print = document.getElementById('print-number');
const getNumber1 = document.forms['form-1']['number-input-1'];
const getNumber2 = document.forms['form-1']['number-input-2'];
let score;

function empty(empty1, empty2) {
  if (!empty1 || !empty2) print.innerHTML = 'Wprowadź obie liczby!';
}

multiply.onclick = () => {
  score = getNumber1.value * getNumber2.value;
  print.innerHTML = `Wynik mnożenia to: ${score}`;
  empty(getNumber1.value, getNumber2.value);
};

divide.onclick = () => {
  if (parseFloat(getNumber2.value) === 0) {
    print.innerHTML = 'Nie wolno dzielić przez 0!';
  } else if (getNumber1.value && getNumber2.value) {
    score = getNumber1.value / getNumber2.value;
    print.innerHTML = `Wynik dzielenia to: ${score}`;
  } else empty(getNumber1.value, getNumber2.value);
};
