const form = document.getElementById("form");
const name = document.getElementById("fname").value;
const gender = document.getElementById("gender");
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;
    
function Validate(){
    if(!isNaN(name)){
        document.getElementById('fullname').innerHTML = "**Only characters are allowed";
        return false;
    }

    else if(isNaN(phone)){
        document.getElementById('phoneNumber').innerHTML = "**Please enter only numbers";
        return false;
    }
    else if(phone.lenght!=10){
        document.getElementById('phoneNumber').innerHTML = "**Please enter ten digits";
        return false;
    }
}