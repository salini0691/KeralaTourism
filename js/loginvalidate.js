function validate()
{
let email = document.getElementById("username");
let error = document.getElementById("error");
let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;



if (regexp.test(email.value)){
    error.innerHTML = "Valid Email id ";
    error.style.color = "green";
    return true;
}
else{
    error.innerHTML = "Invalid Email id ";
    error.style.color = "red";
    return false;
}
}