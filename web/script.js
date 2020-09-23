function alertMe() {
  alert("Clicked!");
}

function colorChange() {
  var ourDiv = document.getElementById('grid-column1');
  var ourColor = document.getElementById('color-field');
  ourDiv.style.backgroundColor = ourColor.value;
}

function fadeJQ() {
  $("#grid-column3").hide("slow");
  $("#fade-button").on("click", unfadeJQ());
}

function unfadeJQ() {
  $("#grid-column3").show("slow");
  $("#fade-button").on("click", fadeJQ());
}

//Don't let these work until the document is ready
$(function() {
  //I figure there's no sense rewriting it.
  $("#color-button").on("click", colorChange());
  $("#fade-button").on("click", fadeJQ());
});
