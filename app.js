var buttons = document.querySelectorAll('.grid-item');
let curVal = document.getElementById('curVal');
let answer = document.getElementById('answer');
let oper = document.querySelectorAll('.grid-oper');
let equals = document.getElementById('equals');

let flag = 0;
let val1 = '';
let val2 = '';
var op = '';
let curvalue = '';
curVal.innerText = 'The current value is : ' + curvalue;

function operate(oper, num1, num2) {
  let k;
  console.log('Num1: ' + num1);
  console.log('Num2: ' + num2);
  if (oper == '+') {
    k = num1 + num2;
    answer.innerText = 'The answer is : ' + k;
  }
  if (oper == '-') {
    k = num1 - num2;
    answer.innerText = 'The answer is : ' + k;
  }
  if (oper == '*') {
    k = num1 * num2;
    answer.innerText = 'The answer is : ' + k;
  }
  if (oper == '/') {
    k = num1 / num2;
    answer.innerText = 'The answer is : ' + k;
  }
}

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    chgVal(item);
  });
});

oper.forEach((item) => {
  item.addEventListener('click', () => {
    op = op + item.innerText;
    curvalue = curvalue + ' ' + op + ' ';
    curVal.innerText = 'The current value is : ' + curvalue;
    flag++;
  });
});

function chgVal(item) {
  if (flag == 0) {
    val1 = val1 + item.innerText;
    console.log('Val1: ' + val1);
    curvalue = curvalue + item.innerText;
    curVal.innerText = 'The current value is : ' + curvalue;
  }
  if (flag != 0) {
    val2 = val2 + item.innerText;
    console.log('val2: ' + val2);
    curvalue = curvalue + item.innerText;
    curVal.innerText = 'The current value is : ' + curvalue;
  }
}

equals.addEventListener('click', () => {
  let l = Math.floor(val1);
  let m = Math.floor(val2);
  operate(op, l, m);
  console.log(op);
});
