/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
function fb_authenticate(){
    // authenticate with Google
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