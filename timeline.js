console.log('We are here, we are here, we are here!')
var timeline = function(){
  var form = document.getElementById('post');
  var formtext = document.getElementById('posttext');
  formtext.addEventListener('blur', function(e) {
    if(formtext.value === formtext.defaultValue) {
      formtext.value = "";
    };
  }, false);
  var addPost = function(){
    if(formtext.value !== formtext.defaultValue) {
      var newEl = document.createElement('p');
      var newText = document.createTextNode(formtext.value);
      newEl.appendChild(newText);
      form.appendChild(newEl);
    };
  };
  form.addEventListener('submit', addPost, false);
};
timeline();
