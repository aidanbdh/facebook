console.log('We are here, we are here, we are here!')
var timeline = function(){
  //Initialize Variables
  var form = document.getElementById('post');
  var formtext = document.getElementById('posttext');
  var posts = [
    "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ornare lacus, id maximus est hendrerit nec. Cras vel congue nunc, eget lobortis nisi. Suspendisse non erat neque. Nulla luctus ut velit vestibulum suscipit. Cras quis ultrices diam. Fusce semper diam vel odio euismod facilisis. Vivamus quis dignissim tortor. Nam viverra libero id enim tincidunt aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus metus at mi ullamcorper, ac posuere ipsum sodales. Maecenas malesuada faucibus enim sit amet feugiat. Etiam elit nisi, accumsan et tempus ut, auctor sit amet nisl.",
    "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ornare lacus, id maximus est hendrerit nec. Cras vel congue nunc, eget lobortis nisi. Suspendisse non erat neque. Nulla luctus ut velit vestibulum suscipit. Cras quis ultrices diam. Fusce semper diam vel odio euismod facilisis. Vivamus quis dignissim tortor. Nam viverra libero id enim tincidunt aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus metus at mi ullamcorper, ac posuere ipsum sodales. Maecenas malesuada faucibus enim sit amet feugiat. Etiam elit nisi, accumsan et tempus ut, auctor sit amet nisl.",
    "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ornare lacus, id maximus est hendrerit nec. Cras vel congue nunc, eget lobortis nisi. Suspendisse non erat neque. Nulla luctus ut velit vestibulum suscipit. Cras quis ultrices diam. Fusce semper diam vel odio euismod facilisis. Vivamus quis dignissim tortor. Nam viverra libero id enim tincidunt aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus metus at mi ullamcorper, ac posuere ipsum sodales. Maecenas malesuada faucibus enim sit amet feugiat. Etiam elit nisi, accumsan et tempus ut, auctor sit amet nisl."
  ];
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
    for (var i=posts.length-1; i>-1; i--) {
      var newDiv = document.createElement('div');
      newDiv.className = "post";
      var newEl = document.createElement('p');
      var newText = document.createTextNode(posts[i]);
      newDiv.appendChild(newEl);
      newEl.appendChild(newText);
      form.appendChild(newDiv);
    };
  };
  initial();
  //Add post function
  var addPost = function(){
    //Add text to posts array
    posts[posts.length] = formtext.value;
    //Add a new post
    var newDiv = document.createElement('div');
    newDiv.className = "post";
    var newEl = document.createElement('p');
    var newText = document.createTextNode(posts[posts.length-1]);
    newDiv.appendChild(newEl);
    newEl.appendChild(newText);
    var formChild = form.lastChild;
    for (var i=0; i<posts.length-1; i++){
      formChild = formChild.previousSibling;
    }
    form.insertBefore(newDiv,formChild);
    //Reset form
    formtext.value = formtext.defaultValue;
  };
  //Writing a new post
  form.addEventListener('submit', function(submit){submit.preventDefault();}, false); //Prevents form reloading the page
  form.addEventListener('submit', addPost, false);
};
timeline();
