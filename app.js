$(document).ready(function() {
  $("#change-red").on("click", function() {
    $("#red").css("background-color", "red");
  });

  $("#change-blue").on("click", function() {
    $("#blue").css("background-color", "blue");
  });

  $("#change-green").on("click", function() {
    $("#green").css("background-color", "green");
  });

  $("#make-big").on("click", function() {
    $("#big")
    .css("width", "800px")
    .css("height","800px");
  });

  $("#make-small").on("click", function() {
    $("#small")
    .css("width", "100px")
    .css("height","100px");
  });

  $("#animate-div").on("click", function() {
    $("#animate").addClass("rotate");
  });
});
