const inputs = document.querySelectorAll('input.regextest');

const patterns = {
    phone_number: /^\d{11}$/,
    first_name: /^[a-z]+$/i, 
    last_name:/^[a-z]+$/i,
    pwd:/^[\w@-_]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

// let pwd1test = document.getElementById('pwd').value;
// let pwd2 = document.getElementById('pwd_confirm').value; 
// let msg = document.getElementById('confirm_msg');



function validatePwd() {
    let pwd1test = document.getElementById('pwd');
    let pwd2test = document.getElementById('pwd_confirm');
    let msg = document.getElementById('confirm_msg');
    // msg = '';
    // console.log(pwd1, pwd2);
    if(pwd1test.value != 0) {
        if(pwd1test.value == pwd2test.value) {
            console.log("It matches");
            pwd2test.className = 'valid';
            msg.textContent = 'valid';
        } else {
            console.log("It doesn't matches");
            pwd2test.className = 'invalid';
            msg.textContent = 'invalid';
        }
    }
};

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