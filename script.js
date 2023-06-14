let memo = 0,
  isTypingNumber = false,
  lastOperation = '+';

const display = document.getElementsByClassName('display-result')[0],
  plus = document.getElementsByClassName('operations-item-plus')[0],
  minus = document.getElementsByClassName('operations-item-minus')[0],
  divide = document.getElementsByClassName('operations-item-divide')[0],
  multiply = document.getElementsByClassName('operations-item-multiply')[0],
  equal = document.getElementsByClassName('operations-item-equal')[0],
  ce = document.getElementsByClassName('operations-item-ce')[0],
  numberButtons = document.getElementsByClassName('number-button');

plus.onclick = calc.bind(null, '+');
minus.onclick = calc.bind(null, '-');
divide.onclick = calc.bind(null, '/');
multiply.onclick = calc.bind(null, '*');

for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].onclick = function (e) {
    !isTypingNumber
      ? (display.textContent = +e.target.textContent)
      : (display.textContent =
          +`${display.textContent}${e.target.textContent}`);

    isTypingNumber = true;
  };
}

ce.onclick = clean.bind(null, false);
equal.onclick = clean.bind(null, true);

function clean(shouldCalc) {
  shouldCalc ? calc(lastOperation) : (display.textContent = 0);
  memo = 0;
  lastOperation = '+';
}

function calc(operation) {
  isTypingNumber = false;
  switch (lastOperation) {
    case '+':
      memo = memo + +display.textContent;
      break;
    case '-':
      memo = memo - +display.textContent;
      break;
    case '/':
      memo = memo / +display.textContent;
      break;
    case '*':
      memo = memo * +display.textContent;
      break;
  }
  memo = +memo.toFixed(10);
  lastOperation = operation;
  display.textContent = memo;
}
