// global variables
var allSearches = [];


// function to create button
function renderButtons(){
  $("#buttonsHere").html("");
  for (i=0; i<allSearches.length; i++){
    var buttons = $("<button>");
    buttons.text(allSearches[i]);
    $("#buttonsHere").append(buttons);
    buttons.attr("id", "stateAsButton");
  }
};

// This on click will render out buttons from user input
$("#find-state").on("click", function(event) {
  event.preventDefault();
  // Here we grab the text from the input box
  var search = $("#state-input").val();
  allSearches.push(search)
  // calling function to make the search input as a button
  renderButtons();
});


  // Here we construct our URL
  // var queryURL = "https://www.omdbapi.com/?t=" + search + "&apikey=trilogy";

  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then (function(response){
  //   console.log(queryURL);
  //   console.log(response);
  //   $("#buttonsHere").text(JSON.stringify(response))
    
  // })