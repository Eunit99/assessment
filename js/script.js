const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const time = document.getElementById('time');
const date = document.getElementById('date');
const purpose = document.getElementById('purpose');









//Show input error messages
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-wrapper error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//show success colour
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-wrapper success';
}

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not invalid');
  }
}


//checkRequired fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input);
    }
  });
}


//check input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be les than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

//get FieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}


//Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([name, email, password, password2, time, date, purpose]);
  checkLength(name, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});