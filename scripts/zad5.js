const doStrong = document.getElementById('doStrong');
const print = document.getElementById('print-number');
let takeNumber;

doStrong.onclick = () => {
  takeNumber = document.forms['form-1']['number-input'].value;

  if (!takeNumber) {
    print.innerHTML = 'Najpierw podaj liczbę!';
  } else {
    let strong = 1;
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= takeNumber; i++) {
      strong = strong * i;
    }

    print.innerHTML = `Silnia z ${takeNumber} wynosi: ${strong}`;
  }
};
