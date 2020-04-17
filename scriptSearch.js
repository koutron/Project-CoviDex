// This .on("click") function will trigger the AJAX Call
$("#find-state").on("click", function(event) {

  // Preventing the submit button from trying to submit the form
  // We're optionally using a form so the user may hit Enter to search instead of clicking the button
  event.preventDefault();

  // Here we grab the text from the input box
  var movie = $("#state-input").val();


  // Here we construct our URL
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

 

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then (function(response){
    console.log(queryURL);
    console.log(response);
    $("#state-view").text(JSON.stringify(response))
    
  })
  
});