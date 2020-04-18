var MyDate = new Date();
var yesterday;
MyDate.setDate(MyDate.getDate() - 1);
yesterday = MyDate.getFullYear() + ('0' + (MyDate.getMonth()+1)).slice(-2) + ('0' + MyDate.getDate()).slice(-2);

function getStateTwoDigitCode(stateFullName) {
    return this.stateList[stateFullName];
    }
    
    stateList = {
    'arizona': 'AZ',
    'alabama': 'AL',
    'alaska':'AK',
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
    'wyoming': 'WY'}


$.ajax({
   url: "https://covidtracking.com/api/states/daily?state=VA&date=" + yesterday,
    method: "GET"
}).then(function (response) {
    var statePositive = response.positive;
    var stateRecovered = response.recovered;
    var stateDeath = response.death;
});



$.ajax({
    url: "https://covidtracking.com/api/v1/us/current.json",
    method: "GET"
}).then(function (response) {
    var countryPositive = response[0].positive;
    var countryRecovered = response[0].recovered;
    var countryDeath = response[0].death;
});