$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age > 21 > 85) {
    $('#drinks').show()
  } else if (age === 21) {
    alert("Now don't go crazy!");
  } else if (age >= 85) {
    $('#drinks').show()
    alert("Drinks are on the house ya dinosaur!");
  } else {
    $('#under-21').show();
  }
});