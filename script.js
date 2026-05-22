//seperate google data from user data
//add option to use seperate link for photo

//maybe change hello google name to hello or welcome please fill out form if no username stored and welcome back username if username found (maybe if no username say hello google name and swap when username found)

//change username to name


console.log("Running Sal's Strawberries");

function getForm() {
    console.log('');
    console.log('getting form');
    // Get the form data
    const username = document.getElementById("username").value;
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    const fruitQuantity = document.getElementById("fruitQuantity").value;

    if (fieldIsNull(username) || fieldIsNull(favoriteFruit) || fieldIsNull(fruitQuantity)) {
        alert('please fill out all fields');
        return;
    }
    if (!GLOBAL_user) {
alert('log in with google');
return;
    }

        firebase.database().ref('/miniProject/users/' + GLOBAL_user.uid).update({

            'username': username,
            "favoriteFruit": favoriteFruit,
            'fruitQuantity': fruitQuantity

        });

triggerGoogleUpdateStatus();
    succsesAgnolagement();

    console.log(username + favoriteFruit + fruitQuantity)
}

function succsesAgnolagement() {
    confetti({
        position: { x: innerWidth / 2, y: innerHeight / 2 },
        count: 1000,
        size: 1,
        velocity: 200,
        fade: false
    });
}