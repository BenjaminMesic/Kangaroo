var updateLocation  = function(position) {
  var idToken  = firebase.auth().currentUser.uid
  var db       = firebase.firestore();
  var userRef  = db.collection('users').doc(idToken);
  setWithMerge = userRef.set({
    longitude: position.coords.longitude,
    latitude : position.coords.latitude
  },{ merge: true });
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


function getLocation(){
	navigator.geolocation.getCurrentPosition(updateLocation, onError);
	}



//const btnUpdateLocation = document.getElementById('forceLocationButton');
//btnUpdateLocation.addEventListener('click', getLocation())