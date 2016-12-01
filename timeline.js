//Initialize Variables
var formtext = document.getElementById('posttext');
var form = document.getElementById('timeline');
var content = document.getElementById('content');
//Initialize Functions
var createPost = function(text) {
  var newDiv = document.createElement('div');
  newDiv.className = "post";
  var newEl = document.createElement('p');
  var newText = document.createTextNode(text);
  var likeNumberContainer = document.createElement('a');
  likeNumberContainer.setAttribute('data-likes', 0);
  var likes
  var whoLikes = [];
  var likeNumber = document.createTextNode("Like 0");
  newDiv.appendChild(newEl);
  newEl.appendChild(newText);
  newDiv.appendChild(likeNumberContainer);
  likeNumberContainer.appendChild(likeNumber);
  newDiv.addEventListener('click', function(event) {
    if (event.target.dataset.likes) {
      if (currentUser !== "none" && whoLikes.indexOf(currentUser) === -1) {
        console.log('yo');
        whoLikes.push(currentUser);

        likeNumber.textContent = "Like " + likes;
      };
    };
  });
  return newDiv;
}
var initial = function() {
  for (var i = currentProfile.posts.length-1; i > -1; i--) {
    content.appendChild(createPost(currentProfile.posts[i].text));
  };
};
//Post info object constructor
function postNotificationObject() {
  this.text = formtext.value;
  this.username = currentProfile;
  this.read = false;
};

function postObject(text) {
  this.text = text;
  this.likes = 0;
};

var timelineFunction = function() {
  initial();
  //Add and update post function
  var addPost = function() {
    if(formtext.value !== formtext.defaultValue) {
      //Add text to posts array
      currentProfile.posts[currentProfile.posts.length] = postObject(formtext.value);
      //Send to notifications of friends
      for (var i = 0; i < currentProfile.followers.length; i++) {
        currentProfile.followers[i].notifications.push(new postNotificationObject());
      };
      //Add a new post
      var formChild = content.firstChild;
      if (formChild) {
        content.insertBefore(createPost(currentProfile.posts[currentProfile.posts.length-1]), formChild);
      } else {
        content.appendChild(createPost(currentProfile.posts[currentProfile.posts.length-1]));
      };
      //Reset form
      formtext.value = formtext.defaultValue;
    };
  };
  form.removeEventListener('submit', addPost);
  form.addEventListener('submit', addPost);
};
//Default textbox text
formtext.addEventListener('click', function(e) {
  if (formtext.value === formtext.defaultValue) {
    formtext.value = "";
  };
});
formtext.addEventListener('blur', function(e) {
  if (formtext.value === "") {
    formtext.value = formtext.defaultValue;
  };
});

form.addEventListener('submit', function(submit) {submit.preventDefault();}); //Prevents form reloading the page

//likes
