//Autofocus on the name input field on load of the form. 
userName = document.querySelector('#name');
userName.focus();

document.querySelector('#other-job-role').type = 'hidden';

userName.addEventListener('input', function(e) {
    userName = e.target.value;
    console.log(userName)
})


// function selectJobRole() {
//     let jobTitle = document.querySelector('#title').value;
//     let selectOption = document.querySelector('select');
    
//     selectOption.addEventlistener('onChange', e => {
//         console.log(selectOption);
//     })
//     console.log(jobTitle, selectOption);
// }


// document.querySelector('#submit-button').addEventListener('click', e => {
//     e.preventDefault;
// })
//selectJobRole();