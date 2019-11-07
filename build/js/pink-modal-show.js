var formBtn = document.querySelector('.pink--form__button');
var req = document.querySelector('.pink--form__modal--required');
var success = document.querySelector ('.pink--form__modal--sended');
var closeReq = req.querySelector ('.pink--form__modal--reqired-button');
var closeSuccess = success.querySelector('.pink--form__modal--sended-button');
var reqSurname = document.querySelector('.pink--form__personal-info--text-input[name="surname"');
var reqName = document.querySelector('.pink--form__personal-info--text-input[name="name"]');
var reqMail = document.querySelector('.pink--form__connect-info--text-input[type=email]');


  formBtn.addEventListener("click", function(_event) {
    event.preventDefault();
    if(!reqSurname.value || !reqName.value || !reqMail.value) {
    req.classList.remove('pink--form__modal--close');
    } else {
      success.classList.remove('pink--form__modal--close');
    }
  });


closeSuccess.addEventListener("click", function(_event) {
  success.classList.add('pink--form__modal--close');
});

closeReq.addEventListener("click", function(_event) {
  req.classList.add('pink--form__modal--close');
})

