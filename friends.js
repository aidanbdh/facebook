//Notifications

var $bell = document.getElementById('bell');
var $notifications = document.getElementById('notification');

var preview = function(notification) {
  var username = notification.username;
  var text = notification.text;
  var view = document.createElement('div');
  view.style.height = '60px';
  view.setAttribute('data-navigation', profiles.indexOf(notification.username));
  view.setAttribute('data-read', currentUser.notifications.indexOf(notification));
  var thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', username.profilePicture);
  thumbnail.setAttribute('data-navigation', profiles.indexOf(notification.username));
  thumbnail.setAttribute('data-read', currentUser.notifications.indexOf(notification));
  thumbnail.classList.add('thumbnail');
  view.appendChild(thumbnail);
  var name = document.createElement('p');
  name.textContent = text;
  name.classList.add('listName');
  name.setAttribute('data-navigation', profiles.indexOf(notification.username.name));
  name.setAttribute('data-read', currentUser.notifications.indexOf(notification));
  view.appendChild(name);
  return view;
};

$triangle = document.getElementById('triangle');

var notify = function() {
  $notifications.style.display = 'block';
  $triangle.style.display = 'block';
  $notifications.innerHTML = ''
  for (var i = currentUser.notifications.length-1; i > currentUser.notifications.length-4; i--) {
    $notifications.appendChild(preview(currentUser.notifications[i]));
  };
};

$bell.addEventListener('click', notify);

document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
  if (event.target !== $notifications && event.target!== $bell) {
    $triangle.style.display = 'none';
    $notifications.style.display = 'none';
  };
});

$notifications.addEventListener('click', function(event) {
  if(!event.target.dataset.read) return;
  currentUser.notifications.splice(event.target.dataset.read,1);
});

//Friending

var $friend = document.getElementById('friend');

var friendEvent = function() {
  $friend.textContent = 'Add friend';
  if ($friend.dataset.friendEvent === 'add') return;
  $friend.addEventListener('click', addFriend);
  $friend.removeEventListener('click', removeFriend);
  $friend.dataset.friendEvent = 'add';
};

var unfriendEvent = function() {
  $friend.textContent = 'unfriend';
  if ($friend.dataset.friendEvent === 'remove') return;
  $friend.addEventListener('click', removeFriend);
  $friend.removeEventListener('click', addFriend);
  $friend.dataset.friendEvent = 'remove';
};

var addFriend = function() {
  if (currentUser === 'none') {
    login();
  } else {
    currentUser.friends.push(currentProfile);
    currentProfile.followers.push(currentUser);
    unfriendEvent();
  };
};

var removeFriend = function() {
  if (currentUser.friends.indexOf(currentProfile) !== -1) {
    currentUser.friends.splice(currentUser.friends.indexOf(currentProfile),1);
    currentProfile.followers.splice(currentProfile.followers.indexOf(currentUser),1);
  };
  friendEvent();
};

friendEvent();
