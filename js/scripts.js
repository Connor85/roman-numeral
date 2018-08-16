// business logic
var decimalToRoman = function (inputDecimalNumber){
  inputDecimalNumber = parseInt(inputDecimalNumber);

  var decimalValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var romanNumeral = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  var outputVar;
  var remainder;
  for (i=0; i < romanNumeral.length; i++){
    // alert(inputDecimalNumber + " " + i + ' ' + decimalValue[i]);
    if (inputDecimalNumber >= decimalValue[romanNumeral.length - i]){
      outputVar = romanNumeral[romanNumeral.length - i];
      remainder = inputDecimalNumber - decimalValue[romanNumeral.length - i];
      i = romanNumeral.length;
      return outputVar + " " + remainder;

    }
  }
}
// user logic
$(document).ready(function() {
  $("form#numberTranslator").submit(function(event) {
    event.preventDefault();
    var userInputToRoman = $("#inputNumber").val();
    userInputToDecimal = decimalToRoman(userInputToRoman);
    $("#result").text(userInputToDecimal);
  });
});
