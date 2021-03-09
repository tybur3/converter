const random = document.getElementById('random');
const match = document.getElementById('match');
const print = document.getElementById('print-number');
const form1 = document.forms['form-1']['number-input'];

let randomNumber;

random.onclick = () => {
  randomNumber = 1 + Math.floor(Math.random() * 10);

  if (!form1.value) print.innerHTML = '';
};

match.onclick = () => {
  const takeNumber = parseFloat(form1.value);

  if (takeNumber && takeNumber >= 1 && takeNumber <= 10 && randomNumber) {
    if (randomNumber === takeNumber) {
      print.innerHTML = `Trafiłeś! Wylosowany numer to: ${randomNumber}`;
    } else {
      print.innerHTML = `Spróbuj jeszcze raz, wylosowany numer to: ${randomNumber}`;
    }
  } else if (!randomNumber) {
    print.innerHTML = 'Najpierw wylosuj liczbę!';
  } else {
    print.innerHTML = 'Nie podano liczby, lub jest ona poza zakresem!';
  }
};
