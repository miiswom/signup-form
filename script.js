const inputs = document.querySelectorAll('input.regextest');

const patterns = {
    phone_number: /^\d{11}$/,
    first_name: /^[a-z]+$/i, 
    last_name:/^[a-z]+$/i,
    pwd:/^[\w@-_]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

let firstNameValid = document.getElementById('firstNameInvalid');
let firstNameInvalid = document.getElementById('firstNameInvalid');

let lastNameValid = document.getElementById('lastNameValid');
let lastNameInvalid = document.getElementById('lastNameInvalid');

let phoneValid = document.getElementById('phoneValid');
let phoneInvalid = document.getElementById('phoneInvalid');

let pwdValid = document.getElementById('pwdValid');
let pwdInvalid = document.getElementById('pwdInvalid');

let confirmValid = document.getElementById('confirmValid');
let confirmInvalid = document.getElementById('confirmInvalid');

let emailValid = document.getElementById('emailValid');
let emailInvalid = document.getElementById('emailInvalid');

// let pwd1test = document.getElementById('pwd').value;
// let pwd2 = document.getElementById('pwd_confirm').value; 
// let msg = document.getElementById('confirm_msg');

let pwd1test = document.getElementById('pwd');
let pwd2test = document.getElementById('pwd_confirm');
let msg = document.getElementById('confirm_msg');

pwd2test.addEventListener('blur', () => {
    if(pwd1test.value != 0) {
        if(pwd1test.value == pwd2test.value) {
            console.log("It matches");
            pwd2test.className = 'valid';
            msg.textContent = 'valid';
        } else {
            console.log("It doesn't matches");
            pwd2test.className = 'invalid ';
            msg.textContent = 'invalid ';
        }
    };
});

    // msg = '';
    // console.log(pwd1, pwd2);


// const smalls = document.querySelectorAll('small.emojify')


// function emojify(input) {
// const divs = document.querySelectorAll('div.wrapper');

// for (let i=0; i; i++) ((div) => {
//     if (input.classList.contains('valid')) {
//         let small = document.createElement('small')
//         div.appendChild(small);
//         small.textContent = '✅';
//         return;
//     } else if (input.classList.contains('invalid')) {
//         let small = document.createElement('small');
//         div.appendChild(small);
//         small.textContent = '❌';
//     } else {
//         return;

// }}
// )};

function validate(field, regex) {
        if(regex.test(field.value)) {
            field.classList.add('valid',);
            field.classList.remove('invalid');
        } else {
            field.classList.add('invalid');
            field.classList.remove('valid')
        }  
    
    };


// const container = document.getElementById('form-top')
inputs.forEach((input) => {
    input.addEventListener('blur', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
        // emojify(e.target)
    });
    });


