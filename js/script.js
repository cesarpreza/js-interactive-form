//Autofocus on the name input field on load of the form. 
userName = document.querySelector('#name');
email = document.querySelector('email');
userName.focus();

document.querySelector('#other-job-role').type = 'hidden';

userName.addEventListener('input', function(e) {
    userName = e.target.value;
    console.log(userName)
})

function emailValidation() {
    const userEmail = /^([a-z\d\.-])+@([a-z\d]+)\.([a-z]+)(\.[a-z]{2,8})?$/;
    let testEmail = 'email333@yahoo.com';
    let result = userEmail.test(testEmail);
    console.log(result);
}






function submitForm() {
    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', function (e) {
        e.preventDefault;
        console.log('button clicked')
    })
}

emailValidation()
submitForm();