import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    mail: document.querySelector('input'),
    message: document.querySelector('textarea')
}
const STORAGE_KEY = "feedback-form-state";
const savedValue = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

refs.form.addEventListener('submit', onFormSubmit);
refs.mail.addEventListener('input', throttle(onMailInput, 500));
refs.message.addEventListener('input', throttle(onMessageInput, 500));

function savedForm() {
    if ( savedValue.mail) {
        refs.mail.value = savedValue.mail       
    }
     if (savedValue.message) {
        refs.message.value = savedValue.message
    }
}
savedForm()

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY);
    console.log(savedValue)
}

function onMailInput(event) {
    const email = event.target.value;
      
    savedValue.mail = email;
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedValue))
}

function onMessageInput(event) {
    const message = event.target.value;
    
    savedValue.message = message;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedValue))
 }

console.log('ok')