document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUpButton');
    const signInButton = document.getElementById('signInButton');
    const signInForm = document.getElementById('signIn');
    const signUpForm = document.getElementById('signUp');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signinEmail = document.getElementById('signinEmail');
    const signinPassword = document.getElementById('signinPassword');
    const errorSpan = document.getElementById('errorSpan');
    const error_message = document.getElementById('error-message');

// Event listeners for input validation
firstNameInput.addEventListener('input', validateInput);
lastNameInput.addEventListener('input', validateInput);
emailInput.addEventListener('input', validateInput);
passwordInput.addEventListener('input', validateInput);
signinEmail.addEventListener('input', validatesigninInput);
signinPassword.addEventListener('input',validatesigninInput);

function validatesigninInput(){
    let errorMessage = '';

    if(signinEmail.validity.valueMissing){
        errorMessage += 'Email is required.<br>';
    }
    else if(signinEmail.validity.patternMismatch){
        errorMessage += 'Please enter a valid email address.<br>';
    }

    if (signinPassword.validity.valueMissing) {
        errorMessage += 'Password is required.<br>';
    } else if (signinPassword.validity.patternMismatch) {
        errorMessage += 'Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter.<br>';
    }

    error_message.innerHTML = errorMessage;

}

function validateInput() {
    let errorMessage = '';

    // First Name validation
    if (firstNameInput.validity.valueMissing) {
        errorMessage += 'First name is required.<br>';
    } else if (firstNameInput.validity.patternMismatch) {
        errorMessage += 'First name must be at least 3 letters long and contain only letters.<br>';
    }

    // Last Name validation
    if (lastNameInput.validity.valueMissing) {
        errorMessage += 'Last name is required.<br>';
    } else if (lastNameInput.validity.patternMismatch) {
        errorMessage += 'Last name must be at least 3 letters long and contain only letters.<br>';
    }

    // Email validation
    if (emailInput.validity.valueMissing) {
        errorMessage += 'Email is required.<br>';
    } else if (emailInput.validity.typeMismatch) {
        errorMessage += 'Please enter a valid email address.<br>';
    }

    // Password validation
    if (passwordInput.validity.valueMissing) {
        errorMessage += 'Password is required.<br>';
    } else if (passwordInput.validity.patternMismatch) {
        errorMessage += 'Password must be at least 8 characters long and contain at least one number, one uppercase and one lowercase letter.<br>';
    }

    // Update error message span
    errorSpan.innerHTML = errorMessage;
}


    signUpButton.addEventListener('click', () => {
        signInForm.style.display = "none";
        signUpForm.style.display = "block";
    });

    signInButton.addEventListener('click', () => {
        signUpForm.style.display = "none";
        signInForm.style.display = "block";
    });

    document.getElementById('signupForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const userDetails = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
        };
        window.electron.signUp(userDetails);
    });

    document.getElementById('signinForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;
        window.electron.signIn(email, password);
    });

    window.electron.onSignUpResponse((response) => {
        alert(response);
    });

    window.electron.onSignInResponse((response) => {
        console.log(response.slice(12));
        localStorage.setItem('userDetails',JSON.stringify(response));
        alert(response);
        if(response.includes("Welcome back")){
            window.location.href = 'authorized.html';
        }
    });
});
