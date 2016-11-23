console.log('We are here, we are here, we are here!')
var timelineFunction = function(){
  //Clear timeline
  /*var timeline = document.getElementById('timeline');
  var timelineDiv = timeline.getElementsByTagName('div');
  console.log(timelineDiv);
  for(i=0; i<currentProfile.posts.length; i++) {
    timeline.removeChild(timelineDiv[0]);
  };*/
  //Initialize Variables
  var form = document.getElementById('post');
  var formtext = document.getElementById('posttext');
  //Default textbox text
  formtext.addEventListener('click', function(e) {
    if(formtext.value === formtext.defaultValue) {
      formtext.value = "";
    };
  }, false);
  formtext.addEventListener('blur', function(e) {
    if(formtext.value === "") {
      formtext.value = formtext.defaultValue;
    };
  }, false);
  var initial = function(){
    for (var i=currentProfile.posts.length-1; i>-1; i--) {
      var newDiv = document.createElement('div');
      newDiv.className = "post";
      var newEl = document.createElement('p');
      var newText = document.createTextNode(currentProfile.posts[i]);
      newDiv.appendChild(newEl);
      newEl.appendChild(newText);
      form.appendChild(newDiv);
    };
  };
  initial();
  //Add post function
  var addPost = function(){
    if(formtext.value !== formtext.defaultValue) {
      //Add text to posts array
      currentProfile.posts[currentProfile.posts.length] = formtext.value;
      //Add a new post
      var newDiv = document.createElement('div');
      newDiv.className = "post";
      var newEl = document.createElement('p');
      var newText = document.createTextNode(currentProfile.posts[currentProfile.posts.length-1]);
      newDiv.appendChild(newEl);
      newEl.appendChild(newText);
      var formChild = form.firstChild;
      formChild = formChild.nextSibling;
      formChild = formChild.nextSibling;
      formChild = formChild.nextSibling;
      formChild = formChild.nextSibling;
      form.insertBefore(newDiv,formChild);
      //Reset form
      formtext.value = formtext.defaultValue;
    };
  };
  //Writing a new post
  form.addEventListener('submit', function(submit){submit.preventDefault();}, false); //Prevents form reloading the page
  form.addEventListener('submit', addPost, false);
};
