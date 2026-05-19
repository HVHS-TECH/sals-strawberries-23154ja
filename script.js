
console.log("Running Sal's Strawberries");

function getForm(){
    console.log('');
    console.log('getting form');
    // Get the form data
            const username = document.getElementById("username").value;
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    const fruitQuantity = document.getElementById("fruitQuantity").value;

    if(fieldIsNull(username)||fieldIsNull(favoriteFruit)||fieldIsNull(fruitQuantity)) {
        alert('please fill out all fields');
        return;
    }

  firebase.database().ref('/miniProject/users/' + username).set({
    
        'username': username,
        "favoriteFruit": favoriteFruit,
        'fruitQuantity': fruitQuantity
    
});




    console.log(username+favoriteFruit+fruitQuantity)
}
