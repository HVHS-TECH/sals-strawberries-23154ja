/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
var GLOBAL_user;

 function googleLoginRequest(){
firebase.auth().onAuthStateChanged(googleLoginMiddleMan);
}


function googleLoginMiddleMan(_user) {
  console.log(_user)
if (_user) {
  console.log("user is logged in already");
  GLOBAL_user=_user;
} else {
  console.log("user is not logged in, starting popup")
  googleLoginPopup();
}
}


function googleLoginPopup(){
  var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then((result) => {
GLOBAL_user = result.user;
console.log('user has logged in');
});
}


function fb_error(){
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
  if ((data == null)||(data.trim()=="")) {
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