'use strict';

$(document).ready(init);

function init() {
  //$('#equal').click(go);
$('.article').click(setText);
$('.noun').click(setText);
$('.verb').click(setText);
$('.adjective').click(setText);
$('#clear').click(clear);
}

function clear() {
  $('#sentence').text('');
}

function setText() {
  var old = $('#sentence').text();
  var text = $(this).text();
  var newtext = old + ' ' + text;
  $('#sentence').text(newtext);
}

/*
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
*/


/*
function crazy() {
  setInterval(function(){
    $('p').toggleClass('fun');
  }, 2000);
}
*/
