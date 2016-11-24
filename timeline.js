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
  newDiv.appendChild(newEl);
  newEl.appendChild(newText);
  return newDiv;
}
var initial = function() {
  for (var i=currentProfile.posts.length-1; i>-1; i--) {
    content.appendChild(createPost(currentProfile.posts[i]));
  };
};
var timelineFunction = function() {
  initial();
  //Add and update post function
  var addPost = function() {
    if(formtext.value !== formtext.defaultValue) {
      //Add text to posts array
      currentProfile.posts[currentProfile.posts.length] = formtext.value;
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
//Writing a new post
form.addEventListener('submit', function(submit) {submit.preventDefault();}); //Prevents form reloading the page
