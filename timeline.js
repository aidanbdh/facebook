//populatePostsize Variables
var formtext = document.getElementById('posttext');
var form = document.getElementById('timeline');
var content = document.getElementById('content');

function createDomElement(tag,attributes,child) {
  const $tag = document.createElement(tag);
  for (property in attributes) {
    $tag.setAttribute(property, attributes[property]);
  };
  if (!child) return;
  for (let i = 0; i < child.length; i++) {
    if(typeof child[i] === 'string') {
      $tag.appendChild(document.createTextNode(child[i]));
    } else {
      $tag.appendChild(child[i]);
    };
  };
  return $tag;
};

const createPost = function(name,photo,year,month,day,hour,minute,text,likes,number,navigation) {
  var date = moment().set(new DateFormat(year,month,day,hour,minute)).format('l h:mm a');;
  const newDiv = createDomElement('div',{class: 'post'},[
    createDomElement('p',{},[text]),
    createDomElement('img',{
      src: photo,
      class: 'post-picture',
      'data-user': currentUser,
      'data-navigation': navigation
    },[]),
    createDomElement('h4',{
      class: 'post-username',
      'data-user': currentUser,
      'data-navigation': navigation
    },[name]),
    createDomElement('h6',{class: 'post-date'},[date]),
    createDomElement('a',{
      'data-likes': likes,
      'data-postnumber': number
    },['Like ' + likes])
  ]);
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
  this.text = text.substring(0,22);
  if(this.text.length !== 22) { return };
  this.text = this.text + '...';
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
