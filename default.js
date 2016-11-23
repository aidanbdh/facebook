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
    posts: []
  },
  aidanbdh : {
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
  }

};

var loginButton = document.getElementById('login');

//Current User
var currentProfile = profiles.guest;
var login = function () {
  var username = prompt("What is your username?");
  var password = prompt("What is your password?");
  if (password === profiles[username].password) {
    currentProfile = profiles[username];
    timelineFunction();
    profileFunction();
    loginButton.textContent= "logout";
    loginButton.removeEventListener('click', login, false);
    loginButton.addEventListener('click', function(e) {
      var logout = window.confirm("Do you want to logout?");
      if(logout){
        currentProfile = profiles.guest;
        timelineFunction();
        profileFunction();
        loginButton.addEventListener('click', login, false);
      };
    }, false);
  };
};

//login
loginButton.addEventListener('click', login, false);

profileFunction();
timelineFunction();
