function CreateProfile (user, password, profilePicture, coverPhoto, name, work, school, home, interests, bio, quotes) {
  this.user = user;
  this.password = password;
  this.profilePicture = profilePicture;
  this.coverPhoto = coverPhoto;
  this.coverPosition = 'center';
  this.name = name;
  this.work = work;
  this.school = school;
  this.home = home;
  this.interests = interests;
  this.bio;
  this.quotes = quotes;
  this.posts = [];
  this.friends = [];
  this.followers = [];
  this.notifications = [{
    text: "Welcome to Cranium Literature!",
    username: profiles[0],
    read: false
  }];
};

var createProfile = function() {
  //Switch views
  var $profileContainer = document.getElementById('profile-container');
  $profileContainer.style.display = 'none';
  var $newProfileContainer = document.getElementById('new-profile-container');
  $newProfileContainer.style.display = 'block';

};
