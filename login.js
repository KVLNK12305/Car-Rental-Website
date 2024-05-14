const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signUp');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})

signInButton.addEventListener('click',function(){
    signUpForm.style.display="none";
    signInForm.style.display="block";
})


// Function to sign up a new user
function signUp(email, password, firstName, lastName) {
    // Check if the username already exists
    if (localStorage.getItem(email)) {
        alert(`Username '${email}' already exists. Please choose a different username.`);
        return;
    }

    // Store user details in localStorage
    const userDetails = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    };

    localStorage.setItem(email, JSON.stringify(userDetails));
    alert(`User '${email}' signed up successfully. Click on sign in in bottom right of the form to sign in.`);
}

// Function to sign in a user
function signIn(email, password) {
    // Retrieve user details from localStorage
    const userDetailsJSON = localStorage.getItem(email);

    if (userDetailsJSON) {
        const userDetails = JSON.parse(userDetailsJSON);

        // Check if the password matches
        if (userDetails.password === password) {
            alert(`Welcome back, ${userDetails.firstName} ${userDetails.lastName}!`);
            window.open("index.html");
            return true;
        } else {
            alert('Incorrect password. Please try again.');
            return false;
        }
    } else {
        alert(`User '${email}' not found. Please sign up.`);
        return false;
    }
}

// Handle form submissions
document.addEventListener('DOMContentLoaded', () => {
    // Signup form submission
    document.getElementById('signupForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        signUp(email, password, firstName, lastName);
    });

    // Signin form submission
    document.getElementById('signinForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;
        signIn(email, password);
    });
});
