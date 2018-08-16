var toBitNumber = function(txt, power) {
  txt = parseInt(txt);
  pwr = parseInt(power);
  var bitArray = [];
  for(;txt >= 1;) {
    bitArray.push(txt % pwr);
    txt = Math.floor(txt / pwr);
  }
  return bitArray.reverse().join('');
};

var toDecimal = function(txt) {
  // txt = parseInt(txt);
  var txt = txt.split('');
  var hexAarray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
  var DecAarray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  var decimalArray = [];
  for(i=0;i<3;i++){

  }

}



$(document).ready(function() {
  $("form#numberTranslator").submit(function(event) {
    event.preventDefault();

    var userInputnum = $("input#inputNumber").val();
    var userInputpwr = $("input#inputPower").val();
    var bitOutput = toBitNumber(userInputnum, userInputpwr);
    var decimalOutput = toDecimal(userInputnum);



    $("#result").text("From decimal to base power " + userInputpwr + " is " + bitOutput);
    $("#result2").text(decimalOutput);
  });
});
