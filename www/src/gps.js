import { updateDb } from './firebase'

var onSuccess = function (position) {

  alert('Longitude: ' + position.coords.longitude + '\n' +
    'Latitude: ' + position.coords.latitude + '\n' +
    'Altitude: ' + position.coords.altitude + '\n' +
    'Accuracy: ' + position.coords.accuracy + '\n' +
    'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
    'Heading: ' + position.coords.heading + '\n' +
    'Speed: ' + position.coords.speed + '\n' +
    'Timestamp: ' + position.timestamp + '\n');

   updateGPS(position.coords.latitude, position.coords.longitude)

};

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');
};

export function getGPS() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
};

export function updateGPS(latitude, longitude) {
  updateDb({
    latitude,
    longitude
  }, "user pero")
};

// ----------------------------------------------------------
// Archive
// ----------------------------------------------------------

var grid_division = 180;

function getGridPosition(longitude, latitude) {
  x = Math.floor((longitude / 180) * grid_division);
  y = Math.floor((latitude / 90) * grid_division);
  //console.log(x,y);
  return [x, y]
};