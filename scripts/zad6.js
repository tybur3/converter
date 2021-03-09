const buttonAddElement = document.getElementById('addElement');
const buttonShowResult = document.getElementById('showResult');
const print = document.getElementById('print-number');

let takeNumber = '';
const array1 = [];

function compareNr(a, b) {
  return a - b;
}

buttonAddElement.onclick = () => {
  takeNumber = document.forms['form-1']['number-input'].value;

  if (!takeNumber) {
    print.innerHTML = 'Nie wprowadzono liczby!';
  } else {
    array1.push(takeNumber);
    print.innerHTML = `Wprowadzone elementy: [ ${array1.join(' , ')} ]`;
  }
};

buttonShowResult.onclick = () => {
  if (array1.length === 0) {
    print.innerHTML = 'Tablica jest pusta!';
  } else {
    array1.sort(compareNr);
    print.innerHTML = `Posortowana tablica: [ ${array1.join(' , ')} ]`;
  }
};
