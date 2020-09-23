function alertMe() {
  alert("Clicked!");
}

function colorChange() {
  var ourDiv = document.getElementById('grid-column1');
  var ourColor = document.getElementById('color-field');
  ourDiv.style.backgroundColor = ourColor.value;
}
