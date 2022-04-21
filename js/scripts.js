function rangeFinder(num) {
  let numArray = [];
  for(i = 0; i <= num; i++) {
    numArray.push(i);
  }
  return numArray;
}







$(document).ready(function() {
  $("#range").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("#number").val());

    $("#output").html(numberInput);
  });
});