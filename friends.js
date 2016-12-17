//Notifications

const $bell = document.getElementById('bell');
const $notifications = document.getElementById('notification');

const preview = function(notification) {
  const username = notification.username;
  const text = notification.text;
  const view = createDomElement('div',{
    style: 'height: 60px',
    'data-navigation': profiles.indexOf(notification.username),
    'data-read': currentUser.notifications.indexOf(notification)
  },[
    createDomElement('img',{
      src: username.profilePicture,
      'data-navigation': profiles.indexOf(notification.username),
      'data-read': currentUser.notifications.indexOf(notification),
      class: thumbnail
    },[]),
    createDomElement('h4',{
      'data-navigation': profiles.indexOf(notification.username),
      'data-read': currentUser.notifications.indexOf(notification),
      class: 'list-poster'
    },[username.name]),
    createDomElement('p',{
      'data-navigation': profiles.indexOf(notification.username),
      'data-read': currentUser.notifications.indexOf(notification),
      class: 'list-name'
    },[text])
  ]);
  return view;
};

const $triangle = document.getElementById('triangle');
const $bubble = document.getElementById('bubble');

const notify = function() {
  $notifications.style.display = 'block';
  $triangle.style.display = 'block';
  $notifications.innerHTML = ''
  for (let i = currentUser.notifications.length-1; i > currentUser.notifications.length-4; i--) {
    $notifications.appendChild(preview(currentUser.notifications[i]));
  };
  if(currentUser.notifications.length === 0) return;
  $bubble.style.display = 'block';
};

$bell.addEventListener('click', notify);

document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
  if (event.target === $notifications || event.target === $bell) return;
  $triangle.style.display = 'none';
  $notifications.style.display = 'none';
  if(currentUser.notifications.length === 0) {
    $bubble.style.display = 'none';
  } else {
    $bubble.style.display = 'block';
  };
});

$notifications.addEventListener('click', function(event) {
  if(!event.target.dataset.read) return;
  currentUser.notifications.splice(event.target.dataset.read,1);
  if(currentUser.notifications.length === 0) {
    $bubble.style.display = 'none';
  } else {
    $bubble.style.display = 'block';
  };
});

//Friending

const $friend = document.getElementById('friend');

const friendEvent = function() {
  $friend.textContent = 'Add friend';
  if ($friend.dataset.friendEvent === 'add') return;
  $friend.addEventListener('click', addFriend);
  $friend.removeEventListener('click', removeFriend);
  $friend.dataset.friendEvent = 'add';
};

const unfriendEvent = function() {
  $friend.textContent = 'unfriend';
  if ($friend.dataset.friendEvent === 'remove') return;
  $friend.addEventListener('click', removeFriend);
  $friend.removeEventListener('click', addFriend);
  $friend.dataset.friendEvent = 'remove';
};

const addFriend = function() {
  if (currentUser === 'none') {
    login();
  } else {
    currentUser.friends.push(currentProfile);
    currentProfile.followers.push(currentUser);
    unfriendEvent();
  };
};

const removeFriend = function() {
  if (currentUser.friends.indexOf(currentProfile) !== -1) {
    currentUser.friends.splice(currentUser.friends.indexOf(currentProfile),1);
    currentProfile.followers.splice(currentProfile.followers.indexOf(currentUser),1);
  };
  friendEvent();
};

friendEvent();
