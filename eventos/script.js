const inputName = document.forms.cadastro.name;
inputName.addEventListener('keyup', handleInputNameKeyUp);

const inputEmail = document.forms.cadastro.email;
inputEmail.addEventListener('change', handleInputEmailChange);

const btnSubmit = document.querySelector('[type="submit"]');
btnSubmit.addEventListener('click', handleBtnSubmitClick);

function handleBtnSubmitClick(event) {
    event.preventDefault();
    console.log(`Dados: ${inputName.value}, ${inputEmail.value}`);
}

function handleInputNameKeyUp(event) {
    console.log(event.target.value);
}

function handleInputEmailChange(event) {
    if (validateEmail(event.target.value)) {
        event.target.classList.remove('input-error');
    } else {
        event.target.classList.add('input-error');
    }
}


function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}