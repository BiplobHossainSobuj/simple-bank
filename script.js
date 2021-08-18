document.getElementById('login-btn').addEventListener('click',function(){
    // console.log('cliked');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userEmail,userPassword);
    window.location.href ='dashboard.html';
})
