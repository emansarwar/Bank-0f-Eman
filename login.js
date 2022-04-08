document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    //password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'eman@gmail.com' && userPassword == 'sarwar'){
        window.location.href = 'banking.html'
    }
    // else(
    //     console.log('not a valid user')
    // )
    
    
})
