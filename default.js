//Global profile info variables
var profiles = {
  guest : {
    password: "",
    profilePicture: "http://cdn2.hubspot.net/hub/126289/file-329555845-jpg/images/brain1.jpg",
    coverPhoto: "http://www.sarabestnutrition.com/wp-content/uploads/2016/03/brain3.png",
    coverPosition:"center",
    name: 'Cranium Literature',
    work: "",
    school: "",
    home: "",
    interests: [],
    bio: "",
    quotes:"",
    posts: [
      "Name: aidanbdh Password: ilovecode",
      "Name: ronperris Password: jqueryforlife",
      "Name: timdavis Password: $$$"
    ],
    friends: [],
    followers: [],
    notifications: []
  },
  aidanbdh: {
    password: "ilovecode",
    profilePicture: "https://avatars.slack-edge.com/2016-11-14/105015263574_c9c95137b4c2ea5b822d_512.png",
    coverPhoto: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14265003_331213783891679_3932103480719368665_n.jpg?oh=383515512d48f54fed8b18ab95223b69&oe=58BC340C",
    coverPosition: "center top 42%",
    name: 'Aidan Harvey',
    work: 'none',
    school: 'Orange County Code School',
    home: 'Fountain Valley',
    interests: [' Coding', ' Podcasts', ' Cats'],
    bio: "Working towards becoming a software developer! Check out some of my projects at www.github.com/aidanbdh",
    quotes: "The last thing I want to do is hurt you. And after that, the to-do list is complete and I can go home and watch tv. -Welcome to Nightvale",
    posts: [
      "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ornare lacus, id maximus est hendrerit nec. Cras vel congue nunc, eget lobortis nisi. Suspendisse non erat neque. Nulla luctus ut velit vestibulum suscipit. Cras quis ultrices diam. Fusce semper diam vel odio euismod facilisis. Vivamus quis dignissim tortor. Nam viverra libero id enim tincidunt aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus metus at mi ullamcorper, ac posuere ipsum sodales. Maecenas malesuada faucibus enim sit amet feugiat. Etiam elit nisi, accumsan et tempus ut, auctor sit amet nisl.",
      "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ornare lacus, id maximus est hendrerit nec. Cras vel congue nunc, eget lobortis nisi. Suspendisse non erat neque. Nulla luctus ut velit vestibulum suscipit. Cras quis ultrices diam. Fusce semper diam vel odio euismod facilisis. Vivamus quis dignissim tortor. Nam viverra libero id enim tincidunt aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus metus at mi ullamcorper, ac posuere ipsum sodales. Maecenas malesuada faucibus enim sit amet feugiat. Etiam elit nisi, accumsan et tempus ut, auctor sit amet nisl.",
      "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis ornare lacus, id maximus est hendrerit nec. Cras vel congue nunc, eget lobortis nisi. Suspendisse non erat neque. Nulla luctus ut velit vestibulum suscipit. Cras quis ultrices diam. Fusce semper diam vel odio euismod facilisis. Vivamus quis dignissim tortor. Nam viverra libero id enim tincidunt aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus metus at mi ullamcorper, ac posuere ipsum sodales. Maecenas malesuada faucibus enim sit amet feugiat. Etiam elit nisi, accumsan et tempus ut, auctor sit amet nisl."
    ],
    friends: [],
    followers: [],
    notifications: []
  },
  ronperris: {
    password: "jqueryforlife",
    profilePicture: "https://avatars3.githubusercontent.com/u/963451?v=3&s=400",
    coverPhoto: "http://photos1.meetupstatic.com/photos/event/5/b/3/c/highres_441803356.jpeg",
    coverPosition: "top center",
    name: 'Ron Perris',
    work: "Orange County Code School",
    school: "Unknown",
    home: "Unknown",
    interests: [' Coding', ' Teaching', ' Probably other things.'],
    bio: "Hi, I'm Mr. Perris's Bio. He lived. He lives. He will have lived. As will everyone. Probably.",
    quotes:"I use jQuery in 100% of my projects! -Nor sirrep",
    posts: [
      "Can't wait to look at Aidan's pull requests! Save the best for last I always say"
    ],
    friends: [],
    followers: [],
    notifications: []
  },
  timdavis: {
    password: "$$$",
    profilePicture: "https://avatars.slack-edge.com/2016-11-14/105043765510_b72b4ba7f80738e50dab_512.jpg",
    coverPhoto: "https://avatars3.githubusercontent.com/u/7432943?v=3&s=460",
    coverPosition: "left top 25%",
    name: 'Tim Davis',
    work: "Orange County Code School",
    school: "Colonial America, 1800's",
    home: "Somewhere over the Rainbow",
    interests: [' Coding', ' Teaching', 'Jaming', '$$$'],
    bio: "Hi, I'm Mr. Davis's Bio. He lived. He lives. He will have lived. As will everyone. Probably not him.",
    quotes:"Veni Vindi Vichi Vector Victor Victor  -Tim Davinchi",
    posts: [
      "Aidan",
      "I have almost found the Philosophers Stone! I can stop drinking unicorns blood and absorbing the souls of children to continue my existence!"
    ],
    friends: [],
    followers: [],
    notifications: []
  },
  adrian: {
    password: "pokemon",
    profilePicture: "http://vignette3.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807",
    coverPhoto: "http://www.planwallpaper.com/static/images/Pokemon_wallpaper_3_bLP3szt.jpg",
    coverPosition: "left top 25%",
    name: 'Adrian Garcia',
    work: "Bruegers Bagels",
    school: "NHS",
    home: "Napa",
    interests: [' Pokemon', ' Super Smash Bros', ' Bagels'],
    bio: "Hi, I'm Mr. Garcia's Bio. He lived. He lives. He will have lived. As will everyone. Probably not him.",
    quotes:"Gotta catch'em all - Ash Ketchum",
    posts: [
      "I just got Pokemon Sun! Can't wait to play it!",
      "Super Smash Bros tournament tomorrow! Still need 5 more people! Bring your own controller and some food!"
    ],
    friends: [],
    followers: [],
    notifications: []
  }
};

var loginButton = document.getElementById('login');
var currentProfile = profiles.guest;
var currentUser = "none";
var addedPost = 0;

//Login
var login = function () {
  var username = prompt("What is your username?");
  if (username) {
    var password = prompt("What is your password?");
    if (password === profiles[username].password) {
      currentUser = profiles[username];
      if (currentUser === currentProfile) {
        $friend.style.display = "none";
      }
      loginButton.textContent= "Logout";
      loginButton.removeEventListener('click', loginPress);
      loginButton.addEventListener('click', logout);
    };
  };
};

//Login button
var loginPress = function() {
  login();
  //Remove elements
  content.innerHTML = "";
  //Render page again with new info
  if (currentUser !== "none") {
    currentProfile = currentUser;
  };
  timelineFunction();
  profileFunction();
  loginButton.removeEventListener('click', loginPress);
  loginButton.addEventListener('click', logout);
}

//Logout
var logout = function() {
  var out = window.confirm("Do you want to logout?");
  if (out) {
    //Remove elements
    content.innerHTML = "";
    //Reset profile
    currentUser = "none";
    $friend.style.display= "block";
    timelineFunction();
    profileFunction();
    loginButton.textContent= "Login";
    loginButton.addEventListener('click', loginPress);
    loginButton.removeEventListener('click', logout);
  };
};

loginButton.addEventListener('click', loginPress);
profileFunction();
timelineFunction();

profiles.guest.followers.push(profiles.aidanbdh);
profiles.aidanbdh.friends.push(profiles.guest);
