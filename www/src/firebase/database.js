function setupPlayer(db, uid, username){

  // Grab location first and then store all into database
  navigator.geolocation.getCurrentPosition(onSuccess, onError);

  function onSuccess(position) {
    
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Add a new document in collection "players"
    db.collection("players").doc(uid).set({
    
      username          : username, 
      human             : true,
      geopointPlayer    : new firebase.firestore.GeoPoint(latitude, longitude),
      geopointKangaroo  : new firebase.firestore.GeoPoint(latitude, longitude),
      timestampPlayer   : firebase.firestore.FieldValue.serverTimestamp(),
      timestampKangaroo : firebase.firestore.FieldValue.serverTimestamp()
    
    }).then(function() {
        console.log("Document successfully written!");
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    });
  };

  // onError Callback receives a PositionError object
  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  };
};

function updateGeoLocation(db, uid){

  navigator.geolocation.getCurrentPosition(onSuccess, onError);

  function onSuccess(position) {
    
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Add a new document in collection "players"
    db.collection("players").doc(uid).update({
    
      geopointPlayer    : new firebase.firestore.GeoPoint(latitude, longitude),
      timestampPlayer   : firebase.firestore.FieldValue.serverTimestamp()
    
    }).then(function() {
        console.log("Document successfully updated!");
    }).catch(function(error) {
        console.error("Error updating document: ", error);
    });
  };

  // onError Callback receives a PositionError object
  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  };
};

// Get elements
const btnUpdateLocation = document.getElementById('updateLocation');

// Button handler
btnUpdateLocation.addEventListener('click', function(){
  updateGeoLocation(database, userID);
});