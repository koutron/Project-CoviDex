$.ajax({
  url: "https://covidtracking.com/api/v1/states/daily.json",
  method: "GET"
}).then(function (response) {
  console.log(response);
  //console.log(response[0].Province);
  //console.log(response[0].Confirmed);
});


$.ajax({
  url: "https://covidtracking.com/api/states/daily?state=NY&date=20200415",
  method: "GET"
}).then(function (response) {
  console.log(response);
});


