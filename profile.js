const $edit = document.getElementById('edit');

const updateProfile = function(profile) {
  //Dom content based on user
  //Profile Name
  document.getElementById('profile-name').textContent = profile.name;
  //Profile Photo
  const photo = document.getElementById('profile-photo-image');
  photo.src = profile.profilePicture;
  //Cover Photo
  const cover = document.getElementById('cover');
  cover.style.backgroundImage = "url('" + profile.coverPhoto + "')";
  cover.style.backgroundPosition = profile.coverPosition;
  //Profile info
  document.getElementById('work').textContent = 'Work: ' + profile.work;
  document.getElementById('school').textContent = 'School: ' + profile.school;
  document.getElementById('home').textContent = 'Home: ' + profile.home;
  document.getElementById('interests').textContent = 'Interests: ' + profile.interests;
  document.getElementById('bio').textContent = 'Bio: ' + profile.bio;
  document.getElementById('quotes').textContent = "Quotes: ''" + profile.quotes + "''";
  if(currentUser === currentProfile) {
    $edit.style.display = 'block';
  } else {
    $edit.style.display = 'none';
  }
};

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const editProfile = function(edit) {
  switch (edit) {
    case 'edit':
      let $ps = document.getElementsByTagName('p');
      let $newPs = [];
      for(let i = 0; i < $ps.length; i++) {$newPs.push($ps[i])};
      $ps = $newPs.filter(element => element.getAttribute('data-profile'));
      for(let i = $ps.length-1; i > -1; i--) {
        $ps[i].firstChild.splitText($ps[i].id.length + 2);
        $span = $ps[i].lastChild;
        $label = document.createElement('label')
        $label.textContent = $ps[i].id.capitalize() + ': ';
        $label.setAttribute('data-profile', $span.textContent);
        $input = document.createElement('input');
        $input.value = $span.textContent;
        $label.appendChild($input);
        $ps[i].parentNode.replaceChild($label, $ps[i]);
      };
      event.target.dataset.profile = 'stop';
      event.target.textContent = 'Done Editing';
      break;
    case 'stop':
      let $labels = document.getElementsByTagName('label');
      console.log($labels);
      let $newLabels = [];
      for(let i = 0; i < $labels.length; i++) {$newLabels.push($labels[i])};
      $labels = $newLabels.filter(element => element.getAttribute('data-profile'));
      console.log($labels);
      for(let i = $labels.length-1; i > -1; i--) {
        $p = document.createElement('p');
        $p.textContent = $labels[i].textContent + $labels[i].lastChild.value;
        $p.setAttribute('data-profile', $labels[i].lastChild.value);
        $labels[i].parentNode.replaceChild($p, $labels[i]);
        let attribute = $labels[i].textContent.toLowerCase();
        attribute = attribute.slice(0,attribute.length-2);
        $p.id = attribute;
        currentProfile[attribute] = $labels[i].lastChild.value;
      };
      event.target.dataset.profile = 'edit';
      event.target.textContent = 'Edit Profile';
      break;
    default:
      login();
    break;
  }
}

document.addEventListener('click', () => {
  if(currentUser !== currentProfile || !event.target.dataset.profile) return;
  editProfile(event.target.dataset.profile)
});
