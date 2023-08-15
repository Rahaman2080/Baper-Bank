// step-1: add submit button handler
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field with id
    // have to use .value to get text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password from html input password field with id
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // step-4: verify email and password and check whether valid user or not 
    if(email === 'rahaman@gmail.com' && password === 'secret'){
        window.location.href ='bank.html';
    }
    else{
        alert('invalid user email or password');
    }
})