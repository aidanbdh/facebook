var updateProfile = function(profile) {
  //Dom content based on user
  //Profile Name
  document.getElementById('profile-name').textContent = profile.name;
  //Profile Photo
  var photo = document.getElementById('profile-photo-image');
  photo.src = profile.profilePicture;
  //Cover Photo
  var cover = document.getElementById('cover');
  cover.style.backgroundImage = "url('" + profile.coverPhoto + "')";
  cover.style.backgroundPosition = profile.coverPosition;
  //Profile info
  document.getElementById('work').textContent = 'Work: ' + profile.work;
  document.getElementById('school').textContent = 'School: ' + profile.school;
  document.getElementById('home').textContent = 'Home: ' + profile.home;
  document.getElementById('interests').textContent = 'Interests: ' + profile.interests;
  document.getElementById('bio').textContent = 'Bio: ' + profile.bio;
  document.getElementById('quotes').textContent = "Quotes: ''" + profile.quotes + "''";
};
