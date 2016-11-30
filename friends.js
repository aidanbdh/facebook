//Notifications

var $bell = document.getElementById('bell');
var $notifications = document.getElementById('notification');

var notify = function() {
  $notifications.style.display = 'block';
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
    $friend.textContent = "Unfriend";
    $friend.removeEventListener('click', addFriend);
    $friend.addEventListener('click', removeFriend);
  };
  console.log(currentUser.friends);
};

var removeFriend = function() {
  console.log(currentUser.friends.indexOf(currentProfile));
  if (currentUser.friends.indexOf(currentProfile) !== -1) {
      currentUser.friends.splice(currentUser.friends.indexOf(currentProfile),1);
  };
  $friend.textContent = "Add Friend";
  $friend.removeEventListener('click', removeFriend);
  $friend.addEventListener('click', addFriend);
  console.log(currentUser.friends);
};

$friend.addEventListener('click', addFriend);
