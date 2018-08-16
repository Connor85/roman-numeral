// business logic
var decimalToRoman = function (inputDecimalNumber){
  inputDecimalNumber = parseInt(inputDecimalNumber);
  var decimalValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var romanNumeral = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  var outputVar = '';
  var remainder;
  if (inputDecimalNumber >= 5000) {
    return "Number too big.";
  } else {
    for(;remainder !== 0;) {
      for (i= romanNumeral.length; i >= 0; i--){
        if (inputDecimalNumber >= decimalValue[i]){
          outputVar = outputVar + romanNumeral[i];
          remainder = inputDecimalNumber - decimalValue[i];
          i = 0;
        }
      }
      inputDecimalNumber = remainder;
    }
  }
  return outputVar;
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
