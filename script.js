const myform = document.querySelector('form');
myform.reset();
const fname = document.querySelector('#f_name');
const lname = document.querySelector('#l_name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');
const allElements = document.querySelectorAll('input:not(:last-child)');

const errors = document.querySelectorAll('.error');

submit.addEventListener('click', function(evt){
  evt.preventDefault();
  for(var i = 0; i < allElements.length; i++) {
    if(allElements[i].id==="email" && (allElements[i].value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/!==true)|| allElements[i].value==='')) {
        errors[i].textContent=`Looks like this is not an email`;
    }
    if(allElements[i].value==='' && allElements[i].id!=="email") {
        errors[i].textContent=`${allElements[i].name} can't be empty`;
    }
  }
})
