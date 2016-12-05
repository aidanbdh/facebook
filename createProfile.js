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
  this.bio = bio;
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

var createProfile = function() {
  var name = $name.value;
  var user = $user.value;
  var password = $password.value;
  var profilePicture = $profilePicture.value;
  var coverPhoto = $coverPhoto.value;
  var work = $work.value;
  var school = $school.value;
  var home = $home.value;
  var interests = $interests.value;
  var bio = $bio.value;
  var quotes = $quotes.value;
  for (var i = 0; i < profiles.length; i++) {
    if(profiles[i].user === user) {
      alert("That username is already in use. Please try again");
      $user.value = '';
      user = '';
    };
  };
  if(!user || !name || !password) return;
  var newUser = new CreateProfile (user, password, profilePicture, coverPhoto, name, work, school, home, interests, bio, quotes);
  profiles.push(newUser);
};

var submitProfile = function(){
  createProfile();
  if (!$name.value || !$user.value || !$password.value) return;
  switchViews('new-profile-container', 'profile-container');
  currentUser = profiles[profiles.length-1];
  currentProfile = profiles[profiles.length-1];
  loginButton.textContent= 'Logout';
  loginButton.removeEventListener('click', loginPress);
  loginButton.addEventListener('click', logout);
  $signup.style.display = 'none';
  $friend.style.display = 'none';
  content.innerHTML = '';
  addTimeline();
  updateProfile(currentProfile);
};

$form.addEventListener('submit', function(submit) {
  submit.preventDefault(); //Prevents form reloading the page
  submitProfile();
});
