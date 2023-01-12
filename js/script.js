//Autofocus on the name input field on load of the form. 
let userName = document.querySelector('#name');
let email = document.querySelector('email');
userName.focus();

document.querySelector('#other-job-role').type = 'hidden';



/*takes the input from the user and updates the users name with every keypress */
    userName.addEventListener('input', function (e) {
        userName = e.target.value;
        console.log(userName);
    });

function emailValidation() {
    //Regex to test if the email is valid. 
    const validEmail = /^([a-z\d\.-])+@([a-z\d]+)\.([a-z]+)(\.[a-z]{2,8})?$/;
    let testEmail = 'email333@yahoo.com';
    let isValidEmail = validEmail.test(testEmail);
    console.log(isValidEmail);
    /*Check to see if the input in the email field is a valid email address comparing it 
    to the userEmail regex.*/
    
}

function submitForm() {
    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('button clicked')
    })
}

emailValidation()
submitForm();