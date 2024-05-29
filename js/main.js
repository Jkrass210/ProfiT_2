//валидация
const name = document.querySelector('#inputName');
const phone = document.querySelector('#inputPhone');
const submitBtn = document.querySelector('#btn');

let result = false;
let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

function allValid () {
  if (name.value.length < 2 ||
    !regex.test(phone.value)) {
    result = false
  } else {
    result = true
  }
  return result
}

let pointsValid = [name, phone];

function addStyleInput (input) {
  if(input === name) {
    if (input.value.length < 2) {
      name.classList.add('bottom__input--error')
    } else {
      name.classList.remove('bottom__input--error')
    }
  } else if (input === phone) {
    if (!regex.test(input.value)) {
      phone.classList.add('bottom__input--error')
    } else {
      phone.classList.remove('bottom__input--error')
    }
  }
}

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  allValid ();
  if (result === false){
    pointsValid.forEach(function(point){
      addStyleInput(point)
      point.addEventListener('input', function() {
        addStyleInput(point);
      })
    })
  } else {
    document.getElementById("myForm").submit();
  }
})
