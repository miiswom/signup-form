// VALIDATION SCRIPT

const inputs = document.querySelectorAll('input');


const patterns = {
    phone_number: /^\d{11}$/
}

// VALIDATION FUNCTION


function validate(field, regex) {
    console.log(regex.test(field.value));
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value)
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});