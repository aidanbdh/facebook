//Array for results
let results = [];

//Find results and add to array
const search = function(text) {
  results = [];
  text = text.toLowerCase();
  let searchLength;
  if (text.length <= 3) {
    searchLength = 1;
  } else {
    searchLength = text.length-3;
  };
  for (let j = 0; j < searchLength; j++) {
    text = text.trim();
    text = text.slice(0, text.length-j);
    text = text.trim();
    //Name
    let name;
    for (let i = 0; i < profiles.length; i++) {
      name = profiles[i].name.toLowerCase();
      for (let k = 0; k < name.length-3; k++) {
        if (name.indexOf(text,k) !== -1) {
          results.push(i);
        };
      };
    };
    //Username
    let user;
    for (let i = 0; i < profiles.length; i++) {
      user = profiles[i].user.toLowerCase();
      for (let k = 0; k < user.length-3; k++) {
        if (user.indexOf(text,k) !== -1) {
          results.push(i);
        };
      };
    };
  };
  //Remove doubles
  let newResults = [];
  for (let i = 0; i < results.length; i++) {
    if(newResults.indexOf(results[i]) == -1 && results[i] !== currentProfile) {
      newResults.push(results[i]);
    };
  };
  results = newResults;
};

//Create results from array and display name and profile picture
const searchBox = function() {
  //3 results or less
  let l = results.length;
  if (l > 3) { l = 3; };
  //Create results

  let views = [];
  const box = document.createElement('div');
  for (let i = 0; i < l; i++) {
    const result = results[i];
    const view = createDomElement('div',{'data-navigation': result},[
      createDomElement('img',{
        'data-navigation': result,
        'src': profiles[result].profilePicture,
        class: 'thumbnail'
      },[]),
      createDomElement('p',{
        'data-navigation': result,
        class: 'list-name'
      },[profiles[result].name])
    ]);
    views.push(view);
  };
  views.push(createDomElement('p',{id: 'more-results'},['See More Results']));
  return views;
 };

const searchPage = function() {
  let views = [];
  for (const i = 0; i < results.length; i++) {
   const result = results[i];
   const view = createDomElement('div',{'data-navigation': result},[
     createDomElement('img',{
       'data-navigation': result,
       src: profiles[result].profilePicture,
       class: 'search-picture'
     },[]),
     createDomElement('h5',{
       'data-navigation': result,
       class: 'search-name'
     },[profiles[result].name]),
     createDomElement('p',{'data-navigation': result},[profiles[result].bio]),
   ]);
   views.push(view);
 };
 return views;
};

const searchText = document.getElementById('search');
const dropdown = document.getElementById('dropdown');

//Search function
const doSearch = function() {
  //Add results to array
  search(searchText.value);
  //Remove previous results
  dropdown.innerHTML = '';
  //Add results to Dom
  const views = searchBox();
  for (var i = 0; i < views.length; i++) {
    dropdown.appendChild(views[i]);
  }
};

//Reveals dropdown
searchText.addEventListener('focus', function(e) {
  dropdown.style.display = 'block';
});

//Hides dropdown
document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
  if (event.target !== dropdown && event.target!== searchText) {
    dropdown.style.display = 'none';
    dropdown.innerHTML = '';
  };
});

//Dynamic searchText
searchText.addEventListener('input', doSearch);


//Navigates to search page
const $searchResults = document.getElementById('search-results');
let searchValue = searchText.value;

document.addEventListener('click', function(event) {
  if(event.target.id !== 'more-results') return;
  $searchResults.innerHTML = '';
  search(searchValue);
  switchViews('search-container');
  views = searchPage();
  for (let i = 0; i < views.length; i++) {
    $searchResults.appendChild(views[i]);
  }
});

//Default searchbox text
searchText.addEventListener('focus', function(e) {
  searchText.value = '';
  doSearch();
});
searchText.addEventListener('blur', function(e) {
  searchValue = searchText.value;
  searchText.value = searchText.defaultValue;
});
