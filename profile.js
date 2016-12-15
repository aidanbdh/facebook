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

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const editProfile = function(edit) {
  if(!!edit) {
    let $ps = document.querySelectorAll('#profile p');
    for(let i = $ps.length-1; i > -1; i--) {
      $ps[i].firstChild.splitText($ps[i].id.length + 2);
      $span = $ps[i].lastChild;
      $label = document.createElement('label')
      $label.textContent = capitalize($ps[i].id) + ': ';
      $input = document.createElement('input');
      $input.value = $span.textContent;
      $label.appendChild($input);
      $ps[i].parentNode.replaceChild($label, $ps[i]);
    };
    event.target.dataset.profile = '';
    event.target.textContent = 'Done Editing';
  } else {
    let $labels = document.querySelectorAll('#profile label');
    for(let i = $labels.length-1; i > -1; i--) {
      $p = document.createElement('p');
      $p.textContent = $labels[i].textContent + $labels[i].lastChild.value;
      $labels[i].parentNode.replaceChild($p, $labels[i]);
      let attribute = $labels[i].textContent.toLowerCase();
      attribute = attribute.slice(0,attribute.length-2);
      $p.id = attribute;
      currentProfile[attribute] = $labels[i].lastChild.value;
    };
    event.target.dataset.profile = 'edit';
    event.target.textContent = 'Edit Profile';
  };
};

document.addEventListener('click', () => {
  if(currentUser !== currentProfile || event.target.id !== 'edit') return;
  editProfile(event.target.dataset.profile)
});
