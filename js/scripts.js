var currentPlace = "";

//Business Logic
function Places(location, landmark, timeOfYear, note) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.note = note;
}

$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNote = $("input#new-note").val();

    var newPlaces = new Places(inputtedLocation, inputtedLandmark, inputtedTime, inputtedNote);

    $("#places").append("<li class='place'>" + newPlaces.location + "</li>");

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-time").val("");
    $("input#new-note").val("");

    $(".place").last().click(function() {
      $("#show-places").show();
      currentPlace = newPlaces;
      $("#show-places h2").text(newPlaces.location);
      $(".landmark").text(newPlaces.landmark);
      $(".time").text(newPlaces.timeOfYear);
      $(".note").text(newPlaces.note);
    });

  });
  $("#btn-update").click(function(){
    currentPlace.location = $("input#new-location").val();
    currentPlace.landmark = $("input#new-landmark").val();
    currentPlace.timeOfYear = $("input#new-time").val();
    currentPlace.note = $("input#new-note").val();

    $("#show-places h2").text(currentPlace.location);
    $(".landmark").text(currentPlace.landmark);
    $(".time").text(currentPlace.timeOfYear);
    $(".note").text(currentPlace.note);
  });
});
