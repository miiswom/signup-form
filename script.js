const inputs = document.querySelectorAll('input.regextest');

const patterns = {
    phone_number: /^\d{11}$/,
    first_name: /^[a-z]+$/i, 
    last_name:/^[a-z]+$/i,
    pwd:/^[\w@-_]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

let pwd1 = document.getElementById('pwd').value;
let pwd2 = document.getElementById('pwd_confirm').value; 
let msg = document.getElementById('confirm_msg');

// function validatePwd() {
//     let pwd1 = document.getElementById('pwd').value;
//     let pwd2 = document.getElementById('pwd_confirm').value; 
//     let msg = document.getElementById('confirm_msg');
//     msg = '';
//     // console.log(pwd1, pwd2);
//     if(pwd1 != 0) {
//         if(pwd1 == pwd2) {
//             console.log("It matches");
//             msg.innerHTML = 'valid';
//         } else {
//             console.log("It doesn't matches");
//             msg.innerHTML = 'invalid';
//         }
//     }
// };

function validate(field, regex) {
    if(regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});