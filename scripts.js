const password = document.querySelector('input[name=password]');
const confirmPassword = document.querySelector('input[name=confirm]');
const submit = document.querySelector('input[type=submit]');
const inputWrapper = document.querySelector('#input-wrapper');

password.addEventListener('change', validatePassword);
confirmPassword.addEventListener('change', validatePassword);

function validatePassword(){
    if(password.value !== confirmPassword.value && confirmPassword.value){
        submit.disabled = true;
        password.classList.add("error");
        confirmPassword.classList.add("error");
        inputWrapper.classList.add("error");
    }
    else{
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        inputWrapper.classList.remove("error");
        submit.disabled = false;
    }
}