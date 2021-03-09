const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const print = document.getElementById('print-number');

const convert = document.getElementById('convert');

convert.onclick = () => {
  let result;
  const takeNumber = document.forms['form-1']['number-input'].value;
  if (takeNumber) {
    if (fahrenheit.checked) {
      result = Number((5 / 9) * (takeNumber - 32)).toFixed(1);
      print.innerHTML = `${takeNumber}° Fahrenheita to ${result}° Celsiusza`;
    } else if (celsius.checked) {
      result = Number((9 / 5) * takeNumber + 32).toFixed(1);
      print.innerHTML = `${takeNumber}° Celsiusza to ${result}° Fahrenheita`;
    }
  } else {
    print.innerHTML = 'Najpierw podaj liczbę stopni!';
  }
};
