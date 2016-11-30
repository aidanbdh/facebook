//Notifications

var $bell = document.getElementById('bell');
var $notifications = document.getElementById('notification');

var preview = function(i) {
  var username = currentUser.notifications[i].username;
  var text = currentUser.notifications[i].text;
  var view = document.createElement('div');
  view.style.height = "60px";
  var thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', username.profilePicture);
  thumbnail.classList.add('thumbnail');
  view.appendChild(thumbnail);
  var name = document.createElement('p');
  name.textContent = text;
  name.classList.add('listName');
  view.appendChild(name);
  return view;
};

var notify = function() {
  $notifications.style.display = 'block';
  $notifications.innerHTML = ""
  for (var i = currentUser.notifications.length-1; i > currentUser.notifications.length-4; i--) {
    $notifications.appendChild(preview(i));
  };
};

$bell.addEventListener('click', notify);

document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
  if (event.target !== $notifications && event.target!== $bell) {
    $notifications.style.display = "none";
  };
});

//Friending

var $friend = document.getElementById('friend');

var addFriend = function() {
  if (currentUser === "none") {
    login();
  } else {
    currentUser.friends.push(currentProfile);
    currentProfile.followers.push(currentUser);
    $friend.textContent = "Unfriend";
    $friend.removeEventListener('click', addFriend);
    $friend.addEventListener('click', removeFriend);
  };
};

var removeFriend = function() {
  if (currentUser.friends.indexOf(currentProfile) !== -1) {
    currentUser.friends.splice(currentUser.friends.indexOf(currentProfile),1);
    currentProfile.followers.splice(currentProfile.followers.indexOf(currentUser),1);
  };
  $friend.textContent = "Add friend";
  $friend.removeEventListener('click', removeFriend);
  $friend.addEventListener('click', addFriend);
};

$friend.addEventListener('click', addFriend);
