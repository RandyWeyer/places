//Business Logic
var arrayOfPlaces = [];
var arrayIndex = 0;
var idCounter = 0;

function Places(location, landmark, timeOfYear, note) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.note = note;
  this.id = idCounter;
  idCounter++;
}

$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNote = $("input#new-note").val();

    var newPlaces = new Places(inputtedLocation, inputtedLandmark, inputtedTime, inputtedNote);

    arrayOfPlaces.push(newPlaces);

    $("#places").text("");


      $("#places").append("<li class='place' id='" + i + "'>" + arrayOfPlaces[i].location + "</li>");


      //End of "new-place" submit
    });


  for(i = 0;i < arrayOfPlaces.length; i++){
    console.log(i);
    var specificLocation = i;


    $("#" + arrayOfPlaces.id).click(function() {
      console.log();

      $("#show-places").show();
      $("#show-places h2").text(arrayOfPlaces[0].location);
      $(".landmark").text(arrayOfPlaces[0].landmark);
      $(".time").text(arrayOfPlaces[0].timeOfYear);
      $(".note").text(arrayOfPlaces[0].note);
      $(".update").click(function() {


        $("input#new-location").val(arrayOfPlaces[newPlaces.id].location);
        $("input#new-landmark").val(arrayOfPlaces[newPlaces.id].landmark);
        $("input#new-time").val(arrayOfPlaces[newPlaces.id].timeOfYear);
        $("input#new-note").val(arrayOfPlaces[newPlaces.id].note);
        $("#show-places").hide();
      });
    });

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-time").val("");
    $("input#new-note").val("");
      // end of for-loop
  }




});
