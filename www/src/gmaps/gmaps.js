function initMap() {
  
  var uluru = {lat: 45.81, lng: 15.98};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru,
    disableDefaultUI: true, // a way to quickly hide all controls
    zoomControl: true,
  });

  var iconKangaroo = {
    url: 'img/logo.png',
    scaledSize: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

  markerKangaroo = new google.maps.Marker({
    // position: {lat: geopointKangaroo.latitude, lng: geopointKangaroo.longitude},
    icon : iconKangaroo,
    map: map
  });

  markerPlayer = new google.maps.Marker({
    // position: {lat: geopointPlayer.latitude, lng: geopointPlayer.longitude},
    // icon: icons[feature.type].icon,
    map: map
  });

}


function loadGoogleMapsDynamically(){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBv3GMlEOAuPQrHyeRtre3plOthYOEJk-0&callback=initMap'; // & needed
  document.body.appendChild(script);
}