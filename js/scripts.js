function rangeFinder(num) {
  let numArray = num.toString().split("").map(Number);

  return numArray;
}







$(document).ready(function() {
  $("#range").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("#number").val());
  });
});