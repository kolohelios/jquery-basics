'use strict';

$(document).ready(init);

function init() {
  $('#equal').click(go);
}

function go() {
  var number1 = $('#x').val();
  var number2 = $('#y').val();
  var op = $('#operator').val();

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  var result;
  switch (op) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
  }
  $('#result').val(result);
}



/*
function crazy() {
  setInterval(function(){
    $('p').toggleClass('fun');
  }, 2000);
}
*/
