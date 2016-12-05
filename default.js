//Global profile info variables
var profiles = [
  {
    user: 'guest',
    password: '',
    profilePicture: 'http://cdn2.hubspot.net/hub/126289/file-329555845-jpg/images/brain1.jpg',
    coverPhoto: 'http://www.sarabestnutrition.com/wp-content/uploads/2016/03/brain3.png',
    coverPosition:'center',
    name: 'Cranium Literature',
    work: '',
    school: '',
    home: '',
    interests: [],
    bio: '',
    quotes:'',
    posts: [
      {
        name: 'Aidan Harvey',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105015263574_c9c95137b4c2ea5b822d_512.png',
        'year': 2016,
        'month': 10,
        'day': 31,
        'hour': 17,
        'minute': 0,
        text: 'Name: aidanbdh Password: ilovecode',
        likes: 0,
        whoLikes: []
      },
      {
        name: 'Ron Perris',
        photo: 'https://avatars3.githubusercontent.com/u/963451?v=3&s=400',
        'year': 2016,
        'month': 11,
        'day': -3,
        'hour': 15,
        'minute': 0,
        text: 'Name: ronperris Password: jqueryforlife',
        likes: 0,
        whoLikes: []
      },
      {
        name: 'Tim Davis',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105043765510_b72b4ba7f80738e50dab_512.jpg',
        'year': 2016,
        'month': 11,
        'day': -3,
        'hour': 11,
        'minute': 0,
        text: 'Name: timdavis Password: $$$',
        likes: 0,
        whoLikes: []
      }
    ],
    friends: [],
    followers: [],
    notifications: []
  },
  {
    user: 'aidanbdh',
    password: 'ilovecode',
    profilePicture: 'https://avatars.slack-edge.com/2016-11-14/105015263574_c9c95137b4c2ea5b822d_512.png',
    coverPhoto: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14265003_331213783891679_3932103480719368665_n.jpg?oh=383515512d48f54fed8b18ab95223b69&oe=58BC340C',
    coverPosition: 'center top 42%',
    name: 'Aidan Harvey',
    work: 'none',
    school: 'Orange County Code School',
    home: 'Fountain Valley',
    interests: [' Coding', ' Podcasts', ' Cats'],
    bio: 'Working towards becoming a software developer! Check out some of my projects at www.github.com/aidanbdh',
    quotes: 'The last thing I want to do is hurt you. And after that, the to-do list is complete and I can go home and watch tv. -Welcome to Nightvale',
    posts: [
      /*1: {text: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ornare lacus, id maximus est hendrerit nec. Cras vel congue nunc, eget lobortis nisi. Suspendisse non erat neque. Nulla luctus ut velit vestibulum suscipit. Cras quis ultrices diam. Fusce semper diam vel odio euismod facilisis. Vivamus quis dignissim tortor. Nam viverra libero id enim tincidunt aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus metus at mi ullamcorper, ac posuere ipsum sodales. Maecenas malesuada faucibus enim sit amet feugiat. Etiam elit nisi, accumsan et tempus ut, auctor sit amet nisl.'; likes: 0;},
      2: {text: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ornare lacus, id maximus est hendrerit nec. Cras vel congue nunc, eget lobortis nisi. Suspendisse non erat neque. Nulla luctus ut velit vestibulum suscipit. Cras quis ultrices diam. Fusce semper diam vel odio euismod facilisis. Vivamus quis dignissim tortor. Nam viverra libero id enim tincidunt aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus metus at mi ullamcorper, ac posuere ipsum sodales. Maecenas malesuada faucibus enim sit amet feugiat. Etiam elit nisi, accumsan et tempus ut, auctor sit amet nisl.'; likes: 0;},
      3: {text: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ornare lacus, id maximus est hendrerit nec. Cras vel congue nunc, eget lobortis nisi. Suspendisse non erat neque. Nulla luctus ut velit vestibulum suscipit. Cras quis ultrices diam. Fusce semper diam vel odio euismod facilisis. Vivamus quis dignissim tortor. Nam viverra libero id enim tincidunt aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus metus at mi ullamcorper, ac posuere ipsum sodales. Maecenas malesuada faucibus enim sit amet feugiat. Etiam elit nisi, accumsan et tempus ut, auctor sit amet nisl.'; likes: 0;}
    */],
    friends: [],
    followers: [],
    notifications: []
  },
  {
    user: 'ronperris',
    password: 'jqueryforlife',
    profilePicture: 'https://avatars3.githubusercontent.com/u/963451?v=3&s=400',
    coverPhoto: 'http://photos1.meetupstatic.com/photos/event/5/b/3/c/highres_441803356.jpeg',
    coverPosition: 'top center',
    name: 'Ron Perris',
    work: 'Orange County Code School',
    school: 'Unknown',
    home: 'Unknown',
    interests: [' Coding', ' Teaching', ' Probably other things.'],
    bio: "Hi, I'm Mr. Perris's Bio. He lived. He lives. He will have lived. As will everyone. Probably.",
    quotes:'I use jQuery in 100% of my projects! -Nor sirrep',
    posts: [
      //1:{text: 'Can't wait to look at Aidan's pull requests! Save the best for last I always say'; likes: 0;}
    ],
    friends: [],
    followers: [],
    notifications: []
  },
  {
    user: 'timdavis',
    password: '$$$',
    profilePicture: 'https://avatars.slack-edge.com/2016-11-14/105043765510_b72b4ba7f80738e50dab_512.jpg',
    coverPhoto: 'https://avatars3.githubusercontent.com/u/7432943?v=3&s=460',
    coverPosition: 'left top 25%',
    name: 'Tim Davis',
    work: 'Orange County Code School',
    school: "Colonial America, 1800's",
    home: 'Somewhere over the Rainbow',
    interests: [' Coding', ' Teaching', 'Jaming', '$$$'],
    bio: "Hi, I'm Mr. Davis's Bio. He lived. He lives. He will have lived. As will everyone. Probably not him.",
    quotes:'Veni Vindi Vichi Vector Victor Victor  -Tim Davinchi',
    posts: [
      /*1: {text: 'Aidan'; likes: 0;},
      2: {text: 'I have almost found the Philosophers Stone! I can stop drinking unicorns blood and absorbing the souls of children to continue my existence!'; likes: 0;}
    */],
    friends: [],
    followers: [],
    notifications: []
  },
  {
    user: 'adrian',
    password: 'pokemon',
    profilePicture: 'http://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807',
    coverPhoto: 'http://www.planwallpaper.com/static/images/Pokemon_wallpaper_3_bLP3szt.jpg',
    coverPosition: 'left top 25%',
    name: 'Adrian Garcia',
    work: 'Bruegers Bagels',
    school: 'NHS',
    home: 'Napa',
    interests: [' Pokemon', ' Super Smash Bros', ' Bagels'],
    bio: "Hi, I'm Mr. Garcia's Bio. He lived. He lives. He will have lived. As will everyone. Probably not him.",
    quotes:"Gotta catch'em all - Ash Ketchum",
    posts: [
      /*1: {text: 'I just got Pokemon Sun! Can't wait to play it!'; likes: 0;},
      2: {text: 'Super Smash Bros tournament tomorrow! Still need 5 more people! Bring your own controller and some food!'; likes: 0;}
    */],
    friends: [],
    followers: [],
    notifications: []
  }
];

function DateFormat(year,month,day,hour,minute) {
  this.year = year;
  this.month = month;
  this.day = day;
  this.hour = hour;
  this.minute = minute;
};

function postObject(text) {
  this.name = currentUser.name;
  this.photo = currentUser.profilePicture;
  this.year = moment().get('year');
  this.month = moment().get('month');
  this.day = moment().get('day');
  this.hour = moment().get('hour');
  this.minute = moment().get('minute');
  this.text = text;
  this.likes = 0;
  this.whoLikes = [];
};

var switchViews = function(view, newView) {
  var $view1 = document.getElementById(view);
  $view1.style.display = 'none';
  var $view2 = document.getElementById(newView);
  $view2.style.display = 'block';
};

var currentProfile = profiles[0];
var currentUser = 'none';

//HomeButton
var $homePage = document.getElementById('homepage');
$homePage.addEventListener('click', function(e) {
  if(currentUser !== 'none') {
    currentProfile = currentUser;
    content.innerHTML = '';
    addTimeline();
    updateProfile(currentProfile);
    $friend.style.display = 'none';
  };
});

var loginButton = document.getElementById('login');
var $signup = document.getElementById('signup');

//Login
var login = function () {
  var username = prompt('What is your username?');
  if (!username) return;
  for (var i = 0; i < profiles.length; i++) {
    if (username === profiles[i].user) {
      var password = prompt('What is your password?');
      if (password !== profiles[i].password) password = prompt('Please reneter your password');
      if (password !== profiles[i].password) return;
      currentUser = profiles[i];
      if (currentUser === currentProfile) {
        $friend.style.display = 'none';
      } else if (currentUser.friends.indexOf(currentProfile) !== -1) {
        unfriendEvent();
      };
      loginButton.textContent= 'Logout';
      loginButton.removeEventListener('click', loginPress);
      loginButton.addEventListener('click', logout);
      $signup.style.display = 'none';
      return;
    } else if (i === profiles.length-1) {
      var next = confirm('Username not found. Would you like to make a new profile?');
      if (next) {
        switchViews('profile-container', 'new-profile-container');
        $user.value = username;
      } else {
        login();
      };
    };
  };
};

//Login button
var loginPress = function() {
  login();
  //Remove elements
  content.innerHTML = '';
  //Render page again with new infos
  switchViews('new-profile-container', 'profile-container');
  addTimeline();
  updateProfile(currentProfile);
}

//Logout
var logout = function() {
  var out = window.confirm('Do you want to logout?');
  if (!out) return;
  //Remove elements
  content.innerHTML = '';
  //Reset profile
  currentUser = 'none';
  $friend.style.display= 'block';
  friendEvent();
  addTimeline();
  updateProfile(currentProfile);
  loginButton.textContent= 'Login';
  loginButton.addEventListener('click', loginPress);
  loginButton.removeEventListener('click', logout);
  $signup.style.display = 'inline-block';
};

loginButton.addEventListener('click', loginPress);

$signup.addEventListener('click', function(e) {
  switchViews('profile-container', 'new-profile-container');
});

updateProfile(currentProfile);
addTimeline();
