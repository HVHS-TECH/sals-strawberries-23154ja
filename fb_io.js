/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
var GLOBAL_user;

triggerGoogleUpdateStatus();

function triggerGoogleUpdateStatus() {
  firebase.auth().onAuthStateChanged((_user) => {
    GLOBAL_user = _user
    if (_user) {
      firebase.database().ref('miniProject/users/' + GLOBAL_user.uid + '/username').once('value', updateGoogleStatus, logError)

      firebase.database().ref('/miniProject/users/' + GLOBAL_user.uid).once('value', (snapshot) => {
        let data = snapshot.val();
        if (data.username && fieldIsNull(document.getElementById("username").value)) {
          document.getElementById("username").value = data.username;
        }
        if (data.favoriteFruit && fieldIsNull(document.getElementById("favoriteFruit").value)) {
          document.getElementById("favoriteFruit").value = data.favoriteFruit;
        }
        if (data.fruitQuantity && fieldIsNull(document.getElementById("fruitQuantity").value)) {
          document.getElementById("fruitQuantity").value = data.fruitQuantity;
        }
      }, logError);

    } else {
      updateGoogleStatus();
    }
  });
}

function updateGoogleStatus(nameOfUser) {
  if (GLOBAL_user) {
    document.getElementById("buttonBox").innerHTML = "<button onclick='googleLogoutRequest()'>Logout</button>"
    firebase.database().ref('/miniProject/users/' + GLOBAL_user.uid).update({
      "emailAddress": GLOBAL_user.email,
      "phoneNumber": GLOBAL_user.phoneNumber,
      "photoURL": GLOBAL_user.photoURL,
      "googleDisplayName": GLOBAL_user.displayName
    });
    document.getElementById("profileBox").innerHTML = '<image src="' + GLOBAL_user.photoURL + '" id="profilePic"></image><p>Hello ' + GLOBAL_user.displayName + '. On this site you will be known as: ' + nameOfUser.val() + '</p>';
  } else {
    document.getElementById("buttonBox").innerHTML = '<button onclick="googleLoginRequest()">Login with Google</button>'
    document.getElementById("profileBox").innerHTML = '';
  }
}


function googleLoginRequest() {
  let pressed = true;
  firebase.auth().onAuthStateChanged((_user) => {
    if (pressed) {
      googleLoginMiddleMan(_user);
    }
    pressed = false;
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