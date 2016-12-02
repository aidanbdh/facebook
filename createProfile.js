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
  switchViews('profile-container', 'new-profile-container');
  //Get inputs
  var $form = document.getElementById('new-profile-form');
  var $name = document.getElementById('new-name');
  var $user = document.getElementById('new-user');
  var $password = document.getElementById('new-password');
  var $profilePicture = document.getElementById('new-profile-picture');
  var $coverPhoto = document.getElementById('new-cover-photo');
  var $work = document.getElementById('new-work');
  var $school = document.getElementById('new-school');
  var $home = document.getElementById('new-home');
  var $interests = document.getElementById('new-interests');
  var $bio = document.getElementById('new-bio');
  var $quotes = document.getElementById('new-quotes');
  var $submit = document.getElementById('profile-button');
};
