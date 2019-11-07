'use strict';

function initMap() {
  var center = {lat: 59.9392, lng: 30.3219};
  var pin = {lat: 59.9388, lng: 30.3238};
  var map = new google.maps.Map(document.getElementById('nerds--map'), {
    zoom: 17,
    disableDefaultUI: false,
    center: center,
  });

  var marker = new google.maps.Marker({
    position: pin,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    title: 'nerds',
    icon: {
      url: "img/nerds/map-marker.png",
      scaledSize: new google.maps.Size(231, 190)
    }
  });
};
