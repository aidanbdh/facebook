//Global profile info variables
var profiles = [
  {
    user: 'guest',
    password: '',
    profilePicture: 'http://cdn2.hubspot.net/hub/126289/file-329555845-jpg/images/brain1.jpg',
    coverPhoto: '#',
    coverPosition:'center',
    name: 'Cranium Literature',
    work: 'Cranium Literature Inc.',
    school: 'None',
    home: 'Irvine',
    interests: ['You'],
    bio: 'Cranium Literature was founded in 2016 by Aidan Harvey.',
    quotes:'The best way to get something done is to do it.',
    posts: [
      {
        name: 'Aidan Harvey',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105015263574_c9c95137b4c2ea5b822d_512.png',
        'year': 2016,
        'month': 10,
        'day': 21,
        'hour': 17,
        'minute': 0,
        text: 'Name: aidanbdh Password: ilovecode',
        likes: 0,
        whoLikes: [],
        navigation: 1
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
        whoLikes: [],
        navigation: 2
      },
      {
        name: 'Tim Davis',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105043765510_b72b4ba7f80738e50dab_512.jpg',
        'year': 2016,
        'month': 11,
        'day': -3,
        'hour': 11,
        'minute': 0,
        text: 'Name: timdavis Password: timdav.is',
        likes: 0,
        whoLikes: [],
        navigation: 3
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
    quotes: 'Nothing in life is free',
    posts: [
      {
        name: 'Aidan Harvey',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105015263574_c9c95137b4c2ea5b822d_512.png',
        'year': 2016,
        'month': 10,
        'day': 21,
        'hour': 17,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 1
      },
      {
        name: 'Ron Perris',
        photo: 'https://avatars3.githubusercontent.com/u/963451?v=3&s=400',
        'year': 2016,
        'month': 11,
        'day': -3,
        'hour': 15,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 2
      },
      {
        name: 'Tim Davis',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105043765510_b72b4ba7f80738e50dab_512.jpg',
        'year': 2016,
        'month': 11,
        'day': -3,
        'hour': 11,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 3
      }
    ],
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
    quotes:'Hold stick near centre of its length. Moisten pointed end in mouth. Insert in tooth space, blunt end next to gum. Use gentle in-out motion.',
    posts: [
      {
        name: 'Aidan Harvey',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105015263574_c9c95137b4c2ea5b822d_512.png',
        'year': 2016,
        'month': 10,
        'day': 21,
        'hour': 17,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 1
      },
      {
        name: 'Ron Perris',
        photo: 'https://avatars3.githubusercontent.com/u/963451?v=3&s=400',
        'year': 2016,
        'month': 11,
        'day': -3,
        'hour': 15,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 2
      },
      {
        name: 'Tim Davis',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105043765510_b72b4ba7f80738e50dab_512.jpg',
        'year': 2016,
        'month': 11,
        'day': -3,
        'hour': 11,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 3
      }
    ],
    friends: [],
    followers: [],
    notifications: []
  },
  {
    user: 'timdavis',
    password: 'timdav.is',
    profilePicture: 'https://avatars.slack-edge.com/2016-11-14/105043765510_b72b4ba7f80738e50dab_512.jpg',
    coverPhoto: 'https://avatars3.githubusercontent.com/u/7432943?v=3&s=460',
    coverPosition: 'left top 25%',
    name: 'Tim Davis',
    work: 'Orange County Code School',
    school: "Self-taught",
    home: 'Irvine-ish',
    interests: [' Coding', ' Teaching', 'Jaming'],
    bio: "Hi, I'm Mr. Davis's Bio. He lived. He lives. He will have lived. As will everyone. Probably not him.",
    quotes:"If the world was made of fish, we'd all be sharks",
    posts: [
      /*1: {text: 'Aidan'; likes: 0;},
      2: {text: 'I have almost found the Philosophers Stone! I can stop drinking unicorns blood and absorbing the souls of children to continue my existence!'; likes: 0;}
    */],
    friends: [],
    followers: [],
    notifications: []
  },
  {
    user: 'sarahgaeta',
    password: 'gaetaa',
    profilePicture: 'http://thebeatofthedrum.org/wp-content/uploads/2014/09/Yo-G.-e1411155721599.jpg',
    coverPhoto: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14265003_331213783891679_3932103480719368665_n.jpg?oh=383515512d48f54fed8b18ab95223b69&oe=58BC340C',
    coverPosition: 'center top 42%',
    name: 'Sarah Gaeta',
    work: 'Pottery Barn',
    school: 'NHS',
    home: 'Fountain Valley',
    interests: ['Cats ','Music ',' Clothes ',' Makeup',' Good TV Shows',' Cars'],
    bio: "I'm a student living in Fountain Valley. I am taking a gap year to figure out my major and live life. I have two cats, Marble and Pan, and they are always making trouble",
    quotes: "The world is what you make of it",
    posts: [
      {
        name: 'Adrian Garcia',
        photo: 'http://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807',
        'year': 2016,
        'month': 6,
        'day': 25,
        'hour': 11,
        'minute': 34,
        text: 'Hey Sarah! How are you doing?',
        likes: 0,
        whoLikes: [],
        navigation: 5
      },
      {
        name: 'Allen Abrams',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLC1f8T0u57RdG3NfNC6k04t7eCHnykvOQzdDAW5sE7iVTejKPg',
        'year': 2016,
        'month': 9,
        'day': 3,
        'hour': 19,
        'minute': 57,
        text: "I know we've never met but I'm Allen",
        likes: 0,
        whoLikes: [],
        navigation: 6
      },
      {
        name: 'Aidan Harvey',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105015263574_c9c95137b4c2ea5b822d_512.png',
        'year': 2016,
        'month': 11,
        'day': 2,
        'hour': 15,
        'minute': 17,
        text: 'What would you like for dinner tonight?',
        likes: 0,
        whoLikes: [],
        navigation: 1
      }
    ],
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
    quotes: "Gotta catch'em all",
    posts: [
      {
        name: 'Aidan Harvey',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105015263574_c9c95137b4c2ea5b822d_512.png',
        'year': 2016,
        'month': 10,
        'day': 21,
        'hour': 17,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 1
      },
      {
        name: 'Ron Perris',
        photo: 'https://avatars3.githubusercontent.com/u/963451?v=3&s=400',
        'year': 2016,
        'month': 11,
        'day': -3,
        'hour': 15,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 2
      },
      {
        name: 'Tim Davis',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105043765510_b72b4ba7f80738e50dab_512.jpg',
        'year': 2016,
        'month': 11,
        'day': -3,
        'hour': 11,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 3
      },
    ],
    friends: [],
    followers: [],
    notifications: []
  },
  {
    user: 'allenaviator',
    password: 'planeman',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLC1f8T0u57RdG3NfNC6k04t7eCHnykvOQzdDAW5sE7iVTejKPg',
    coverPhoto: 'http://www.militarygifts.com/images/STS-124%20Crew%20with%20Militarygifts.com%20Caps.jpg',
    name: 'Allen Abrams',
    work: 'NASA aerospace division',
    school: 'Houston Piloting Academy',
    home: 'Houston, Texas',
    interests: ['Airplanes ','Gliders ','Helicopters ','Bird Watching '],
    bio: "I'm a pilot, based in Houston who loves the air and everything in it. I fly often in my custom glider and go birdwatching on the weekends.",
    quotes: 'If you love it, let it fly',
    posts: [
      {
        name: 'Aidan Harvey',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105015263574_c9c95137b4c2ea5b822d_512.png',
        'year': 2016,
        'month': 10,
        'day': 21,
        'hour': 17,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 1
      },
      {
        name: 'Ron Perris',
        photo: 'https://avatars3.githubusercontent.com/u/963451?v=3&s=400',
        'year': 2016,
        'month': 11,
        'day': -3,
        'hour': 15,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 2
      },
      {
        name: 'Tim Davis',
        photo: 'https://avatars.slack-edge.com/2016-11-14/105043765510_b72b4ba7f80738e50dab_512.jpg',
        'year': 2016,
        'month': 11,
        'day': -3,
        'hour': 11,
        'minute': 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 0,
        whoLikes: [],
        navigation: 3
      }
    ],
    friends: [],
    followers: [],
    notifications: []
  },
  {
    user: 'littlejoebig',
    password: 'bigjoelittlejoe',
    profilePicture: 'https://scontent.xx.fbcdn.net/v/t1.0-0/p526x296/12249852_10156310412210397_8449129781333500823_n.jpg?oh=efad6062782072054bcd0a6dd15235bb&oe=58F1518D',
    coverPhoto: 'https://scontent.xx.fbcdn.net/v/t1.0-9/11108941_10155452541740397_4157346515918516410_n.jpg?oh=64cee90d9c4386409b2766ce951b34e9&oe=58B89DFB',
    coverPosition:'center',
    name: 'Joe Gutierrez',
    work: 'None',
    school: 'Orange County Code School',
    home: 'Gilroy, Ca',
    interests: ['Coding ', 'Green Energy '],
    bio: "Hi, I'm Mr. Gutierrez's Bio. He lived. He lives. He will have lived. As will everyone.",
    quotes:'No favorite quotes to show',
    posts: [],
    friends: [],
    followers: [],
    notifications: []
  },
  {
    user: 'anson.wong.3975',
    password: 'Ansonator',
    profilePicture: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c50.50.621.621/s160x160/598489_360650547334055_2013125930_n.jpg?oh=5808f3945655e1162c482997d4f18360&oe=58F56B04',
    coverPhoto: 'https://cdn.theatlantic.com/assets/media/img/mt/2015/10/Cygnus_v3_BandW/facebook.jpg?1444687096',
    coverPosition:'center',
    name: 'Anson Wong',
    work: 'None',
    school: 'Orange County Code School',
    home: 'Honolulu, Hawaii',
    interests: ['Coding ', 'Glee '],
    bio: "Hi, I'm Mr. Wong's Bio. He lived. He lives. He will have lived. As will everyone.",
    quotes:'No favorite quotes to show',
    posts: [],
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

function postObject(user,text) {
  this.name = user.name;
  this.photo = user.profilePicture;
  this.year = moment().get('year');
  this.month = moment().get('month');
  this.day = moment().get('day');
  this.hour = moment().get('hour');
  this.minute = moment().get('minute');
  this.text = text;
  this.likes = 0;
  this.whoLikes = [];
  this.navigation = profiles.indexOf(user);
};


var currentView = 'profile-container';

var switchViews = function(newView) {
  var $view1 = document.getElementById(currentView);
  $view1.style.display = 'none';
  var $view2 = document.getElementById(newView);
  $view2.style.display = 'block';
  currentView = newView;
};

var currentProfile = profiles[0];
var currentUser = 'none';

//HomeButton
var $homePage = document.getElementById('homepage');
$homePage.addEventListener('click', function(e) {
  currentProfile = profiles[0];
  content.innerHTML = '';
  updateProfile(currentProfile);
  addTimeline();
  switchViews('profile-container');
  if (currentUser === 'none') return;
  currentProfile = currentUser;
  content.innerHTML = '';
  addTimeline();
  updateProfile(currentProfile);
  $friend.style.display = 'none';
  if(currentUser.notifications.length === 0) {
    $bubble.style.display = 'none';
  } else {
    $bubble.style.display = 'block';
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
      if(currentUser.notifications.length === 0) {
        $bubble.style.display = 'none';
      } else {
        $bubble.style.display = 'block';
      };
      return;
    } else if (i === profiles.length-1) {
      var next = confirm('Username not found. Would you like to make a new profile?');
      if (next) {
        switchViews('new-profile-container');
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
  switchViews('profile-container');
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
  $bubble.style.display = 'none';
};

loginButton.addEventListener('click', loginPress);

$signup.addEventListener('click', function(e) {
  switchViews('new-profile-container');
});
updateProfile(currentProfile);
addTimeline();

//Navigating to other page
document.addEventListener('click', function(event) {
  if(!event.target.dataset.navigation) return;
  switchViews('profile-container');
  currentProfile = profiles[event.target.dataset.navigation];
  content.innerHTML = '';
  addTimeline();
  updateProfile(currentProfile);
  $friend.style.display = 'block';
  switchViews('profile-container');
  if (currentUser === 'none') {
    friendEvent();
  } else if (currentUser.friends.indexOf(currentProfile) !== -1) {
    unfriendEvent();
  } else if (currentUser === currentProfile) {
    $friend.style.display = 'none';
  } else {
    friendEvent();
  };
  dropdown.style.display = 'none';
  dropdown.innerHTML = '';
  if(currentUser.notifications.length === 0) {
    $bubble.style.display = 'none';
  } else {
    $bubble.style.display = 'block';
  };
});
