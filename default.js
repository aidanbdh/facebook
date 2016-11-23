//Global profile info variables
var profiles = {
  guest : {
    password: "",
    profilePicture: "#",
    coverPhoto: "#",
    name: 'Guest',
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
    ]
  },
  aidanbdh: {
    password: "ilovecode",
    profilePicture: "https://avatars.slack-edge.com/2016-11-14/105015263574_c9c95137b4c2ea5b822d_512.png",
    coverPhoto: "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/14265003_331213783891679_3932103480719368665_n.jpg?oh=383515512d48f54fed8b18ab95223b69&oe=58BC340C",
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
    ]
  },
  ronperris: {
    password: "jqueryforlife",
    profilePicture: "https://avatars3.githubusercontent.com/u/963451?v=3&s=400",
    coverPhoto: "http://photos1.meetupstatic.com/photos/event/5/b/3/c/highres_441803356.jpeg",
    name: 'Ron Perris',
    work: "Orange County Code School",
    school: "Unknown",
    home: "Unknown",
    interests: [' Coding', ' Teaching', ' Probably other things.'],
    bio: "Hi, I'm Mr. Perris's Bio. He lived. He lives. He will have lived. As will everyone. Probably.",
    quotes:"I use jQuery in 100% of my projects! -Nor sirrep",
    posts: [
      "Can't wait to look at Aidan's pull requests! Save the best for last I always say"
    ]
  },
  timdavis: {
    password: "$$$",
    profilePicture: "https://avatars.slack-edge.com/2016-11-14/105043765510_b72b4ba7f80738e50dab_512.jpg",
    coverPhoto: "https://avatars3.githubusercontent.com/u/7432943?v=3&s=460",
    name: 'Tim Davis',
    work: "Orange County Code School",
    school: "Colonial America, 1800's",
    home: "Somewhere over the Rainbow",
    interests: [' Coding', ' Teaching', 'Jaming', '$$$'],
    bio: "Hi, I'm Mr. Davis's Bio. He lived. He lives. He will have lived. As will everyone. Probably not him.",
    quotes:"Veni Vindi Vichi Vector Victor Victor  -Tim Davinchi",
    posts: [
      "I have almost found the Philosophers Stone! I can stop drinking unicorns blood and absorbing the souls of children to continue my existence!"
    ]
  }
};

var loginButton = document.getElementById('login');
var currentProfile = profiles.guest;
var addedPost = 0;

//Login
var login = function () {
  var username = prompt("What is your username?");
  if(username) {
    var password = prompt("What is your password?");
    if (password === profiles[username].password) {
      //Remove elements
      content.innerHTML = "";
      //
      currentProfile = profiles[username];
      timelineFunction();
      profileFunction();
      loginButton.textContent= "Logout";
      loginButton.removeEventListener('click', login, false);
      loginButton.addEventListener('click', logout, false);
    };
  };
};

//Logout
var logout = function() {
  var out = window.confirm("Do you want to logout?");
  if(out) {
    //Remove elements
    content.innerHTML = "";
    //
    currentProfile = profiles.guest;
    timelineFunction();
    profileFunction();
    loginButton.textContent= "Login";
    loginButton.addEventListener('click', login, false);
    loginButton.removeEventListener('click', logout, false);
  };
};

loginButton.addEventListener('click', login, false);
profileFunction();
timelineFunction();
