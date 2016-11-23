var profileFunction = function() {
  //Dom content based on user
  //Profile Name
  document.getElementById('profilename').textContent = currentProfile.name;
  //Profile Photo
  var photo = document.getElementById('profilephotoimg');
  photo.src = currentProfile.profilePicture;
  //Cover Photo
  var cover = document.getElementById('cover');
  cover.style.backgroundImage = currentProfile.coverPhoto;
  //Profile info
  document.getElementById('work').textContent = "Work: " + currentProfile.work;
  document.getElementById('school').textContent = "School: " + currentProfile.school;
  document.getElementById('home').textContent = "Home: " + currentProfile.home;
  document.getElementById('interests').textContent = "Interests: " + currentProfile.interests;
  document.getElementById('bio').textContent = "Bio: " + currentProfile.bio;
  document.getElementById('quotes').textContent = 'Quotes: "' + currentProfile.quotes + '"';
};
