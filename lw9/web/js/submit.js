async function sendFormData(event) {
  event.preventDefault();  
  const responsed = await saveFeedback();
  showErrors(responsed);
}

async function saveFeedback() {
  const formData = new FormData(document.forms.formWriteMe);
  const response = await fetch('http://localhost:8080/index.php', {
    method: 'POST',
    body: formData
  })
  if (response.ok) {
    return await response.json();
  }
  return null;
}

function showErrors(respond) {
  const successMessage = document.querySelector('.success_message');
  let elem;
  for (let key in respond) {
    elem = document.getElementById(key);
    if (respond[key] == 'valid') {
      elem.classList.remove('not_valid');
    } else {
      elem.classList.add('not_valid');
    }
  }
  if (respond['name'] == 'valid' && respond['email'] == 'valid' && respond['message'] == 'valid') {
    const form = document.forms.formWriteMe;
    form.reset();
    successMessage.classList.add('visible');
  } else {
    successMessage.classList.remove('visible');
  }
}

function initSubmitJS() {
  const form = document.forms.formWriteMe;
  form.addEventListener('submit', sendFormData);
}
