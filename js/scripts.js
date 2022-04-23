//Business logic

function rangeFinder(num) {
  let numArray = [];
  for(i = 0; i <= num; i++) {
    numArray.push(i);
  }
  let numArray2 = numArray.toString().split(',');
  return numArray2;
}

function beepBoop(num) {
  const rangeArray =[];
  const newNumArray = rangeFinder(num);
  newNumArray.forEach(function(num) {
    if(num.includes("3")) {
      rangeArray.push("Won't you be my neighbor?");
    } else if (num.includes("2")) {
      rangeArray.push("Boop!")
    } else if (num.includes("1")) {
      rangeArray.push("Beep!")
    } else {
      rangeArray.push(num);
    }
  });
  return rangeArray;
}

//UI Logic

$(document).ready(function() {
  $("#range").submit(function(event) {
    event.preventDefault();

    const numberInput = parseInt($("#number").val());
    const results = beepBoop(numberInput);
    results.forEach(function() {
      $("#output").text(results);
    });
    
  });
});