'use strict';

(function () {
  var pagination = document.querySelectorAll('.nerds--slider-pagination-btn');

  pagination.forEach(function (element) {
    element.onclick = function () {
      pagination.forEach(function (el) {
        el.classList.remove('nerds--slider-pagination-btn-active');
        event.target.classList.add('nerds--slider-pagination-btn-active');
      });
    }
  });

  window.location.hash = 'nerds--slideFirst';

  var scroll = function() {
    window.scroll(0,0);
  };

  window.onload = scroll;
}());