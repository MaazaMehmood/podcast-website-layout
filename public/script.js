// mob menu
const hamburger = document.querySelector('.header .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navbar-list');
const menu_item = document.querySelectorAll('.header .navbar .navbar-list li a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


// form validations
const validateForm = ( ) => {
  const form = document.getElementById('form');
  const fname = document.getElementById("first-name").value;
  const lname = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const firstNameError = document.getElementById('firstnameError');
  const lastNameError = document.getElementById('lastnameError');

  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regex_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  form.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validate field
    if (fname === '') {
      firstNameError.textContent = 'Name is required';
      return;
    }
    if (lname === '') {
      lastNameError.textContent = 'Name is required'; 
      return;     
    }  
    if (!email.match(regex_email)) {
      emailError.textContent = 'Invalid email format';
      return;
    }
    if (!password.match(regex_pass)) {
      passwordError.textContent = 'Not valid password \n should be atleast 8 characters and must contain atleast on number and uppercase letter';
      return;
    }
    console.log("form submitted successfully")
    form.submit();
    
  }); 
}