
  

// Profile Page
const profileName = document.getElementById('name');
const profileEmail = document.getElementById('email');
const password = document.getElementById('password');
const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', function() {
  // Clear user state and access token from local storage
  localStorage.removeItem('userState');
  
  // Redirect to signup page
  window.location.href = 'index.html';
});

// Check if user is authenticated
const userState = localStorage.getItem('userState');

if (!userState) {
  // User is not authenticated, redirect to signup page
  window.location.href = 'index.html';
} else {
  // User is authenticated, retrieve user details from local storage
  const user = JSON.parse(userState);
  
  // Display user details on profile page
  profileName.textContent = user.name;
  profileEmail.textContent = user.email;
  password.textContent =user.password;
}
