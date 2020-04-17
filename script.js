/*
>>JS<<
functions needed

	- function to call on ajax for US
	- function to call on US info
		
	- function to call on ajax for states
	- function to display states info

	- function to make search button render state information
	- function to render search list
	- function to make search list items into a button
	- function to make that button render state information

	- function to localStorage setItem
	- function to localStorage getItem
	

	-function to get date
	-function to 



*/



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