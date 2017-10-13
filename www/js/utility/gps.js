var onSuccess = function(position) {

  alert('Longitude: '         + position.coords.longitude         + '\n' +
        'Latitude: '          + position.coords.latitude          + '\n' +
        'Altitude: '          + position.coords.altitude          + '\n' +
        'Accuracy: '          + position.coords.accuracy          + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        'Heading: '           + position.coords.heading           + '\n' +
        'Speed: '             + position.coords.speed             + '\n' +
        'Timestamp: '         + position.timestamp                + '\n');

  updateGPS(db, position.coords.latitude, position.coords.longitude, player.name)

};

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
};

function getGPS(){
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
};

function updateGPS(database, latitude, longitude, user){
  var userRef = database.collection("users").doc(user);
  userRef.update({
    latitude:latitude,
    longitude:longitude
  }).then(function() {
    console.log("Coordinates successfully updated!");
  })
  .catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
  });
};

// ----------------------------------------------------------
// Archive
// ----------------------------------------------------------

var grid_division=180;

function getGridPosition(longitude,latitude){
  x=Math.floor( (longitude/180)*grid_division );
  y=Math.floor( (latitude/90)*grid_division );
  //console.log(x,y);
  return [x,y]
};