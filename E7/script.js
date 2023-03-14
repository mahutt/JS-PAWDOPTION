/* To display the date and time in the header: */

function displayDate() {
    var date = new Date();
    document.getElementById("date").innerHTML = date.toDateString() + "<br>" + date.toLocaleTimeString();
}
setInterval(displayDate, 1000);

/* Client-side form validation for cat & dog finder forms*/

function validateCatForm() { 
    let radioButtons = document.forms["catform"]["animalGender"];
    if (!radioButtons[0].checked && !radioButtons[1].checked && !radioButtons[2].checked)
        return false;
    return true;
}

function validateDogForm() { 
    let radioButtons = document.forms["dogform"]["animalGender"];
    if (radioButtons[0].checked == false && radioButtons[1].checked == false && radioButtons[2].checked == false)
        return false;
    return true;
}

/* Client-side form validation for the pet giveaway form */
// MAKE FOCUS SWITCH TO AREA OF CONCERN?

function validateGiveawayForm() {
    let formElements = document.getElementById("giveawayform");
    if (!formElements["animalType"][0].checked && !formElements["animalType"][1].checked) {
        alert("Please choose an animal type.")
        return false;
    }
    else if (!formElements["animalGender"][0].checked && !formElements["animalGender"][1].checked) {
        alert("Please choose an animal gender.")
        return false;
    }
    else if (formElements["petDescription"].value == "") {
        alert("Please enter a short description.");
        return false;    
    }
    else if (formElements["firstName"].value == "") {
        alert("Please enter your first name.")
        return false;
    }
    else if (formElements["familyName"].value == "") {
        alert("Please enter your family name.")
        return false;
    }    
    else if (formElements["email"].value == "") {
        alert("Please enter your email.")
        return false;
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formElements["email"].value))) {
        alert("Please enter a valid email.")
        return false;
    }
    else {
        return true;
    }
}





