var grid_division=180


var onSuccess = function(position) {
    grid_pos=getGridPostition(position.coords.longitude,position.coords.latitude);
    alert( 'Longitude: '         + position.coords.longitude         + '\n' +
          'Latitude: '          + position.coords.latitude          + '\n' +
/*          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +*/
          'Timestamp: '         + position.timestamp                + '\n' +
          'Grid X: '            + grid_pos[0]                       + '\n' +
          'Grid Y: '            + grid_pos[1]                       + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


function getGPS(){
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}

function getGridPostition(longitude,latitude){
  x=Math.floor( (longitude/180)*grid_division );
  y=Math.floor( (latitude/90)*grid_division );
  //console.log(x,y);
  return [x,y]
}