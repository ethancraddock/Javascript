

  // Get references to the tbody element, input field and button

var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#dateTime");
var $cityInput = document.querySelector("#city")
var $stateInput = document.querySelector("#state")
var $countryInput = document.querySelector("#country")
var $shapeInput = document.querySelector("#shape")
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");




// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Add an event listener to the reset, call handleResetButtonClick when clicked
//$resetBtn.addEventListener("click", handleResetButtonClick);


// Set filtered data to data.js initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
	console.log($tbody)
	$tbody.innerHTML = "";
	for (var i = 0; i < filteredData.length; i++) {
		// Get the current data object and its fields
		var data = filteredData[i];
		var fields = Object.keys(data);

		// Create a new row i nthe tbody, set the index to be i + startingIndex
		var $row = $tbody.insertRow(i);
		for (var j =0; j < fields.length; j++) {
			// For every field in the address object, create a new cell at set its inner 
			//text to be the current value at the current address's field
			var field = fields[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = data[field];
		}
	}
}





function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, 
  //lowercase the string
  var filteredValue = {datetime : $dateTimeInput.value.trim().toLowerCase(),
  	city : $cityInput.value.trim().toLowerCase(),
  	state : $stateInput.value.trim().toLowerCase(),
  	country : $countryInput.value.trim().toLowerCase(),
  	shape : $shapeInput.value.trim().toLowerCase()
};

//console.log(filteredValue)


// Set filteredData to an array of all date/time whose "date/time" matches the filter
filteredData = dataSet.filter(function(data){ 
	var ufoDate = data.datetime.toLowerCase();
	var ufoCity = data.city.toLowerCase();
	var ufoState = data.state.toLowerCase();
	var ufoCountry = data.country.toLowerCase();
	var ufoShape = data.shape.toLowerCase();

	if(ufoDate === "" || ufoDate === filteredValue.datetime
		&& ufoCity === "" || ufoCity === filteredValue.city
		&& ufoState === "" || ufoState === filteredValue.state
		&& ufoCountry === "" || ufoCountry === filteredValue.country
		&& ufoShape === "" || ufoShape === filteredValue.shape){
		return true;
	}

	return false;

  });
   renderTable();
}

renderTable();
