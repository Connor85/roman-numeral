// business logic
var decimalToRoman = function (inputDecimalNumber){
  inputDecimalNumber = parseInt(inputDecimalNumber);
  return inputDecimalNumber;
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
