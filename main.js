let form = document.querySelector('#myForm');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let myemail = document.querySelector('#myemail');
let mypassword = document.querySelector('#mypassword');
let submit = document.querySelector('#submit');
let loginForm = document.querySelector('#loginForm');
let loginLink = document.querySelector('#showLogin');
let signupLink = document.querySelector('#showSignup');
let signup = document.querySelector('.signupLink');
let login = document.querySelector('.loginLink');

//after content loaded
document.addEventListener('DOMContentLoaded', ()=>{
    loginForm.style.display = 'none';
    signup.style.display = 'none';
})

//Signup form submission
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "post",
        body: new FormData(document.querySelector("#myForm")),
    }).then(
        response => response.json()
    ).then((html) => {
      alert('Registration complete. Thanks')
      form.username.value = "";
      form.email.value = "";
      form.password.value = "";
    });
});

//showlogin button
loginLink.addEventListener('click', ()=>{
    form.style.display = 'none';
    loginForm.style.display = 'block'
    signup.style.display = 'block';
    login.style.display = 'none'
})

//showsignup button
signupLink.addEventListener('click', ()=> {
    form.style.display = 'block';
    loginForm.style.display = 'none';
    signup.style.display = 'none';
    login.style.display = 'block';
})

//login form submission
loginForm.addEventListener("submit", e => {
    e.preventDefault();
    fetch(`${loginForm.action}/search?email=${myemail.value}&password=${mypassword.value}&casesensitive=false`)
    .then( response => response.json() )
    .then( data => {
        if(data.length == 0 ) {
            alert('Oops! Enter correct details');
        } else {
            if(myemail.value == data[0].email && mypassword.value == data[0].password) {
                // alert(`Welcome ${data[0].username}`);
                window.localStorage.setItem('user', `${data[0].username}`);
                window.localStorage.setItem('email', `${data[0].email}`)
                window.location.href = 'page.html'
            } else {
                alert('Oops! Enter correct details');
            }
        }
        loginForm.myemail.value = "";
        loginForm.mypassword.value = "";
    } );
});


