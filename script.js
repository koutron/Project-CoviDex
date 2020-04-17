

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