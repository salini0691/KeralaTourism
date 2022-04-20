function validate()
{
let email = document.getElementById("signupEmail");
    let error = document.getElementById("error");
    let phone = document.getElementById("mobileNumber");
    let error1 = document.getElementById("error1");
    let pwd = document.getElementById("signupPassword");
    let error2 = document.getElementById("error2");
    let cpwd = document.getElementById("signupPasswordagain");
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let phno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let strong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    let medium = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    
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
    if (phno.test(phone.value)){
        error1.innerHTML = "Valid format"
        error1.style.color = "green";
      return true;
    }
    else{
        error1.innerHTML = "Invalid format: Mobile mumber must be typed in XXX-XXX-XXXX or XXX.XXX.XXXX or XXX XXX XXXX formats";
        error1.style.color = "red";
        return false;
    }
   
    if (pwd.value == cpwd.value){
        if (strong.test(pwd.value)){
            error2.innerHTML = "Strong password.";
            error2.style.color = "green";
            return true;
        }
        else if (medium.test(pwd.value)){
            error2.innerHTML = "Medium strong password.";
            error2.style.color = "orange";
            return true;  
        }
        else{
            error5.innerHTML = "Weak password:  Try again ";
            error5.style.color = "red";
            return false;
        }    
    }
    else{
        error2.innerHTML = "Password  not match. Try again";
        error2.style.color = "red";
        return false;
    }

    
}