var $bell = document.getElementById('bell');
var $notifications = document.getElementById('notification');

var notify = function() {
  $notifications.style.display = 'block';
};

$bell.addEventListener('click', notify);

document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
  if (event.target !== $notifications && event.target!== $bell) {
    $notifications.style.display = "none";
  };
});
