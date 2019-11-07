(function () {
  var popup = document.querySelector('.nerds--pop-up');
  var btnOpen = document.querySelector('.nerds--contact-us-btn');
  var btnClose = document.querySelector('.nerds--close-button');
  var name = popup.querySelector('#name');
  var email = popup.querySelector('#e-mail');
  var storage = localStorage.getItem('email');

  btnOpen.onclick = function () {
    event.preventDefault();
    popup.classList.add('nerds--pop-up-active');

    if (storage) {
      email.value = storage;
      name.focus();
    } else {
      name.focus();
    }
  };

  btnClose.onclick = function () {
    popup.classList.remove('nerds--pop-up-active');
    popup.classList.remove("nerds--modal-error");
  }

  popup.addEventListener("submit", function (event) {
    if (!name.value || !email.value) {
      event.preventDefault();
      popup.classList.remove('nerds--modal-error');
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('nerds--modal-error');
    } else {
      localStorage.setItem("[name=name]", name.value);
    }
  });

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains('nerds--pop-up-active')) {
        popup.classList.remove('nerds--pop-up-active');
        popup.classList.remove('nerds--modal-error');
      }
    }
  });

}());


