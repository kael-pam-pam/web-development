async function sendFormData(event) {
  event.preventDefault();  
  let responsed = await saveFeedback();
  showErrors(responsed);
}

async function saveFeedback() {
  const formData = new FormData(document.forms.formWriteMe);
  let response = await fetch('http://localhost:8080/index.php', {
    method: 'POST',
    body: formData
  })
  if (response.ok) {
    return await response.json();
  } else {
    return null;
  }
}

function showErrors(callback) {
  const successMessage = document.querySelector('.success_message');
  let elem;
  for (let key in callback) {
    elem = document.getElementById(key);
    if (callback[key] == 'valid') {
      elem.classList.remove('not_valid');
    } else {
      elem.classList.add('not_valid');
    }
  }
  if (callback['name'] == 'valid' && callback['email'] == 'valid' && callback['message'] == 'valid') {
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
