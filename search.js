//Array for results
let results = [];

function fixText(text) {
  text = text.toLowerCase();
  return text.split(' ');
}

//Find results and add to array
function search(text) {
  results = [];
  text = fixText(text);
  for (let i = 0; i < text.length; i++) {
    for (let j = text[i].length; j > 0; j--) {
      text[i] = text[i].slice(0, j);
      const resultsA = profiles.filter(value => {
        const name = fixText(value.name);
        return (name.filter((value, index) => {return name[index].indexOf(text[i]) !== -1}))[0];
      });
      const resultsB = profiles.filter(value => {
        const user = fixText(value.user);
        return (user.filter((value, index) => {return user[index].indexOf(text[i]) !== -1}))[0];
      });
      results = results.concat(resultsA,resultsB);
    };
  };
  results = results.filter((value, index) => {
    return results.indexOf(value, 0) === index;
  });
  console.log(results);
  return results;
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
    const view = createDomElement('div',{'data-navigation': profiles.indexOf(results[i])},[
      createDomElement('img',{
        'data-navigation': profiles.indexOf(results[i]),
        'src': results[i].profilePicture,
        class: 'thumbnail'
      },[]),
      createDomElement('p',{
        'data-navigation': profiles.indexOf(results[i]),
        class: 'list-name'
      },[results[i].name])
    ]);
    views.push(view);
  };
  views.push(createDomElement('p',{id: 'more-results'},['See More Results']));
  return views;
 };

const searchPage = function() {
  let views = [];
  for (let i = 0; i < results.length; i++) {
   const view = createDomElement('div',{'data-navigation': profiles.indexOf(results[i])},[
     createDomElement('img',{
       'data-navigation': profiles.indexOf(results[i]),
       src: results[i].profilePicture,
       class: 'search-picture'
     },[]),
     createDomElement('h5',{
       'data-navigation': profiles.indexOf(results[i]),
       class: 'search-name'
     },[results[i].name]),
     createDomElement('p',{'data-navigation': i},[results[i].bio]),
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
