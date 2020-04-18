// global variables
var allSearch = [];

// function to create button
function renderButtons() {
  $("#buttonsHere").html("");
  for (i = 0; i < allSearch.length; i++) {
    var btn = $("<button>");
    btn.text(allSearch[i]);
    $("#buttonsHere").append(btn);
    btn.attr("id", "stateAsButton");
  }
};

// This on click will render out buttons from user input
$("#find-state").on("click", function (event) {
  event.preventDefault();
  // var search = $("#state-input").val();
  // allSearch.push(search)
  var searchedState = getStateName();
  searchedState = searchedState.toLowerCase();
  
  var abbrSearchedState = getStateTwoDigitCode(searchedState);
 

  $.ajax({
    url: "https://covidtracking.com/api/states/daily?state=" + abbrSearchedState + "&date=" + yesterday,
    method: "GET"
  }).then(function (response) {
    var statePositive = response.positive;
    var stateRecovered = response.recovered;
    var stateDeath = response.death;
    renderStates(statePositive, stateRecovered, stateDeath);
  });

  renderButtons();
  storeSearch();
  resetSearchBar();
});

function resetSearchBar() {
  $("#state-input").val("");
}

// function to store users' input into Array
function getStateName() {
  var search = $("#state-input").val();
  allSearch.push(search);
  return search;
};

// acutaly click on the arleady existing state as a button
// function to classify each button being clicked
$("#buttonsHere").on("click", "button", function () {
  console.log($(this).text())
})

// function to localStorage users' search
function storeSearch() {
  localStorage.setItem("states", JSON.stringify(allSearch));
}

// function to get localStorage item

function getSearch() {
  var storedSearch = JSON.parse(localStorage.getItem("states"));
  if (storedSearch !== null) {
    allSearch = storedSearch;
  }
  renderButtons();
}

getSearch();



var MyDate = new Date();
var yesterday;
MyDate.setDate(MyDate.getDate() - 1);
yesterday = MyDate.getFullYear() + ('0' + (MyDate.getMonth() + 1)).slice(-2) + ('0' + MyDate.getDate()).slice(-2);

function getStateTwoDigitCode(stateFullName) {

  stateList = {
    'arizona': 'AZ',
    'alabama': 'AL',
    'alaska': 'AK',
    'arkansas': 'AR',
    'california': 'CA',
    'colorado': 'CO',
    'connecticut': 'CT',
    'delaware': 'DE',
    'florida': 'FL',
    'georgia': 'GA',
    'hawaii': 'HI',
    'idaho': 'ID',
    'illinois': 'IL',
    'indiana': 'IN',
    'iowa': 'IA',
    'kansas': 'KS',
    'kentucky': 'KY',
    'louisiana': 'LA',
    'maine': 'ME',
    'maryland': 'MD',
    'massachusetts': 'MA',
    'michigan': 'MI',
    'minnesota': 'MN',
    'mississippi': 'MS',
    'missouri': 'MO',
    'montana': 'MT',
    'nebraska': 'NE',
    'nevada': 'NV',
    'new hampshire': 'NH',
    'new jersey': 'NJ',
    'new mexico': 'NM',
    'new york': 'NY',
    'north carolina': 'NC',
    'north dakota': 'ND',
    'ohio': 'OH',
    'oklahoma': 'OK',
    'oregon': 'OR',
    'pennsylvania': 'PA',
    'rhode island': 'RI',
    'south carolina': 'SC',
    'south dakota': 'SD',
    'tennessee': 'TN',
    'texas': 'TX',
    'utah': 'UT',
    'vermont': 'VT',
    'virginia': 'VA',
    'washington': 'WA',
    'west virginia': 'WV',
    'wisconsin': 'WI',
    'wyoming': 'WY'
  }

  return this.stateList[stateFullName];

}


$.ajax({
  url: "https://covidtracking.com/api/states/daily?state=VA&date=" + yesterday,
  method: "GET"
}).then(function (response) {
  var statePositive = response.positive;
  var stateRecovered = response.recovered;
  var stateDeath = response.death;
  renderStates(statePositive, stateRecovered, stateDeath);
});



$.ajax({
  url: "https://covidtracking.com/api/v1/us/current.json",
  method: "GET"
}).then(function (response) {
  var countryPositive = response[0].positive;
  var countryRecovered = response[0].recovered;
  var countryDeath = response[0].death;
});

function renderStates(statePositive, stateRecovered, stateDeath) {
  $("#positive").text("Positive: " + statePositive);
  $("#recovered").text("Recovered: " + stateRecovered);
  $("#deaths").text("Deaths: " + stateDeath);
}