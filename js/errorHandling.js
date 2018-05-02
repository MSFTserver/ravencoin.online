// IN CASE OF A FIREBASE ERROR
function firebaseError() {
  let submitButton = document.getElementById('contact-submit');
  submitButton.classList.add('disabled');
  submitButton.innerText = 'SERVER ERROR!'
}
