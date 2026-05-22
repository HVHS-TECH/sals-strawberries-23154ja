/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
var GLOBAL_user;


firebase.auth().onAuthStateChanged((_user) => {GLOBAL_user=_user
if(_user){
      document.getElementById("buttonBox").innerHTML = "<button onclick='googleLogoutRequest()'>Logout with Google</button>"
      firebase.database().ref('/miniProject/users/' + GLOBAL_user.uid).update({
     "emailAddress": GLOBAL_user.email,
        "phoneNumber": GLOBAL_user.phoneNumber,
        "photoURL": GLOBAL_user.photoURL,
        "googleDisplayName": GLOBAL_user.displayName
        });
} else {
      document.getElementById("buttonBox").innerHTML = '<button onclick="googleLoginRequest()">Login with Google</button>'
}
});

function googleLoginRequest() {
  let pressed = true;
firebase.auth().onAuthStateChanged((_user) => {
    if (pressed) {
    googleLoginMiddleMan(_user);
    }
    pressed=false;
  });
}

function googleLogoutRequest() {
  firebase.auth().signOut();
  console.log('user has logged out');
}

function googleLoginMiddleMan(_user) {
  if (_user) {
    console.log("user is logged in already"); 
  } else {
    console.log("user is not logged in, starting popup")
    googleLoginPopup();
  }
}


function googleLoginPopup() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    
    console.log('user has logged in');

  });
}


function fb_error() {
  // Don't forget your error handling!
}


function firebaseIsNull(data) {
  console.log("");
  console.log("running func: firebaseIsNull");
  if (data.val() == null) {
    console.log("is Null")
    return (true);
  } else {
    return (false);
  }
}

function fieldIsNull(data) {
  console.log("");
  console.log("running func: fieldIsNull");
  if ((data == null) || (data.trim() == "")) {
    console.log("is Null")
    return (true);
  } else {
    return (false);
  }
}

function logError(errorMessage) {
  console.log("");
  console.log('their was an error: ');
  console.log(errorMessage);
  HTML_OUTPUT.innerHTML = errorMessage;

}