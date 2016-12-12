//populatePostsize Variables
var formtext = document.getElementById('posttext');
var form = document.getElementById('timeline');
var content = document.getElementById('content');

var createPost = function(name,photo,year,month,day,hour,minute,text,likes,number,navigation) {
  var newDiv = document.createElement('div');
  newDiv.className = 'post';
  var newImg = document.createElement('img');
  newImg.setAttribute('src', photo);
  newImg.classList.add('post-picture');
  newImg.setAttribute('data-user', currentUser);
  newImg.setAttribute('data-navigation', navigation);
  var newUser = document.createElement('h4');
  newUser.classList.add('post-username');
  newUser.setAttribute('data-user', currentUser)
  newUser.setAttribute('data-navigation', navigation);
  var newUserText = document.createTextNode(name);
  var newDate = document.createElement('h6');
  newDate.classList.add('post-date');
  var dateText = moment().set(new DateFormat(year,month,day,hour,minute)).format('l h:mm a');;
  var newDateText = document.createTextNode(dateText)
  var newEl = document.createElement('p');
  var newText = document.createTextNode(text);
  var likeNumberContainer = document.createElement('a');
  likeNumberContainer.setAttribute('data-likes', likes);
  var likeNumber = document.createTextNode('Like ' + likes);
  likeNumberContainer.setAttribute('data-postnumber', number);
  newDiv.appendChild(newEl);
  newDiv.appendChild(newImg);
  newDiv.appendChild(newUser);
  newUser.appendChild(newUserText);
  newDiv.appendChild(newDate);
  newDate.appendChild(newDateText);
  newEl.appendChild(newText);
  newDiv.appendChild(likeNumberContainer);
  likeNumberContainer.appendChild(likeNumber);
  return newDiv;
}
var populatePosts = function() {
  for (var i = currentProfile.posts.length-1; i > -1; i--) {
    content.appendChild(createPost(currentProfile.posts[i].name, currentProfile.posts[i].photo, currentProfile.posts[i].year, currentProfile.posts[i].month, currentProfile.posts[i].day, currentProfile.posts[i].hour, currentProfile.posts[i].minute, currentProfile.posts[i].text, currentProfile.posts[i].likes , i, currentProfile.posts[i].navigation));
  };
};
//Post info object constructor
function PostNotification(username,text) {
  this.username = username;
  this.text = text;
};

var setListener = function (target, type, listener) {
  target.addEventListener(type, listener);
  return function() {
    target.removeEventListener(type, listener);
  };
};

var removeListener = function() {};

var addTimeline = function() {
  populatePosts();
  //Add and update post function
  removeListener();
  var addPost = function() {
    if(formtext.value !== formtext.defaultValue && currentUser !== 'none') {
      //Add text to posts array
      currentProfile.posts.push(new Post(currentUser,formtext.value));
      //Send to notifications of friends
      for (var i = 0; i < currentUser.followers.length; i++) {
        currentUser.followers[i].notifications.push(new PostNotification(currentUser, formtext.value));
      };
      //Send to notifications of whoever's page the post is on
      if(currentUser.followers.indexOf(currentProfile) === -1) {
        currentProfile.notifications.push(new PostNotification(currentUser, formtext.value));
      };
      //Add a new post
      var formChild = content.firstChild;
      if (formChild) {
        content.insertBefore(createPost(currentProfile.posts[currentProfile.posts.length-1].name, currentProfile.posts[currentProfile.posts.length-1].photo, currentProfile.posts[currentProfile.posts.length-1].year, currentProfile.posts[currentProfile.posts.length-1].month, currentProfile.posts[currentProfile.posts.length-1].day, currentProfile.posts[currentProfile.posts.length-1].hour, currentProfile.posts[currentProfile.posts.length-1].minute, currentProfile.posts[currentProfile.posts.length-1].text, currentProfile.posts[currentProfile.posts.length-1].likes, currentProfile.posts.length-1, currentProfile.posts[currentProfile.posts.length-1].navigation), formChild);
      } else {
        content.appendChild(createPost(currentProfile.posts[currentProfile.posts.length-1].name, currentProfile.posts[currentProfile.posts.length-1].photo, currentProfile.posts[currentProfile.posts.length-1].year, currentProfile.posts[currentProfile.posts.length-1].month, currentProfile.posts[currentProfile.posts.length-1].day, currentProfile.posts[currentProfile.posts.length-1].hour, currentProfile.posts[currentProfile.posts.length-1].minute, currentProfile.posts[currentProfile.posts.length-1].text, currentProfile.posts[currentProfile.posts.length-1].likes, currentProfile.posts.length-1, currentProfile.posts[currentProfile.posts.length-1].navigation), currentProfile.posts.length-1);
      };
      //Reset form
      formtext.value = formtext.defaultValue;
    } else if (currentUser === 'none') {
      login();
    };
  };
  removeListener = setListener(form, 'submit', addPost);
  form.addEventListener('submit', addPost);
};
//Default textbox text
formtext.addEventListener('click', function(e) {
  if (formtext.value === formtext.defaultValue) {
    formtext.value = '';
  };
});
formtext.addEventListener('blur', function(e) {
  if (formtext.value === '') {
    formtext.value = formtext.defaultValue;
  };
});

form.addEventListener('submit', function(submit) {submit.preventDefault();}); //Prevents form reloading the page

//likes
content.addEventListener('click', function(event) {
  if (!event.target.dataset.likes) return;
  var who = event.target.dataset.postnumber;
  if (currentUser !== 'none' && currentProfile.posts[who].whoLikes.indexOf(currentUser) === -1) {
    currentProfile.posts[who].whoLikes.push(currentUser);
    currentProfile.posts[who].likes++;
    event.target.dataset.likes++;
    var likes = event.target.dataset.likes;
    event.target.textContent = 'Like ' + likes;
  } else if (currentUser !== 'none') {
    currentProfile.posts[who].whoLikes.splice(currentProfile.posts[who].whoLikes.indexOf(currentUser),1);
    currentProfile.posts[who].likes--;
    event.target.dataset.likes--;
    var likes = event.target.dataset.likes;
    event.target.textContent = 'Like ' + likes;
  };
});
