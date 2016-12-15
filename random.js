function postRandom() {
  var randomTime = Math.floor(Math.random() * (20000) + 10000);
  var selectProfiles = profiles.filter(function notUser(user) {
    return user !== currentUser
  });
  var randomProfile = profiles[Math.floor(Math.random() * selectProfiles.length)];
  var randomPoster = selectProfiles[Math.floor(Math.random() * selectProfiles.length)];
  var randomText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  //Add text to posts array
  randomProfile.posts.push(new Post(randomPoster,randomText));
  //Send to notifications of friends
  for (var i = 0; i < randomPoster.followers.length; i++) {
    randomPoster.followers[i].notifications.push(new PostNotification(randomPoster, randomText));
  };
  //Send to notifications of whoever's page the post is on
  if(randomPoster.followers.indexOf(randomProfile) === -1) {
    randomProfile.notifications.push(new PostNotification(randomPoster, randomText));
  };
  //Add a new post
  if(currentProfile === randomProfile) {
    var formChild = content.firstChild;
    if (formChild) {
      content.insertBefore(createPost(randomProfile.posts[randomProfile.posts.length-1].name, randomProfile.posts[randomProfile.posts.length-1].photo, randomProfile.posts[randomProfile.posts.length-1].year, randomProfile.posts[randomProfile.posts.length-1].month, randomProfile.posts[randomProfile.posts.length-1].day, randomProfile.posts[randomProfile.posts.length-1].hour, randomProfile.posts[randomProfile.posts.length-1].minute, randomProfile.posts[randomProfile.posts.length-1].text, randomProfile.posts[randomProfile.posts.length-1].likes, randomProfile.posts.length-1, randomProfile.posts[randomProfile.posts.length-1].navigation), formChild);
    } else {
      content.appendChild(createPost(randomProfile.posts[randomProfile.posts.length-1].name, randomProfile.posts[randomProfile.posts.length-1].photo, randomProfile.posts[randomProfile.posts.length-1].year, randomProfile.posts[randomProfile.posts.length-1].month, randomProfile.posts[randomProfile.posts.length-1].day, randomProfile.posts[randomProfile.posts.length-1].hour, randomProfile.posts[randomProfile.posts.length-1].minute, randomProfile.posts[randomProfile.posts.length-1].text, randomProfile.posts[randomProfile.posts.length-1].likes, randomProfile.posts.length-1, randomProfile.posts[randomProfile.posts.length-1].navigation), randomProfile.posts.length-1);
    };
  };
  setTimeout(function () {
    postRandom()
  }, randomTime);
};

postRandom();
