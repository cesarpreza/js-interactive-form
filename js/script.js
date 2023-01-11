//Autofocus on the name input field on load of the form. 
userName = document.querySelector('#name');
userName.focus();

document.querySelector('#other-job-role').type = 'hidden';

userName.addEventListener('input', function(e) {
    userName = e.target.value;
    console.log(userName)
})


function submitForm() {
    const submitButton = document.querySelector('#submit-button');
    submitButton.addEventListener('click', function (e) {
        e.preventDefault;
        console.log('button clicked')
    })
}

submitForm();