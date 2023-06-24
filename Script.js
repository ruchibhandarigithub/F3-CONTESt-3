console.log('profile.html');
const signUp = document.getElementById('signup-btn');
const passwordMatching = document.getElementById('password-matching');
const error = document.getElementById('error');
const success= document.getElementById('success');
signUp.addEventListener('click',function(event){
    event.preventDefault();
    // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;''

  if (name === '' || email === '' || password === '') {
    error.textContent = 'All fields are mandatory.';
    success.textContent = '';
    password.textContent='';
    return;
  }

  if(password!==confirmPassword){
    passwordMatching.textContent='Error: Password does not match';
    error.textContent = '';
    success.textContent = '';
    return;

  }
  // Generate access token
  const accessToken = generateAccessToken();
  const userState = {
    name: name,
    email: email,
    password: password,
    accessToken: accessToken
  };
  localStorage.setItem('userState',JSON.stringify(userState));
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('confirmPassword').value = '';
  error.textContent = '';
  success.textContent = 'Signup successful. Redirecting to profile...';

 
  
  setTimeout(function() {
    window.location.href = 'profile.html';
  }, 2000);

}); 

function generateAccessToken() {
    // Generate random 16-byte string as access token
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';
    for (let i = 0; i < 16; i++) {
      accessToken += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return accessToken;
}
  
