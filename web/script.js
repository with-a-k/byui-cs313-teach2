function alertMe() {
  alert("Clicked!");
}

function colorChange() {
  var ourDiv = document.getElementById('grid-column1');
  var ourColor = document.getElementById('color-field');
  console.log(ourColor);
  ourDiv.style.backgroundColor = ourColor.value;
}
