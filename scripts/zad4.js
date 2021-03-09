const power = document.getElementById('power');
const print = document.getElementById('print-number');
const takeNumber1 = document.forms['form-1']['number-input-1'];
const takeNumber2 = document.forms['form-1']['number-input-2'];

power.onclick = () => {
  if (!takeNumber1.value || !takeNumber2.value) {
    print.innerHTML = 'Najpierw podaj obie liczby!';
  } else {
    print.innerHTML = `Wynik potęgowania: ${takeNumber1.value}<sup>${
      takeNumber2.value
    }</sup> = ${takeNumber1.value ** takeNumber2.value}`;
  }
};
