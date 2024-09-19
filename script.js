// Select DOM elements
const formOpenBtn = document.getElementById('form-open');
const formCloseBtn = document.querySelector('.form_close');
const signupLink = document.getElementById('signup');
const loginLink = document.getElementById('login');
const formContainer = document.querySelector('.form_container');
const homeSection = document.querySelector('.home');

// Function to open the form modal
function openForm() {
  homeSection.classList.add('show');
}

// Function to close the form modal
function closeForm() {
  homeSection.classList.remove('show');
}

// Function to switch to signup form
function showSignup() {
  formContainer.classList.add('active');
}

// Function to switch to login form
function showLogin() {
  formContainer.classList.remove('active');
}

// Event listeners for opening and closing the form
formOpenBtn.addEventListener('click', openForm);
formCloseBtn.addEventListener('click', closeForm);

// Event listeners for switching between login and signup
signupLink.addEventListener('click', (e) => {
  e.preventDefault();
  showSignup();
});

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  showLogin();
});

// Password Visibility Toggle
const pwHideElements = document.querySelectorAll('.pw_hide');

pwHideElements.forEach((icon) => {
  icon.addEventListener('click', () => {
    const passwordInput = icon.previousElementSibling;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.replace('uil-eye-slash', 'uil-eye');
    } else {
      passwordInput.type = 'password';
      icon.classList.replace('uil-eye', 'uil-eye-slash');
    }
  });
});

// Close the form when clicking outside the form container
window.addEventListener('click', (e) => {
  if (e.target === homeSection) {
    closeForm();
  }
});
