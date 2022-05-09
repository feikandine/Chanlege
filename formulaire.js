function maVerification() {
    //      recuperation_zone
    let nam = document.getElementById("name");
    let email = document.getElementById("Email");
    let number = document.getElementById("number");
    let coach = document.getElementById("coach");
    let message = document.getElementById("msg");

    // //  Storage area (zone de stockage)
    let user_name = document.getElementById("user_name");
    let user_email = document.getElementById("user_email");
    let user_satifation = document.getElementById("user_satifation");
    let user_Coach = document.getElementById("user_Coach");
    let user_message = document.getElementById("user_message");

    // verifiction_zone
    user_name.innerHTML = nam.value;
    user_email.innerHTML = email.value;
    user_satifation.innerHTML = number.value;
    user_Coach.innerHTML = coach.value;
    user_message.innerHTML = message.value


}