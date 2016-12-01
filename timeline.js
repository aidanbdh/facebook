//populatePostsize Variables
var formtext = document.getElementById('posttext');
var form = document.getElementById('timeline');
var content = document.getElementById('content');
//populatePostsize Functions
var createPost = function(text,likes,number) {
  var newDiv = document.createElement('div');
  newDiv.className = 'post';
  var newEl = document.createElement('p');
  var newText = document.createTextNode(text);
  var likeNumberContainer = document.createElement('a');
  likeNumberContainer.setAttribute('data-likes', likes);
  var likeNumber = document.createTextNode('Like ' + likes);
  likeNumberContainer.setAttribute('data-postnumber', number);
  newDiv.appendChild(newEl);
  newEl.appendChild(newText);
  newDiv.appendChild(likeNumberContainer);
  likeNumberContainer.appendChild(likeNumber);
  return newDiv;
}
var populatePosts = function() {
  for (var i = currentProfile.posts.length-1; i > -1; i--) {
    content.appendChild(createPost(currentProfile.posts[i].text, currentProfile.posts[i].likes ,i));
  };
};
//Post info object constructor
function PostNotification() {
  this.text = formtext.value;
  this.username = currentProfile;
  this.read = false;
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
    if(formtext.value !== formtext.defaultValue) {
      //Add text to posts array
      currentProfile.posts.push(new postObject(formtext.value));
      //Send to notifications of friends
      for (var i = 0; i < currentProfile.followers.length; i++) {
        currentProfile.followers[i].notifications.push(new PostNotification());
      };
      //Add a new post
      var formChild = content.firstChild;
      if (formChild) {
        content.insertBefore(createPost(currentProfile.posts[currentProfile.posts.length-1].text, currentProfile.posts[currentProfile.posts.length-1].likes, currentProfile.posts.length-1), formChild);
        console.log(currentProfile.posts[currentProfile.posts.length-1].likes);
      } else {
        console.log(currentProfile.posts[currentProfile.posts.length-1].likes);
        content.appendChild(createPost(currentProfile.posts[currentProfile.posts.length-1].text, currentProfile.posts[currentProfile.posts.length-1].likes, currentProfile.posts.length-1));
      };
      //Reset form
      formtext.value = formtext.defaultValue;
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
