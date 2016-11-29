var results = [];
var search = function(text) {
  //Fix text
  text = text.toLowerCase();
  text = text.trim();
  var profile = Object.keys(profiles);
  //Add results to return array (username)
  for (var i = 0; i < Object.keys(profiles).length; i++) {
    if (!profile[i].indexOf(text)) {
      results.push(profile[i]);
    };
  };
};

var navBar = document.getElementById('navbar');

var searchBox = function() {
  var dropdown = document.createElement('div');
  dropdown.id = 'dropdown';
  //Create results in dropdown
  for (var i = 0; i < results.length; i++) {
    var result = results[i];
    var view = document.createElement('div');
    var thumbnail = document.createElement('img');
    thumbnail.setAttribute('src', profiles[result].profilePicture);
    thumbnail.classList.add('thumbnail');
    view.appendChild(thumbnail);
    var name = document.createElement('p');
    name.textContent = profiles[result].name;
    name.classList.add('listName');
    view.appendChild(name);
    dropdown.appendChild(view);
  };
  return dropdown;
};

var searchText = document.getElementById("searchtext");

var doSearch = function() {
  search(searchText.value);
  var dropdown = searchBox();

  if (searchText.value !== "" && searchText.value !== searchText.defaultValue) {
    navBar.appendChild(dropdown);
  };
};

//Default searchbox text
searchText.addEventListener('click', function(e) {
  if (searchText.value === searchText.defaultValue) {
    searchText.value = "";
  };
});
searchText.addEventListener('blur', function(e) {
  if (searchText.value === "") {
    searchText.value = searchText.defaultValue;
  };
});

var searchButton = document.getElementById('button');
var searchForm = document.getElementById('search');

//Remove dropdown
if ((!searchButton.activeElement || !searchForm.activeElement) && document.getElementById('dropdown')) {
  document.getElementById('dropdown').innerHTML = " ";
};

searchButton.addEventListener('click', doSearch);
searchForm.addEventListener('click', function(submit) {submit.preventDefault();}); //Prevents form reloading the page
