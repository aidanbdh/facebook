console.log('We are here, we are here, we are here!')
var timeline = function(){
  //Initialize Variables
  var form = document.getElementById('post');
  var formtext = document.getElementById('posttext');
  var posts = [

  ]
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
  //Add post function
  var addPost = function(text){
    var newEl = document.createElement('p');
    var newText = document.createTextNode(text);
    newEl.appendChild(newText);
    form.appendChild(newEl);
  };
  //Adding existing post
  //Writing post
  //posts[posts.length] = formtext.value;
  //form.addEventListener('submit', preventDefault, false); preventDefault is not defined
  form.addEventListener('submit', function() {
    preventDefault();
    addPost(formtext.value);
  }, false);
};
timeline();
