//Autofocus on the name input field on load of the form. 
let userName = document.querySelector('#name');
let email = document.querySelector('#email');
userName.focus();

document.querySelector('#other-job-role').type = 'hidden';



/*takes the input from the user and updates the users name with every keypress */
userName.addEventListener('input', function (e) {
    userName = e.target.value;
    console.log(userName);
});

email.addEventListener('input', function (e) {
        userEmail = e.target.value
        console.log(userEmail);
    })

function emailValidation(userEmail) {
    let emailHint = document.querySelector('#email-hint.email-hint.hint');
    // Regex to test if the email is valid and contains a username an @ symbol a mailserver and domain 
    const validEmail = /^([a-z\d\.-])+@([a-z\d]+)\.([a-z]+)(\.[a-z]{2,8})?$/;
    let testEmail = 'email333@yahoo.com';
    let isValidEmail = validEmail.test(userEmail.value);

    if (isValidEmail) {
        console.log('success!');
    } else {
        //if email is invalid, change hint display from hidden to visible;
        emailHint.style.display = 'visible';
        email.style.color = 'red';
        console.log('error');
    }

    console.log(isValidEmail);
    /*Check to see if the input in the email field is a valid email address comparing it 
    to the userEmail regex.*/
    
}

function submitForm() {
    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        emailValidation(email);
    })
}


submitForm();