// global variables
var allSearch = [];

// caling functions
getSearch();


// function to create button
function renderButtons(){
  $("#buttonsHere").html("");
  for (i=0; i<allSearch.length; i++){
    var btn = $("<button>");
    btn.text(allSearch[i]);
    $("#buttonsHere").append(btn);
    btn.attr("id", "stateAsButton");
  }
};
// function to reset Search bar after submit
function resetSearchBar(){
  $("#state-input").val(" ");
}

// function to store users' input into Array
function getStateName(){
  var search = $("#state-input").val();
  allSearch.push(search);
};

// function to localStorage users' search
function storeSearch(){
  localStorage.setItem("states", JSON.stringify(allSearch));
}

// function to get localStorage item
function getSearch(){
  var storedSearch = JSON.parse(localStorage.getItem("states"));
  if(storedSearch !== null){
    allSearch = storedSearch;
  }
  renderButtons();
}

// This on click will render out buttons from user input
$("#find-state").on("click", function(event) {
  event.preventDefault();
  // var search = $("#state-input").val();
  // allSearch.push(search)
  getStateName();
  renderButtons();
  storeSearch();
  resetSearchBar();
});

// function to classify each button being clicked
$("#buttonsHere").on("click", "button", function(){
  console.log($(this).text());
  //var stateFullName = $(this).text();
  //getStateTwoDigitCode();
})












