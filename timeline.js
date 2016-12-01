//Initialize Variables
var formtext = document.getElementById('posttext');
var form = document.getElementById('timeline');
var content = document.getElementById('content');
//Initialize Functions
var createPost = function(text,likes,number) {
  var newDiv = document.createElement('div');
  newDiv.className = "post";
  var newEl = document.createElement('p');
  var newText = document.createTextNode(text);
  var likeNumberContainer = document.createElement('a');
  likeNumberContainer.setAttribute('data-likes', likes);
  var likeNumber = document.createTextNode("Like " + likes);
  likeNumberContainer.setAttribute('data-postnumber', number);
  newDiv.appendChild(newEl);
  newEl.appendChild(newText);
  newDiv.appendChild(likeNumberContainer);
  likeNumberContainer.appendChild(likeNumber);
  return newDiv;
}
var initial = function() {
  for (var i = currentProfile.posts.length-1; i > -1; i--) {
    console.log(currentProfile.posts);
    console.log(currentProfile.posts[i]);
    content.appendChild(createPost(currentProfile.posts[i].text, currentProfile.posts[i].likes ,i));
  };
};
//Post info object constructor
function postNotificationObject() {
  this.text = formtext.value;
  this.username = currentProfile;
  this.read = false;
};

var timelineFunction = function() {
  initial();
  //Add and update post function
  var addPost = function() {
    if(formtext.value !== formtext.defaultValue) {
      //Add text to posts array
      currentProfile.posts.push(new postObject(formtext.value));
      //Send to notifications of friends
      for (var i = 0; i < currentProfile.followers.length; i++) {
        currentProfile.followers[i].notifications.push(new postNotificationObject());
      };
      //Add a new post
      var formChild = content.firstChild;
      if (formChild) {
        content.insertBefore(createPost(currentProfile.posts[currentProfile.posts.length-1].text, currentProfile.posts[currentProfile.posts.length-1].likes, currentProfile.posts.length-1), formChild);
      } else {
        console.log(currentProfile.posts.length-1);
        content.appendChild(createPost(currentProfile.posts[currentProfile.posts.length-1].text, currentProfile.posts[currentProfile.posts.length-1].likes, currentProfile.posts.length-1));
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
var container = document.getElementById('container');

content.addEventListener('click', function(event) {
  if (event.target.dataset.likes) {
    var who = event.target.dataset.postnumber;
    if (currentUser !== "none" && currentProfile.posts[who].whoLikes.indexOf(currentUser) === -1) {
      console.log('yo');
      currentProfile.posts[who].whoLikes.push(currentUser);
      event.target.dataset.likes++;
      var likes = event.target.dataset.likes;
      event.target.textContent = "Like " + likes;
    };
  };
});
