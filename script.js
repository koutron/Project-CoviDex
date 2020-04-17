/*
>>JS<<
functions needed


- function to make search button render state information
	- function to render search list
	- function to make search list items into a button
	- function to make that button render state information 



        

        

        // Here we construct our URL
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

       

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then (function(response){
          console.log(queryURL);
          console.log(response);
          $("#movie-view").text(JSON.stringify(response))
          
        })
        
      });


	- function to call on ajax for US
	- function to call on US info
		
	- function to call on ajax for states
	- function to display states info


	- function to localStorage setItem
	- function to localStorage getItem
	

	-function to get date
	-function to 

*/






    // This .on("click") function will trigger the AJAX Call
    $("#searchForm").on("click", function(event) {

        // Preventing the submit button from trying to submit the form
        // We're optionally using a form so the user may hit Enter to search instead of clicking the button
        event.preventDefault();

        // Here we grab the text from the input box
        var movie = $("#SearchCity").val();

        
        // Here we construct our URL
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

       
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then (function(response){
          console.log(queryURL);
          console.log(response);
          $("#SearchList").text(JSON.stringify(response))
          
        })
        
      });










$.ajax({
    //url: "https://api.covid19api.com/live/country/united-states/status/confirmed",
    url: "https://covidtracking.com/api/states/daily?state=VA&date=20200415",
    method: "GET"
}).then(function (response) {
    console.log(response);
    //console.log(response[0].Province);
    //console.log(response[0].Confirmed);
    console.log("Hello this is Kouros");
});