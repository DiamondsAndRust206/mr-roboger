function rangeFinder(num) {
  let numArray = [];
  for(i = 0; i <= num; i++) {
    numArray.push(i);
  }

  return numArray;
}

function beepBoop(num) {
  let rangeArray = rangeFinder(num);
  let newArray = [];

  for (let i = 0; i < rangeArray.length; i++) {
    if(rangeArray[i].toString().includes(3)) {
      newArray.push("Won't you be my neighbor?");
    }
  }
}







$(document).ready(function() {
  $("#range").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("#number").val());

    $("#output").html(numberInput);
  });
});