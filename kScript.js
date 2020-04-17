var MyDate = new Date();
var myDateString;
​
MyDate.setDate(MyDate.getDate() - 1);
​
myDateString = MyDate.getFullYear() + ('0' + (MyDate.getMonth()+1)).slice(-2) + ('0' + MyDate.getDate()).slice(-2);
​
console.log(myDateString);

$.ajax({
    //url: "https://api.covid19api.com/live/country/united-states/status/confirmed",
    url: "https://covidtracking.com/api/states/daily?state=VA&date=" + myDateString,
    method: "GET"
}).then(function (response) {
    console.log(response);
});