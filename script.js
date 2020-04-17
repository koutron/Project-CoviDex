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


var MyDate = new Date();
var myDateString;

MyDate.setDate(MyDate.getDate() - 1);

myDateString = MyDate.getFullYear() + ('0' + (MyDate.getMonth()+1)).slice(-2) + ('0' + MyDate.getDate()).slice(-2);

console.log(myDateString);




$.ajax({
    //url: "https://api.covid19api.com/live/country/united-states/status/confirmed",
    url: "https://covidtracking.com/api/states/daily?state=VA&date=" + myDateString,
    method: "GET"
}).then(function (response) {
    console.log(response);
});