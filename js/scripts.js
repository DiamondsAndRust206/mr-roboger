function rangeFinder(num) {
  let numArray = [];
  for(i = 0; i <= num; i++) {
    numArray.push(i);
  }
  let numArray2 = numArray.toString().split(',');
  return numArray;
}

function beepBoop(num) {
  const rangeArray =[];
  const newNumArray = rangeFinder(num);
  newNumArray.forEach(function(num){
    if(num.includes("3")) {
      rangeArray.push("Won't you be my neighbor?");
    }
  });
  return rangeArray;
}







$(document).ready(function() {
  $("#range").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("#number").val());

    $("#output").html(numberInput);
  });
});