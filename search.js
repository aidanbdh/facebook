//Array for results
var results = [];

//Find results and add to array
var search = function(text) {
  //Fix text
  text = text.toLowerCase();
  text = text.trim();
  var profile = Object.keys(profiles);
  //Empty array
  results = [];
  //Add results to return array
  //Name
  var name = "";
  for (var i = 0; i < profile.length; i++) {
    name = profiles[profile[i]].name.toLowerCase();
    name = name.trim();
    if (!name.indexOf(text) ) {
      results.push(profile[i]);
    };
  };
  //Username
  for (var i = 0; i < profile.length; i++) {
    if (!profile[i].indexOf(text)) {
      results.push(profile[i]);
    };
  };
  //Bio
  var bio = "";
  for (var i = 0; i < profile.length; i++) {
    bio = profiles[profile[i]].bio.toLowerCase();
    bio = bio.trim();
    if (!bio.indexOf(text) ) {
      results.push(profile[i]);
    };
  };
  //Posts (future update)
  /*
  var posts = "";
  for (var i = 0; i < profile.length; i++) {
    for (var j = 0; j < profiles[profile[i]].posts.length; j++) {
      posts += profiles[profile[i]].posts[j];
    };
    posts = posts.toLowerCase();
    posts = posts.trim();
    if (!posts.indexOf(text) ) {
      results.push(profile[i]);
    };
  };*/
  //None (future update)
  /*
  */
  //Remove doubles
  var newResults = [];
  for (var i = 0; i < results.length; i++) {
    if(newResults.indexOf(results[i]) == -1) {
      newResults.push(results[i]);
    };
  };
  results = newResults;
  console.log("results" + results);
};

//Create results from array and display name and profile picture
var searchBox = function() {
  //3 results or less
  var l = results.length;
  if (l > 3) { l = 3; };
  //Create results
  var box = document.createElement('div');
  for (var i = 0; i < l; i++) {
    var view = document.createElement('div');
    var thumbnail = document.createElement('img');
    var result = results[i];
    thumbnail.setAttribute('src', profiles[result].profilePicture);
    thumbnail.classList.add('thumbnail');
    view.appendChild(thumbnail);
    var name = document.createElement('p');
    name.textContent = profiles[result].name;
    name.classList.add('listName');
    view.appendChild(name);
    box.appendChild(view);
    //Navigates to other page
    var temp = profiles[result];
    view.addEventListener('click', function(e) {
      currentProfile = temp;
      content.innerHTML = "";
      timelineFunction();
      profileFunction();
      dropdown.style.display = "none";
    });
  };
  return box;
 };

var searchText = document.getElementById("search");
var dropdown = document.getElementById('dropdown');

//Search function
var doSearch = function() {
  //Add results to array
  search(searchText.value);
  //Add results to html
  var box = searchBox();
  //Remove previous results
  dropdown.innerHTML = "";
  //Add results to Dom
  dropdown.appendChild(box);
};

//Reveals dropdown
searchText.addEventListener('focus', function(e) {
  dropdown.style.display = "block";
});

//Hides dropdown
document.getElementById('container').addEventListener('click', function(e) {
  dropdown.style.display = "none";
});

//Dynamic searchText
searchText.addEventListener('input', doSearch);

//Default searchbox text
searchText.addEventListener('focus', function(e) {
  searchText.value = "";
});
searchText.addEventListener('blur', function(e) {
  searchText.value = searchText.defaultValue;
});
