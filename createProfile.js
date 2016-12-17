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
  this.notifications = [];
};

//Get inputs
const $form = document.getElementById('new-profile-form');
const $name = document.getElementById('new-name');
const $user = document.getElementById('new-user');
const $password = document.getElementById('new-password');
const $profilePicture = document.getElementById('new-profile-picture');
const $coverPhoto = document.getElementById('new-cover-photo');
const $work = document.getElementById('new-work');
const $school = document.getElementById('new-school');
const $home = document.getElementById('new-home');
const $interests = document.getElementById('new-interests');
const $bio = document.getElementById('new-bio');
const $quotes = document.getElementById('new-quotes');
const $submit = document.getElementById('profile-button');

const createProfile = function() {
  let name = $name.value;
  let user = $user.value;
  let password = $password.value;
  let profilePicture = $profilePicture.value;
  let coverPhoto = $coverPhoto.value;
  let work = $work.value;
  let school = $school.value;
  let home = $home.value;
  let interests = $interests.value;
  let bio = $bio.value;
  let quotes = $quotes.value;
  for (let i = 0; i < profiles.length; i++) {
    if(profiles[i].user === user) {
      alert("That username is already in use. Please try again");
      $user.value = '';
      user = '';
    };
  };
  if(!user || !name || !password) return;
  let newUser = new CreateProfile (user, password, profilePicture, coverPhoto, name, work, school, home, interests, bio, quotes);
  profiles.push(newUser);
};

let submitProfile = function(){
  createProfile();
  if (!$name.value || !$user.value || !$password.value) return;
  switchViews('profile-container');
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
  currentUser.notifications.push({text: 'Welcome to Cranium Literature!', username: profiles[0]})
  $bubble.style.display = 'block';
};

$form.addEventListener('submit', function(submit) {
  submit.preventDefault(); //Prevents form reloading the page
  submitProfile();
});
